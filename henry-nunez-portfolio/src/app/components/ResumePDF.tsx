import React from "react";
import PdfViewer from "./PdfViewer";
import { useState, useEffect } from "react";

const resumePath = "/pdfs/Henry_Nunez_Resume_2024.pdf";

const ResumePDF: React.FC = () => {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Example of checking if the PDF loads correctly
    const pdfUrl = "/pdfs/Henry_Nunez_Resume_2024.pdf"; // Ensure this path is correct
    const img = new Image();
    img.src = pdfUrl;
    img.onload = () => console.log("PDF loaded successfully");
    img.onerror = () => setError("Failed to load PDF");
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <PdfViewer fileUrl={resumePath} />
    </div>
  );
};

export default ResumePDF;
