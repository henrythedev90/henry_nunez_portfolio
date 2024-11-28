import React from "react";
import "./styles.css";

const PdfViewer = () => {
  return (
    <div className="pdf_container">
      <h1>Resume</h1>
      <div className="pdf_file_container">
        <embed
          src="/pdfs/Henry_Nunez_Resume_2024.pdf"
          width="1126px"
          height="1150px"
          type="application/pdf"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default PdfViewer;
