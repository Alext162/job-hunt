import { React, useState, useEffect } from "react";

function SaveJob(props) {
  const [checkMarkState, setCheckMarkState] = useState({
    status: false,
    text: "Save",
    class: "",
  });

  const [savedState, setSavedState] = useState(false);

  const formatJobs = (job) => {
    let newJob = {};
    if (job.applications) {
      newJob.company = job.employerName;
      newJob.description = job.jobDescription;
      newJob.title = job.jobTitle;
      newJob.url = job.jobUrl;
      newJob.location = job.locationName;
    } else {
      newJob.company = job.company;
      newJob.description = job.description;
      newJob.title = job.title;
      newJob.url = job.url;
      newJob.location = job.location;
    }
    return newJob;
  };

  useEffect(() => {
    //checks if state was changed by selecting the 'save' icon; this gets changed in the click method.
    if (savedState) {
      let formattedJob = formatJobs(props.data.job);

      fetch("http://localhost:3001/api/putData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: formattedJob,
        }),
      })
        .then((res) => res.json())
        .then(() => setSavedState(false))
        .catch((err) => console.log("error"));
    }
  });

  const click = (e) => {
    setCheckMarkState({
      status: checkMarkState.status,
      text: !checkMarkState.status ? String.fromCharCode("10003") : "",
      class: !checkMarkState.status ? "checked" : "",
    });
    setSavedState(true);
  };

  return (
    <div>
      <button className={`awesome-btn ` + checkMarkState.class} onClick={click.bind(this)}>
        {checkMarkState.text}
      </button>
    </div>
  );
}

export default SaveJob;
