"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";

const GeneratePDF = dynamic(() => import("../../components/pdfGenrate/GeneratePdf"), { ssr: false });

export default function Home() {
  const formRef = useRef(null);

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10">
        {/* Page Header */}


        {/* Download Button */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            <GeneratePDF formRef={formRef} fileName={"questions"} showButton="Download PDF" />
          </button>
        </div>

        {/* Questions and Answers */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <form ref={formRef} className = "p-3">
            <div className="max-w-2xl mx-auto text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Interview Questions and Answers</h1>
              <p className="text-gray-600 mt-2">Prepare for your interview with these frequently asked questions.</p>
            </div>
            <div className="space-y-6">
              {/* Question 1 */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800">Question 1</h2>
                <p className="mt-2 text-lg text-gray-700">What is React?</p>
                <p className="mt-1 text-gray-600">Answer: React is a JavaScript library for building user interfaces.</p>
              </div>

              {/* Question 2 */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800">Question 2</h2>
                <p className="mt-2 text-lg text-gray-700">What are the key features of React?</p>
                <p className="mt-1 text-gray-600">Answer: Key features include Virtual DOM, JSX, and component-based architecture.</p>
              </div>

              {/* Question 3 */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800">Question 3</h2>
                <p className="mt-2 text-lg text-gray-700">What is JSX in React?</p>
                <p className="mt-1 text-gray-600">Answer: JSX stands for JavaScript XML, which allows HTML to be written in React.</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
