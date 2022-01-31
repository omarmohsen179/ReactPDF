import * as React from "react";
import { Icon, Viewer, Worker } from "@react-pdf-viewer/core";
import { toolbarPlugin, MoreActionsPopover } from "@react-pdf-viewer/toolbar";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "./index.css";
import NoteSection from "./Components/NoteSection";
import QuestionSection from "./Components/QuestionSection";
function CustomNavBar({ pdf, Notes, Questions }) {
  const toolbarPluginInstance = toolbarPlugin();
  const SideBar = React.useRef([
    {
      content: <NoteSection Notes={Notes.data} submit={Notes.submit} />,
      icon: (
        <Icon size={16}>
          <path d="M23.5,17a1,1,0,0,1-1,1h-11l-4,4V18h-6a1,1,0,0,1-1-1V3a1,1,0,0,1,1-1h21a1,1,0,0,1,1,1Z" />
          <path d="M5.5 12L18.5 12" />
          <path d="M5.5 7L18.5 7" />
        </Icon>
      ),
      title: "Notes",
    },
    {
      content: (
        <QuestionSection Questions={Questions.data} submit={Questions.submit} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-question-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
        </svg>
      ),
      title: "Questions",
    },
  ]);
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
  const transform = React.useCallback((slot) => {
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
  }, []);

  const renderToolbar = (Toolbar) => (
    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,

    sidebarTabs: (defaultTabs) => {
      defaultTabs = defaultTabs.concat(SideBar.current);
      defaultTabs.splice(2, 1);
      return [...defaultTabs];
    },
    toolbarPlugin: {
      searchPlugin: {
        keyword: ["document"],
        onHighlightKeyword: (props) => {
          props.highlightEle.style.outline = "3px dashed blue";
          props.highlightEle.style.backgroundColor = "rgba(0, 0, 0, .1)";
        },
      },
    },
  });
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
      <div
        style={{
          flex: 1,
          overflow: "hidden",
          height: "80vh",
        }}
      >
        <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
}

export default CustomNavBar;
