"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import Image from "next/image";
import CompressorCore from "./compressor_core";
import JSZip from "jszip";

interface ReducerProps {
  fileToReducer: FileList | null;
  setFileToReducer: Dispatch<SetStateAction<FileList | null>>;
}

export interface FileToReduce {
  fileType: string;
  inputName: string;
  inputSrc: string;
  inputSize: number;
  outputName: string;
  outputSrc: string;
  outputSize: number;
  compressionInProgress: boolean;
}

export const dataConverter = (num: number): string => {
  if (num / 1024 > 1024) {
    const toMb = `${num / 1024 / 1024}`;
    return `${parseInt(toMb)}MB`;
  }
  if (num / 1024 < 1024) {
    const toKb = `${num / 1024}`;
    return `${parseInt(toKb)}KB`;
  }
  return "";
};

function ImgCompressor({ fileToReducer }: ReducerProps) {
  const [files, setFiles] = useState<FileToReduce[]>([]);
  const [selectedFile, selectFile] = useState<string>("");
  const [downloadInProgress, setDownloadInProgress] = useState<boolean>(false);

  const removeFile = (inputName: string) => {
    const fileToRemoveIndex = files.findIndex(file => file.inputName === inputName);
    const fileToRemove = files[fileToRemoveIndex];
    const remainingFiles = files.filter(img => img.inputName !== inputName);
    remainingFiles.length > 0 && selectFile(remainingFiles[Math.max(fileToRemoveIndex - 1, 0)].inputName);
    setFiles(remainingFiles);
    fileToRemove?.inputSrc && URL.revokeObjectURL(fileToRemove.inputSrc);
    fileToRemove?.outputSrc && URL.revokeObjectURL(fileToRemove.outputSrc);
  }

  const updateOutput = (inputName: string, outputName: string, outputSrc: string, outputSize: number) => {
    const fileToUpdate = files.find(file => file.inputName === inputName);
    if (!fileToUpdate) {
      return
    }
    const objToRevoke = fileToUpdate.outputSrc;
    setFiles(prevFiles =>
      prevFiles.map(file => {
        if (file.inputName === inputName) {
          file.outputName = outputName;
          file.outputSrc = outputSrc;
          file.outputSize = outputSize;
          file.compressionInProgress = false;
        }
        return file;
      })
    );
    objToRevoke && URL.revokeObjectURL(objToRevoke);
  };

  const updateCompressionInProgress = (inputName: string, inProgress: boolean) => {
    const fileToUpdate = files.find(file => file.inputName === inputName);
    if (!fileToUpdate) {
      return
    }
    setFiles(prevFiles =>
      prevFiles.map(file => {
        if (file.inputName === inputName) {
          file.compressionInProgress = inProgress;
        }
        return file;
      })
    );
  }

  const downloadZip = async () => {
    const zip = new JSZip();
    setDownloadInProgress(true);
    try {
      for (const file of files) {
        const blob = await (await fetch(file.outputSrc)).blob();
        zip.file(file.outputName, blob);
      }
    } catch (err) {
      setDownloadInProgress(false);
    }
    zip.generateAsync({ type: 'blob' }).then((zipFile) => {
      const currentDate = new Date().toISOString();
      const fileName = `compressy_${currentDate}.zip`;
      const link = document.createElement('a');
      link.href = URL.createObjectURL(zipFile);
      link.download = fileName;
      link.click();
      setDownloadInProgress(false);
    });
  }

  useEffect(() => {
    if (!fileToReducer || !fileToReducer.length) return;
    setFiles(prevFiles => {
      const _files: FileToReduce[] = [];
      Array.from(fileToReducer || []).forEach((fileToReduce) => {
        if (prevFiles.findIndex(file => fileToReduce.name == file.inputName) == -1) {
          _files.push({
            fileType: fileToReduce.type,
            inputSrc: URL.createObjectURL(fileToReduce),
            inputName: fileToReduce.name,
            inputSize: fileToReduce.size,
            outputName: "",
            outputSrc: "",
            outputSize: 0,
            compressionInProgress: false
          });
        }
      });
      if (!_files.length) return prevFiles;

      const result = [...prevFiles, ..._files];
      selectFile(result[result.length - 1].inputName)
      return result;
    });
  }, [fileToReducer]);

  return (
    <div className="container mx-auto space-y-4">
      {
        files.map((file) =>
          <div key={file.inputName} className={selectedFile === file.inputName ? "visible" : "hidden"}>
            <CompressorCore
              fileToReduce={file}
              removeSelf={() => removeFile(file.inputName)}
              setCompressionInProgress={(inProgress) => { updateCompressionInProgress(file.inputName, inProgress) }}
              updateOutput={(name, src, size) => updateOutput(file.inputName, name, src, size)}
            />
          </div>
        )
      }
      {
        (files.length > 1) && 
        <>
          <section className="flex flex-wrap justify-around justify-items-center items-center h-fit w-fit max-w-screen-lg mx-auto overflow-auto rounded-lg dark:bg-slate-950 bg-slate-50">
            {Array.from(files).map((file) => {
              return (
                <figure key={file.inputName} className={"relative h-fit w-fit m-2 rounded-md border-2 cursor-pointer transition-transform duration-250 ease-in-out " + (selectedFile === file.inputName ? "scale-105 border-green-500" : "hover:scale-105 dark:border-slate-50 border-slate-950 ")} onClick={() => selectFile(file.inputName)}>
                  <Image
                    src={file.inputSrc}
                    alt={file.inputName}
                    width={160}
                    height={160}
                    quality={30}
                    className="rounded max-w-[160px] max-h-[160px] w-auto h-auto" />
                  <figcaption className={"max-w-[100px] absolute bottom-0 inset-x-0 w-fit h-fit mx-auto p-1 text-white text-center text-xs rounded " + (selectedFile === file.inputName ? "bg-green-500" : "bg-opacity-75 bg-black")}>
                    <strong> {`${dataConverter(file.outputSize)} / ${dataConverter(file.inputSize)}`}</strong>
                  </figcaption>
                  {
                    file.compressionInProgress &&
                      <div className="absolute inset-0 m-auto h-full w-full bg-black bg-opacity-50">
                        <Image
                          src="/loading.png"
                          alt="Compression in progress"
                          width={160}
                          height={160}
                          className="absolute max-w-[40px] max-h-[40px] inset-0 m-auto animate-spin"
                        />
                      </div>
                  }
                </figure>
              );
            })}
          </section>
          <section className="max-w-screen-lg mx-auto p-0 space-y-4">
            <a onClick={downloadZip}
              className={`bg-blue-500 rounded-lg py-3 text-xl text-center text-white font-bold p-2 duration-75 !border-transparent block ${downloadInProgress ? " opacity-50 cursor-wait" : " cursor-pointer"}`}
            >
              {"Download Zip" + ` (${files.length} files)`}
            </a>
          </section>
        </>
      }
    </div>
  );
}

export default ImgCompressor;
