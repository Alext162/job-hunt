import { React, useState, useEffect } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

function ViewJobs(props) {
  const [state, setState] = useState({
    jobs: [],
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("http://localhost:3001/api/getData")
      .then((data) => data.json())
      .then((res) => setState({ jobs: res.data }))
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  // const deleteFromDB = (idTodelete) => {
  //   parseInt(idTodelete);
  //   let objIdToDelete = null;
  //   state.data.forEach((dat) => {
  //     if (dat.id == idTodelete) {
  //       objIdToDelete = dat._id;
  //     }
  //   });

  //   axios.delete("http://localhost:3001/api/deleteData", {
  //     data: {
  //       id: objIdToDelete,
  //     },
  //   });
  // };

  const { jobs } = state;

  return (
    <>
      {loading ? (
        <div>...Data Loading.....</div>
      ) : (
        <div>
          <br></br>
          <ul>
            {jobs.length <= 0
              ? "NO DB ENTRIES YET"
              : jobs.map((dat, index) => (
                  <div>
                    <div className="container" style={{ border: "2px solid rgb(235, 93, 30)", borderRadius: "25px" }}>
                      <p style={{ padding: "10px" }} key={index}>
                        Company: {dat.data.company}
                      </p>
                      <p style={{ padding: "10px" }} key={index}>
                        Description: {ReactHtmlParser(dat.data.description)}
                      </p>
                      <p style={{ padding: "10px" }} key={index}>
                        Job Title: {dat.data.title}
                      </p>
                      <p style={{ padding: "10px" }} key={index}>
                        Location: {dat.data.location}
                      </p>
                      <p style={{ padding: "10px" }} key={index}>
                        <a href={dat.data.url}>Apply</a>
                      </p>
                      <br></br>
                    </div>
                    <br></br>
                  </div>
                ))}
          </ul>
          <br></br>
        </div>
      )}
    </>
  );
}

export default ViewJobs;
