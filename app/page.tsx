"use client";

import { useState } from "react";

import Compress from "@/components/compress/compress";
import Upload from "@/components/compress/upload";

function Home() {
  const [fileToReducer, setFileToReducer] = useState<File | null>(null);
  return (
    <section className="relative p-3 py-10 space-y-4 min-h-[50vh] flex flex-col items-center justify-center">
      <Upload setFileToReducer={setFileToReducer} />
      {fileToReducer && (
        <Compress
          fileToReducer={fileToReducer}
          setFileToReducer={setFileToReducer}
        />
      )}
    </section>
  );
}

export default Home;
