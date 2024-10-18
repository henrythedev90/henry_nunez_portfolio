"use client";
import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ fileUrl }) => {
  const [error, setError] = useState<string | null>(null);

  const handleError = (error: Error) => {
    setError("Failed to load PDF file");
    console.error(error);
  };
  return (
    <>
      {error && <p>{error}</p>}
      <Document file={fileUrl} onLoadError={handleError}>
        <Page pageNumber={1} />
      </Document>
    </>
  );
};

export default PdfViewer;
