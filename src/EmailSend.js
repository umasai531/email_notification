import React from "react";
import axios from "axios";

const EmailSend = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/updated/")
      .then((response) => console.log(response.data.respMesg));
  };
  const addHandler = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/added/")
      .then((response) => console.log(response.data.respMesg));
  };
  return (
    <>
      <button
        onClick={onSubmit}
        className="btn btn-primary btn-block "
        style={{ marginLeft: "100px" }}
      >
        Send Mail
      </button>
      <button
        onClick={addHandler}
        className="btn btn-primary btn-block "
        style={{ marginLeft: "100px" }}
      >
        Added
      </button>
    </>
  );
};

export default EmailSend;
