import { React, useState, useEffect } from "react";
var axios = require("axios");

function SearchJobs() {
  const [input, setInput] = useState("");

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15",
      headers: {
        Authorization: "Basic ZTdkY2E5YmItMDBjMi00ZjliLWFhOWYtMzMyMzFiYTU0M2U5Og==",
        Cookie:
          "__cfduid=d39e0f43dd35f19c00d80c8bf1b29c0a61608661883; .ASPXANONYMOUS=G-ilfWUgPwAktY_Mj3eodN2LmRgmsUSE9qdj3emysNyDOOxIqSoubyiUSKe0qp4MzBpq0FH50Q1Z1B89dGxhV1hrtdhf59-rcrChQc058ataxi5P7xkjvqApr9xjQD8eGC0xsw2; __cfruid=e640370be75377ec8488586e74cd4ee973e20348-1608661883",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [input]);

  return (
    <div>
      <label>Please specify:</label>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={input} onInput={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default SearchJobs;
