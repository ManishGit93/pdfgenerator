import React from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";

const GeneratePdf = ({ formRef, showButton, fileName }) => {
  
  const downloadPdf = async () => {
    if (!formRef.current) {
      console.error("Form reference not found");
      return;
    }

    try {
      const formImage = await toPng(formRef.current, { quality: 1.0 });
      const pdf = new jsPDF('p', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(formImage);
      const scaleFactor = Math.min(pdfWidth / imgProps.width, pdfHeight / imgProps.height);
      const scaledWidth = imgProps.width * scaleFactor;
      const scaledHeight = imgProps.height * scaleFactor;
      const xPosition = (pdfWidth - scaledWidth) / 2;
      pdf.addImage(formImage, 'PNG', xPosition, 0, scaledWidth, scaledHeight, '', 'FAST');

      // Generate a timestamp if fileName is not provided
      const timestamp = new Date().toISOString().replace(/[-:T.]/g, "").slice(0, 14);
      const pdfFileName = fileName ? `${fileName}.pdf` : `${timestamp}.pdf`;

      pdf.save(pdfFileName);
    } catch (error) {
      console.error("Error generating PDF", error);
    }

    window.location.reload();
  };

  return (
    <div className="button-container">
      <button onClick={downloadPdf}>
        {showButton ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="plusbtn1"
          >
            <path
              d="M10.8936 9.19151L8.17015 11.9149L5.44675 9.19151"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.17017 4.76595V11.5745"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <>Get PDF</>
        )}
      </button>
    </div>
  );
};

export default GeneratePdf;
