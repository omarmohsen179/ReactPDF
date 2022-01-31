import React from "react";

function Form({ data, Submit, placeholder, handleChange }) {
  return (
    <form>
      <div class="form-group">
        <input
          type="Note"
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
        onClick={(e) => {
          e.preventDefault();
          Submit();
        }}
        class="btn btn-light submit-note-section"
      >
        Add
      </button>
    </form>
  );
}

export default Form;
