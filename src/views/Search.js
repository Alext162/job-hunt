import { React, useReducer } from "react";
import { initialState, reducer } from "../store/reducer";
import SearchJobs from "../Components/SearchJobs.js";
import Jobs from "../Components/Jobs.js";
import { encode } from "base-64";
import "../css/page.css";

function Search() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = async (searchValue) => {
    let jobsArr = [];

    var requestOptions = {
      method: "GET",
    };

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${encode(process.env.REACT_APP_REED_KEY)}`);

    var requestOptionsReed = {
      method: "GET",
      headers: myHeaders,
    };

    await Promise.all([
      fetch(
        `https://cors-anywhere.herokuapp.com/https://www.reed.co.uk/api/1.0/search?keywords=${searchValue.role}&location=${searchValue.location}&distancefromlocation=${searchValue.distance}`,
        requestOptionsReed
      )
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.results.length > 0) {
            jsonResponse.results.forEach((el) => {
              jobsArr.push(el);
            });
          } else {
            dispatch({
              type: "SEARCH_JOBS_FAILURE",
              error: jsonResponse.Error,
            });
          }
        })
        .catch((error) => console.log("error", error)),

      fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${searchValue.role}&location=${searchValue.location}`, requestOptions)
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.length > 0) {
            jsonResponse.forEach((el) => {
              jobsArr.push(el);
            });
          } else {
            dispatch({
              type: "SEARCH_JOBS_FAILURE",
              error: jsonResponse.Error,
            });
          }
        })
        .catch((error) => console.log("error", error)),
    ]);
    console.log(jobsArr);
    dispatch({
      type: "SEARCH_JOBS_SUCCESS",
      payload: jobsArr,
    });
  };

  const { jobs, errorMessage, loading, length } = state;

  let searchResult = "";

  if (errorMessage) {
    searchResult = errorMessage;
  } else if (length === 0 && loading === false) {
    searchResult = `No Jobs :(`;
  } else {
    searchResult = jobs.map((job, index) => <Jobs key={`${index}`} data={{ job: job }} />);
  }

  return (
    <div>
      <SearchJobs search={search} />

      <div className="jobs">{searchResult}</div>
    </div>
  );
}

export default Search;
