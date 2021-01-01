import React from "react";
import ReactHtmlParser from "react-html-parser";

function Jobs(props) {
  return (
    <div>
      <div className="container" style={{ border: "2px solid rgb(235, 93, 30)", borderRadius: "25px" }}>
        <br />
        <p>{props.data.job.company}</p>
        <br />
        <p>{props.data.job.company_url}</p>
        <br />
        <div> {ReactHtmlParser(props.data.job.description)} </div>
        <br />
      </div>
      <br />
    </div>
  );
}

export default Jobs;
