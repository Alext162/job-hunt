import React from "react";
import ReactHtmlParser from "react-html-parser";
import SaveJob from "./SaveJob";

function ViewSearchedJobs(props) {
  let name, url, description;

  //a field that only reed jobs contain
  if (props.data.job.currency) {
    name = <p>{props.data.job.employerName}</p>;
    url = (
      <p>
        <a href={props.data.job.jobUrl}>Apply</a>
      </p>
    );
    description = <p>{ReactHtmlParser(props.data.job.jobDescription)}</p>;
  } else {
    name = <p>{props.data.job.company}</p>;
    url = (
      <p>
        <a href={props.data.job.company_url}>Apply</a>
      </p>
    );
    description = <p>{ReactHtmlParser(props.data.job.description)}</p>;
  }

  return (
    <div>
      <div className="container" style={{ border: "2px solid rgb(235, 93, 30)", borderRadius: "25px" }}>
        <br />
        {name}
        <br />
        {url}
        <br />
        {description}
        <br />
        <SaveJob data={{ job: props.data.job }} />
        <br />
      </div>
      <br />
    </div>
  );
}

export default ViewSearchedJobs;
