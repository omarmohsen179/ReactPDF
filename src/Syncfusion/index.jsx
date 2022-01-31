import React, { useEffect, useRef, useState } from "react";

import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  TextSearch,
  FormFields,
  FormDesigner,
  Inject,
  RadioButtonFieldSettings,
} from "@syncfusion/ej2-react-pdfviewer";

import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
function Syncfusion({ pdf }) {
  let scopeNav = useRef();
  let ref = React.createRef();
  const [vi, setvi] = useState();
  let viewer;
  useEffect(() => {
    console.log("ressss");
    ref.current?.toolbar?.showToolbarItem(["OpenOption"], false);
    ref.current.toolbar.showToolbarItem(["DownloadOption"], false);
    ref.current.toolbar.showToolbarItem(["SelectionTool"], false);
    ref.current.toolbar.showToolbarItem(["PrintOption"], false);
    ref.current.toolbar.showToolbarItem(["FormDesignerEditTool"], false);
    ref.current.toolbar.showToolbarItem(["Navigation"], false);
  }, [ref]);
  async function showToolbarClicked() {
    /*    console.log(JSON.stringify(await ref.current?.exportAnnotationsAsObject()));
    localStorage.setItem(
      "pdf",
      JSON.stringify(await ref.current?.exportAnnotationsAsObject())
    );*/
    console.log(JSON.parse(localStorage.getItem("pdf")));
    /*  ref.current.importAnnotation(
      JSON.parse(localStorage.getItem("pdf"))["pdfAnnotation"]
    );*/
  }

  return (
    <div>
      <ButtonComponent onClick={showToolbarClicked}>Import</ButtonComponent>

      <PdfViewerComponent
        id="container"
        documentPath={pdf}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
        style={{ height: "640px" }}
        ref={ref}
        annotationAdd={() => console.log("here")}
        /* ref={(scope) => {
          // scope.toolbar.showToolbarItem(["OpenOption"], false);
          scope.toolbar.showToolbarItem(["DownloadOption"], false);
          scope.toolbar.showToolbarItem(["SelectionTool"], false);
          scope.toolbar.showToolbarItem(["PrintOption"], false);
          scope.toolbar.showToolbarItem(["FormDesignerEditTool"], false);
          scope.toolbar.showToolbarItem(["Navigation"], false);
          //  scope.exportAnnotationsAsObject.then((e) => console.log(e));
          // setvi(scope);
          // scope.importAnnotation();
        }}*/
        sup
      >
        <Inject
          services={[
            Toolbar,
            Magnification,
            Navigation,
            Annotation,
            LinkAnnotation,
            BookmarkView,
            ThumbnailView,
            Print,
            TextSelection,
            TextSearch,
          ]}
        />
      </PdfViewerComponent>
    </div>
  );
}

export default Syncfusion;
