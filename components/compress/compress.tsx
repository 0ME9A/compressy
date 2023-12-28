"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

import Image from "next/image";
import CompressorCore from "./compressor_core";
import JSZip from "jszip";
import { dataConverter } from "@/utils/common";

interface ReducerProps {
  fileToReducer: FileList | null;
  setFileToReducer: Dispatch<SetStateAction<FileList | null>>;
}

function ImgCompressor({ fileToReducer }: ReducerProps) {
  const [images, setImages] = useState<{ file: File; src: string }[]>([]);
  const [selectedFile, selectFile] = useState<string>("");
  const [downloadInProgress, setDownloadInProgress] = useState<boolean>(false);
  const outputSources = useRef<{ inputName: string, outputName: string, src: string }[]>([]);

  const removeFile = (inputName: string) => {
    const inputObjToRevoke = images.find(img => img.file.name === inputName);
    const newImages = images.filter(img => img.file.name !== inputName);
    newImages.length > 0 && selectFile(newImages[0].file.name);
    setImages(newImages);
    inputObjToRevoke?.src && URL.revokeObjectURL(inputObjToRevoke?.src);

    const outputObjToRevoke = outputSources.current.find(src => src.inputName === inputName);
    outputSources.current = outputSources.current.filter(src => src.inputName !== inputName);
    outputObjToRevoke && URL.revokeObjectURL(outputObjToRevoke?.src);
  }

  const setOutputSource = (inputName: string, outputName: string, src: string) => {
    const curOutputSrc = outputSources.current.find(item => item.inputName === inputName);
    if (!curOutputSrc) {
      outputSources.current.push({ inputName, outputName, src });
    } else {
      const objToRevoke = curOutputSrc.src;
      outputSources.current = outputSources.current.map(item => {
        if (item.inputName === inputName) {
          item.outputName = outputName;
          item.src = src;
        }
        return item;
      });
      objToRevoke && URL.revokeObjectURL(objToRevoke);
    }
  };

  const downloadZip = async () => {
    const zip = new JSZip();
    setDownloadInProgress(true);
    try {
      for (const img of outputSources.current) {
        const blob = await (await fetch(img.src)).blob();
        zip.file(img.outputName, blob);
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
    const _images = Array.from(fileToReducer || []).map((file) => ({
      file,
      src: URL.createObjectURL(file),
    }));
    selectFile(_images[0].file.name);
    setImages(_images);
  }, [fileToReducer]);

  return (
    <div className="container mx-auto space-y-4">
      {
        images.map((img) =>
          <div key={img.file.name} className={selectedFile === img.file.name ? "visible" : "hidden"}>
            <CompressorCore
              file={img.file}
              removeSelf={() => removeFile(img.file.name)}
              inputImageSrc={img.src}
              setOutputImageSrc={(name, src) => setOutputSource(img.file.name, name, src)}
            />
          </div>
        )
      }

      {(images.length > 1) && (
        <>
          <section className="flex flex-wrap justify-around justify-items-center items-center h-fit w-fit max-w-screen-lg mx-auto overflow-auto rounded-lg dark:bg-slate-950 bg-slate-50">
            {Array.from(images).map((img) => {
              return (
                <figure key={img.file.name} className="relative h-fit w-fit m-2 rounded-md border-2 dark:border-slate-50 border-slate-950 cursor-pointer transition-transform duration-250 ease-in-out hover:scale-105" onClick={() => selectFile(img.file.name)}>
                  <Image
                    src={img.src || "/loading.png"}
                    alt="Original image"
                    id="img-input"
                    width={160}
                    height={160}
                    quality={30}
                    className="rounded max-w-[160px] max-h-[160px] w-auto h-auto" />
                  <figcaption className="absolute top-0 left-0 p-1 text-white text-shadow bg-opacity-75 bg-black text-xs rounded">
                    <strong> {dataConverter(img.file.size, 1024)}</strong>
                  </figcaption>
                </figure>
              );
            })}
          </section>

          <section className="max-w-screen-lg mx-auto p-0 space-y-4">
            <a
              onClick={downloadZip}
              className={"bg-blue-500 rounded-lg py-3 text-xl text-center text-white font-bold p-2 duration-75 !border-transparent block "
                + (downloadInProgress ? " opacity-50 cursor-wait" : " cursor-pointer")}
            >
              Download Zip
            </a>
          </section>
        </>
      )}
    </div>
  );
}

export default ImgCompressor;
