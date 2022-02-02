import React from "react";

function Card({
  data,
  active,
  IdKey = "Id",
  handleClick,
  checkbox = false,
  handleRemove,
}) {
  return (
    <div
      onClick={() => handleClick(data)}
      className={"card " + (active == data[IdKey] ? "active-card" : "")}
    >
      <div style={{ textAlign: "center" }} className="container">
        <b>{data.Text}</b>
      </div>
      {checkbox ? (
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault">
            Done
          </label>
        </div>
      ) : null}

      <div
        style={{ width: "100%", textAlign: "end" }}
        onClick={() => handleRemove(data[IdKey])}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
          />
          <path
            fill-rule="evenodd"
            d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default Card;
