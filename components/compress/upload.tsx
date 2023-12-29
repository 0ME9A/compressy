import React, { ChangeEvent, Dispatch, SetStateAction } from "react";

interface UploadProps {
  setFileToReducer: Dispatch<SetStateAction<FileList | null>>;
}

const Upload: React.FC<UploadProps> = ({ setFileToReducer }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileToReducer(e.target.files);
    }
  };

  return (
    <div className="container p-0">
      <div className="max-w-screen-lg w-full relative mx-auto h-52 rounded-lg overflow-hidden">
        <label
          htmlFor="upload"
          className="w-full h-full rounded-lg bg-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 border-2 border-transparent hover:border-gray-50 dark:hover:border-gray-950 cursor-pointer relative z-10 top-0 left-0 flex flex-col justify-center items-center"
        >
          <span className="font-bold text-2xl">Upload Images</span>
          <span className="my-2 text-center">Upload one or more images in JPG, JPEG, or PNG format to compress</span>
        </label>
        <input
          type="file"
          name="upload"
          id="upload"
          accept=".jpg, .png, .jpeg"
          onChange={handleFileChange}
          required
          multiple
          className="border font-bold absolute top-0 left-0 opacity-0"
        />
      </div>
    </div>
  );
};

export default Upload;
