import { React, useReducer } from "react";
import ReactHtmlParser from "react-html-parser";

// import { encode } from "base-64";
import { initialState, reducer } from "../store/reducer";
import SearchJobs from "../Components/SearchJobs.js";
import Jobs from "../Components/Jobs.js";
import "../css/page.css";

function Search() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = (searchValue) => {
    var requestOptions = {
      method: "GET",
    };

    // fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchValue.role}&location=${searchValue.location}`, requestOptions)
    fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=python&location=sanfransisco`, requestOptions)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.length > 0) {
          dispatch({
            type: "SEARCH_JOBS_SUCCESS",
            payload: jsonResponse,
          });
        } else {
          dispatch({
            type: "SEARCH_JOBS_FAILURE",
            error: jsonResponse.Error,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const { jobs, errorMessage, loading } = state;

  let retrievedJobs = errorMessage ? <div className="errorMessage">{errorMessage}</div> : jobs.map((job, index) => <Jobs key={`${index}`} data={{ job: job }} />);

  if (retrievedJobs.length === 0 && loading === false) {
    retrievedJobs = `No Jobs :(`;
  }

  return (
    <div>
      <SearchJobs search={search} />

      <div className="jobs">{retrievedJobs}</div>
    </div>
  );
}

export default Search;
