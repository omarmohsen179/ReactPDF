import React from "react";

function Form({ data, Submit, placeholder, handleChange, Add, IdKey }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        Submit();
      }}
    >
      <div className="form-group">
        <input
          type="text"
          className="form-control form-input-placeholder"
          placeholder={placeholder}
          value={data.Text}
          id="Text"
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        //    style={{ backgroundColor: "#eeeeee" }}

        className="btn btn-light submit-note-section"
      >
        Submit
      </button>
      <button
        type="button"
        //    style={{ backgroundColor: "#eeeeee" }}
        onClick={Add}
        disabled={data[IdKey] == 0}
        className="btn btn-light submit-note-section"
      >
        New
      </button>
    </form>
  );
}

export default Form;
