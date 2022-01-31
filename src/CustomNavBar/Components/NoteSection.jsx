import React, { useEffect, useState } from "react";
import Card from "../Elements/Card";
import Form from "../Elements/Form";

function NoteSection({ Notes, Submit, IdKey = "Id" }) {
  const [active, setactive] = useState(0);

  return (
    <div className="side_bar_section">
      <Form placeholder={"Add A Note  "} />
      {Notes.length > 0 ? (
        <div>
          {Notes.map((ele) => (
            <Card data={ele} active={active} />
          ))}
        </div>
      ) : (
        "Notes are listed here"
      )}
    </div>
  );
}

export default NoteSection;
