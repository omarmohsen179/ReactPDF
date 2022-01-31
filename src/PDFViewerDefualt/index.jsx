import React, { useEffect, useState } from "react";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
// Import the main component
import { Viewer, Worker } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewerDefualt = ({ pdf }) => {
  //document.getElementsByClassName("rpv-toolbar__right")[0]?.remove();
  let intialAction = () => {
    if (
      document?.getElementsByClassName(
        "rpv-core__display--hidden rpv-core__display--block-medium"
      )?.length === 5
    ) {
      document
        .getElementsByClassName(
          "rpv-core__display--hidden rpv-core__display--block-medium"
        )[2]
        .remove();
      document.getElementsByClassName(
        "rpv-core__display--hidden rpv-core__display--block-medium"
      );
      document
        .getElementsByClassName(
          "rpv-core__display--hidden rpv-core__display--block-medium"
        )[2]
        .remove();
      document
        .getElementsByClassName(
          "rpv-core__display--hidden rpv-core__display--block-medium"
        )[2]
        .remove();
      document.getElementsByClassName("rpv-toolbar__item")[9].remove();
    }
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
      <div style={{ height: "96vh" }}>
        <Viewer
          fileUrl={pdf}
          plugins={[defaultLayoutPluginInstance]}
          onDocumentLoad={intialAction}
        />
      </div>
    </Worker>
  );
};

export default React.memo(PDFViewerDefualt);
