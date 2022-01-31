import React, { useEffect, useState } from "react";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import {
  defaultLayoutPlugin,
  ToolbarProps,
  ToolbarSlot,
} from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import {
  HandToolIcon,
  TextSelectionIcon,
} from "@react-pdf-viewer/selection-mode";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "./index.css";
import { MoreIcon } from "@react-pdf-viewer/toolbar";
import {
  toolbarPlugin,
  MoreActionsPopover,
  MoreActionsPopoverProps,
} from "@react-pdf-viewer/toolbar";
function CustomPDFviewer({ pdf }) {
  const transform = (slot) => {
    const { NumberOfPages } = slot;

    return Object.assign({}, slot, {
      NumberOfPages: () => (
        <>
          / <NumberOfPages />
        </>
      ),
      Download: () => null,
      Print: () => null,
      Open: () => null,
      DownloadMenuItem: () => null,
      PrintMenuItem: () => null,
      ShowPropertiesMenuItem: () => null,
    });
  };
  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          ShowSearchPopover,

          ZoomIn,
          CurrentScale,
          Rotate,

          ZoomOut,
        } = slots;
        slots = transform(slots);

        return (
          <div className=" flex-disply-tool" style={{ width: "100%" }}>
            <div className=" flex-disply-tool">
              <div>
                <ShowSearchPopover />
              </div>

              <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                <GoToPreviousPage />
              </div>

              <div style={{ padding: "0px 2px", width: "2rem" }}>
                <CurrentPageInput />
              </div>
              <div style={{ padding: "0px 5px", color: "inherit" }}>
                / <NumberOfPages />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <GoToNextPage />
              </div>
            </div>
            <div className="disappear-small-view flex-disply-tool">
              <div style={{ padding: "0px 2px" }}>
                <ZoomOut />
              </div>
              <div style={{ padding: "0px 2px" }}>
                <CurrentScale>
                  {(props) => (
                    <span>{`${Math.round(props.scale * 100)}%`}</span>
                  )}
                </CurrentScale>
              </div>
              <div style={{ padding: "0px 2px" }}>
                <ZoomIn />
              </div>
            </div>

            <div className="flex-disply-tool">
              <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                <EnterFullScreen />
              </div>
              <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                <Rotate />
              </div>

              <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
                <MoreActionsPopover toolbarSlot={slots} />
              </div>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );
  const defaultLayoutPluginInstance = defaultLayoutPlugin({ renderToolbar });

  const handleDocumentLoad = (e) => {
    const { activateTab } = defaultLayoutPluginInstance;
    activateTab(1);
  };
  const renderPage = (props) => (
    <>
      {props.canvasLayer.children}
      <div
        style={{
          alignItems: "center",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          left: 0,
          position: "absolute",
          top: 0,
          width: "100%",
        }}
      >
        <div
          style={{
            color: "rgba(0, 0, 0, 0.2)",
            fontSize: `${8 * props.scale}rem`,
            fontWeight: "bold",
            textTransform: "uppercase",
            transform: "rotate(-45deg)",
            userSelect: "none",
          }}
        >
          Draft
        </div>
      </div>
      {props.annotationLayer.children}
      {props.textLayer.children}
    </>
  );
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
      <div style={{ height: "96vh" }}>
        <Viewer
          fileUrl={pdf}
          plugins={[defaultLayoutPluginInstance]}
          onDocumentLoad={handleDocumentLoad}
          renderPage={renderPage}
        />
      </div>
    </Worker>
  );
}

export default CustomPDFviewer;
