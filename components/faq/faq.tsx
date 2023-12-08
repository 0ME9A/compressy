import { FaChevronDown } from "react-icons/fa";

import React, { useEffect } from "react";
import Link from "next/link";

interface QnA {
  question: string;
  answer: React.JSX.Element;
}

const qna:QnA[] = [
  {
    question: "Can I compress multiple images at once?",
    answer: <>This feature is currently under development. Check out the related issue for updates on implementing bulk image compression.</>,
  },
  {
    question: "Can I contribute to the development of Compressy?",
    answer: <>Yes. Compressy is an open source project. You can contribute to the development of Compressy by opening a pull request to the <a href='https://github.com/0ME9A/compressy' target="_blank" className='text-blue-500'>0ME9A/compressy</a>GitHub repository.</>
  },
  {
    question: "How secure is the compression process?",
    answer: <>Compressy employs client-side processing, ensuring that your files are compressed locally without being sent to a server. This approach prioritizes user privacy and data security.</>
  },
  {
    question: "Where are the files submitted for compression saved?",
    answer: <>The files you upload and the compressed versions are stored temporarily in your browser&apos;s memory and are not saved on any server. All compression occurs directly within your browser.</>
  },
  {
    question: "What kind of data does Compressy collect?",
    answer: <>Compressy uses cookies for statistical and ad personalization purposes. Refer the <Link href='/terms-privacy' className='text-blue-500'>Terms & Privacy</Link> to know more.</>
  },
];

function Faq() {
  useEffect(() => {
    const details = document.querySelectorAll("details");

    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });

  }, []);

  const renderQnA = (qnaVal: QnA, index: number) => (
    <details className="my-4" key={index}>
      <summary className="hover:cursor-pointer list-none border-b p-4 flex flex-nowrap justify-between">
        <strong>{qnaVal.question}</strong>
        <FaChevronDown className="inline" />
      </summary>
      <p className="p-4">{qnaVal.answer}</p>
    </details>
  );

  return (
    <section className="max-w-screen-lg w-full mx-auto p-2 sm:p-10 relative">
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      {qna.map((val, idx) => renderQnA(val, idx))}
    </section>
  );
}

export default Faq;
