import { React, useState, useEffect } from "react";
import { encode } from "base-64";

function SearchJobs() {
  const [input, setInput] = useState("");

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${encode(process.env.REACT_APP_REED_KEY)}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
    };

    fetch("https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, [input]);

  return (
    <div>
      <section className="contact center" id="contact">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <p>Search for Jobs from Reed, StackOverflow & more</p>
          </div>
          <label htmlFor="name">Job Title</label>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Example: Senior JavaScript Developer"
            aria-label="Search"
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
          <br />
          <label htmlFor="name">Location</label>
          <input className="form-control mr-sm-2" type="search" placeholder="Example: London" aria-label="Search" value={input} onInput={(e) => setInput(e.target.value)} />
          <br />
          <label htmlFor="name">Max distance (mi)</label>
          <input className="form-control mr-sm-2" type="number" placeholder="Example: 15" aria-label="Search" value={input} onInput={(e) => setInput(e.target.value)} />
          <hr />
          <button className="text-center btn btn-light" type="submit">
            Download
          </button>
        </div>
      </section>
    </div>
  );
}

export default SearchJobs;
