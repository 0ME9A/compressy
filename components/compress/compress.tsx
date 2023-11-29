"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import InvalidImageType from "../error/InvalidImgType";
import Button from "../buttons&links/Button";
import Image from "next/image";

interface ReducerProps {
  fileToReducer: File | null;
  setFileToReducer: Dispatch<SetStateAction<File | null>>;
}

function ImgCompressor({ fileToReducer, setFileToReducer }: ReducerProps) {
  const [W, setW] = useState<number>(0);
  const [H, setH] = useState<number>(0);
  const [imgSize, setImgSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [isError, setError] = useState({
    error: false,
    title: "",
    description: "",
  });
  const [inputSrc, setInputSrc] = useState<string | null>(null);
  const [imgElement, setImgElement] = useState<HTMLImageElement | null>(null);
  const [outputSrc, setOutputSrc] = useState<string | null>(null);
  const [inputImgLoad, setInputImgLoad] = useState<number>(0);
  const [outputImgLoad, setOutputImgLoad] = useState<number>(0);

  const dataConverter = (num: number, divide: number): string => {
    if (num / divide > 1024) {
      const toMb = `${num / divide / 1024}`;
      return `${parseInt(toMb)}MB`;
    }
    if (num / divide < 1024) {
      const toKb = `${num / divide}`;
      return `${parseInt(toKb)}KB`;
    }
    return "";
  };

  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d");
    if (ctx && imgElement && canvas.width > 0 && canvas.height > 0) {
      ctx.drawImage(imgElement, 0, 0, canvas.width, canvas.height);
      const srcEncoded = ctx.canvas.toDataURL("image/png");
      setOutputSrc(srcEncoded);
      setOutputImgLoad(srcEncoded.length);
    }
  }, [W, H, imgElement]);

  useEffect(() => {
    if (!fileToReducer) return;

    if (
      fileToReducer.type === "image/jpeg" ||
      fileToReducer.type === "image/jpg" ||
      fileToReducer.type === "image/png"
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          setInputSrc(e.target.result as string);
          const newElement = document.getElementById(
            "img-input"
          ) as HTMLImageElement;
          setInputImgLoad(reader.result?.toString().length || 0);

          newElement.onload = (event: Event) => {
            const target = event.target as HTMLImageElement;
            const imgHeight = target.naturalHeight;
            const imgWidth = target.naturalWidth;
            setImgSize({ width: imgWidth, height: imgHeight });
            setH(Math.round(imgHeight / 3));
            setW(Math.round(imgWidth / 3));
            setImgElement(target);
          };
        }
      };

      reader.readAsDataURL(fileToReducer);
      setError((prev) => ({ ...prev, error: false }));
    } else {
      const description =
        "We only support JPG, JPEG, and PNG files. Please upload a valid image.";

      setError({ error: true, title: "Invalid Image Type", description });
    }
  }, [fileToReducer]);

  if (isError.error) {
    return (
      <InvalidImageType
        title={isError.title}
        description={isError.description}
      />
    );
  }

  return (
    <div className="container mx-auto space-y-4">
      <section className="p-4 py-12 max-w-screen-lg w-full mx-auto flex flex-col items-center justify-center gap-8 rounded-lg bg-gray-200 dark:bg-gray-800">
        <h1 className="text-2xl font-bold">{fileToReducer?.name}</h1>
        <div className="w-full space-y-4">
          <div className="flex gap-8 justify-center items-center w-full">
            <label htmlFor="width" className="inline-block font-bold w-16">
              Width
            </label>
            <input
              id="width"
              type="range"
              min="1"
              max={imgSize.width}
              step="1"
              value={W}
              onChange={(e) => setW(parseInt(e.target.value, 10))}
              className="max-w-sm w-full"
            />
            <span className="pl-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 font-bold">
              {W}
              <strong className="ml-3 rounded-r-lg p-2 px-2 bg-white dark:bg-black">
                PX
              </strong>
            </span>
          </div>
          <div className="flex gap-8 justify-center items-center w-full">
            <label htmlFor="height" className="inline-block font-bold w-16">
              Height
            </label>
            <input
              id="height"
              type="range"
              min="1"
              max={imgSize.height}
              step="1"
              value={H}
              onChange={(e) => setH(parseInt(e.target.value, 10))}
              className="max-w-sm w-full"
            />
            <span className="pl-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-900 font-bold">
              {H}
              <strong className="ml-3 rounded-r-lg p-2 px-2 bg-white dark:bg-black">
                PX
              </strong>
            </span>
          </div>
        </div>
        <div className="btn-group flex gap-4">
          <Button
            className="!bg-red-500"
            onClick={() => {
              setFileToReducer(null);
            }}
          >
            Delete
          </Button>
          <Button
            className="!bg-red-500"
            onClick={() => {
              setH(imgSize.height);
              setW(imgSize.width);
            }}
          >
            Max
          </Button>
          <Button
            onClick={() => {
              setH(parseInt(`${imgSize.height / 3}`, 10));
              setW(parseInt(`${imgSize.width / 3}`, 10));
            }}
          >
            Reset
          </Button>
        </div>
      </section>

      <section className="sm:flex h-fit max-w-screen-lg mx-auto overflow-hidden rounded-lg bg-blue-200">
        <figure className="w-full h-full aspect-square relative">
          <Image
            src={inputSrc || "/loading.png"}
            alt="Original image"
            id="img-input"
            width={500}
            height={500}
            quality={100}
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute top-0 left-0 p-4 text-white text-shadow bg-opacity-75 bg-black">
            Original
            <strong> {dataConverter(inputImgLoad, 1024)}</strong>
          </figcaption>
        </figure>
        <figure className="w-full h-full aspect-square relative">
          <Image
            src={outputSrc || "/loading.png"}
            alt="Compressed image"
            id="img-output"
            width={500}
            height={500}
            quality={100}
            className="h-full w-full object-cover"
          />
          <figcaption className="absolute top-0 left-0 p-4 text-white text-shadow bg-opacity-75 bg-black">
            Compressed
            <strong> {dataConverter(outputImgLoad, 1360)}</strong>
          </figcaption>
        </figure>
      </section>

      {outputSrc && (
        <section className="max-w-screen-lg mx-auto p-0">
          <a
            href={outputSrc || "#"}
            download={"compressy"}
            className="bg-blue-500 rounded-lg py-3 text-xl text-center text-white font-bold p-2 duration-75 !border-transparent block"
          >
            Download
          </a>
        </section>
      )}
    </div>
  );
}

export default ImgCompressor;
