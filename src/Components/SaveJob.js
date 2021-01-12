import { React, useState } from "react";

function SaveJob(props) {
  const [state, setState] = useState({
    status: false,
    text: "Save",
    class: "",
  });

  const click = (e) => {
    setState({
      status: state.status,
      text: !state.status ? String.fromCharCode("10003") : "",
      class: !state.status ? "checked" : "",
    });
  };

  return (
    <div>
      <button className={`awesome-btn ` + state.class} onClick={click.bind(this)}>
        {state.text}
      </button>
    </div>
  );
}

export default SaveJob;
