import React, { useCallback, useEffect, useState } from "react";
import Card from "../Elements/Card";
import Form from "../Elements/Form";

function NoteSection({ Notes = [], IdKey = "Id", setData }) {
  const [active, setactive] = useState(0);
  const [Values, setValues] = useState({ Id: 0, Text: "" });
  const handleClick = useCallback(
    (e) => {
      setactive(e[IdKey]);
      setValues(e);
    },
    [Notes]
  );
  const handleNew = useCallback((e) => {
    setValues({ Id: 0, Text: "" });
    setactive(-1);
  }, []);
  const handleChange = useCallback(async (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  }, []);
  const handleRemove = useCallback(
    async (id) => {
      setData(Notes.filter((ele) => ele[IdKey] != id));
    },
    [Notes]
  );
  const Submit = () => {
    if (Values[IdKey] > 0) {
      setData(
        Notes.map((ele) => {
          return ele[IdKey] === Values[IdKey] ? Values : ele;
        })
      );
      return;
    }
    setData([{ ...Values, Id: Notes.length + 1 }, ...Notes]);
    setValues({ ...Values, Id: Notes.length + 1 });
    setactive(Notes.length + 1);
  };
  return (
    <div className="side_bar_section">
      <Form
        placeholder={"Add A Note  "}
        data={Values}
        handleChange={handleChange}
        Submit={Submit}
        IdKey={IdKey}
        Add={handleNew}
      />
      {Notes.length > 0 ? (
        <div className="list-container ">
          {Notes.map((ele) => (
            <Card
              data={ele}
              active={active}
              handleClick={handleClick}
              handleRemove={handleRemove}
            />
          ))}
        </div>
      ) : (
        "Notes are listed here"
      )}
    </div>
  );
}

export default NoteSection;
