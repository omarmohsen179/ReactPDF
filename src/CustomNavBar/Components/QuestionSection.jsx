import React, { useCallback, useState } from "react";
import Card from "../Elements/Card";
import Form from "../Elements/Form";

function QuestionSection({ Questions, IdKey = "Id" }) {
  const [active, setactive] = useState(0);
  const [Values, setValues] = useState({ id: 0, Text: 0 });
  const handleClick = useCallback(
    (e) => {
      setactive(e[IdKey]);
      setValues(e);
    },
    [Questions]
  );
  const handleChange = useCallback(async (e) => {
    setValues((prev) => {
      return { ...prev, [e.target.id]: [e.target.value] };
    });
  }, []);
  const Submit = useCallback(async (e) => {}, [Values]);
  return (
    <div className="side_bar_section">
      <Form
        data={Values}
        handleChange={handleChange}
        placeholder={"Add A Question"}
        Submit={Submit}
      />
      {Questions.length > 0 ? (
        <div>
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
