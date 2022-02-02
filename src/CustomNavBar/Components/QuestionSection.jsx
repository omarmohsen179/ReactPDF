import React, { useCallback, useState } from "react";
import Card from "../Elements/Card";
import Form from "../Elements/Form";

function QuestionSection({ Questions, IdKey = "Id", setData }) {
  const [active, setactive] = useState(0);
  const [Values, setValues] = useState({ Id: 0, Text: "" });
  const handleClick = useCallback(
    (e) => {
      setactive(e[IdKey]);
      setValues(e);
    },
    [Questions]
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
      setData(Questions.filter((ele) => ele[IdKey] != id));
    },
    [Questions]
  );
  const Submit = () => {
    if (Values[IdKey] > 0) {
      setData(
        Questions.map((ele) => {
          return ele[IdKey] === Values[IdKey] ? Values : ele;
        })
      );
      return;
    }
    setData([{ ...Values, Id: Questions.length + 1 }, ...Questions]);
    setValues({ ...Values, Id: Questions.length + 1 });
    setactive(Questions.length + 1);
  };
  return (
    <div className="side_bar_section">
      <Form
        data={Values}
        handleChange={handleChange}
        placeholder={"Add A Question"}
        Submit={Submit}
        IdKey={IdKey}
      />
      {Questions.length > 0 ? (
        <div className="list-container ">
          {Questions.map((ele) => {
            return (
              <Card
                checkbox
                data={ele}
                active={active}
                handleClick={handleClick}
              />
            );
          })}
        </div>
      ) : (
        "There Are No Question"
      )}
    </div>
  );
}

export default QuestionSection;
