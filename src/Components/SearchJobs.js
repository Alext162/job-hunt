import { React, useState } from "react";

function SearchJobs(props) {
  const [searchValue, setSearchValue] = useState({
    role: "",
    location: "",
    distance: "",
  });

  const handleSearchInputChanges = (e) => {
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value });
  };

  const resetInputField = () => {
    setSearchValue({
      role: "",
      location: "",
      distance: "",
    });
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <div>
      <form className="search">
        <section className="contact center" id="contact">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <p>Search for Jobs from Reed, StackOverflow & more</p>
            </div>
            <label htmlFor="name">Job Title</label>
            <input
              value={searchValue.role}
              onChange={handleSearchInputChanges}
              type="text"
              className="form-control mr-sm-2"
              placeholder="Example: Senior JavaScript Developer"
              name="role"
            />
            <br />
            <label htmlFor="name">Location</label>
            <input value={searchValue.location} onChange={handleSearchInputChanges} type="text" className="form-control mr-sm-2" placeholder="Example: London" name="location" />
            <br />
            <label htmlFor="name">Max distance (mi)</label>
            <input value={searchValue.distance} onChange={handleSearchInputChanges} type="number" className="form-control mr-sm-2" placeholder="Example: 15" name="distance" />
            <hr />
            <button className="text-center btn btn-light" onClick={callSearchFunction} type="submit" value="SEARCH">
              Search
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}

// function SearchJobs(props) {
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", `Basic ${encode(process.env.REACT_APP_REED_KEY)}`);

//     var requestOptions = {
//       method: "GET",
//       headers: myHeaders,
//     };

//     fetch("https://www.reed.co.uk/api/1.0/search?keywords=accountant&location=london&employerid=123&distancefromlocation=15", requestOptions)
//       .then((response) => response.text())
//       .then((result) => console.log(result))
//       .then(() => setRequestSent(false))
//       .catch((error) => console.log("error", error));
//   }, [input]);

//   return (
//     <div>
//       <section className="contact center" id="contact">
//         <div className="container">
//           <div className="section-title" data-aos="fade-up">
//             <p>Search for Jobs from Reed, StackOverflow & more</p>
//           </div>
//           <label htmlFor="name">Job Title</label>
//           <input
//             className="form-control mr-sm-2"
//             type="search"
//             placeholder="Example: Senior JavaScript Developer"
//             aria-label="Search"
//             value={input}
//             onInput={(e) => setInput(e.target.value)}
//           />
//           <br />
//           <label htmlFor="name">Location</label>
//           <input className="form-control mr-sm-2" type="search" placeholder="Example: London" aria-label="Search" value={input} onInput={(e) => setInput(e.target.value)} />
//           <br />
//           <label htmlFor="name">Max distance (mi)</label>
//           <input className="form-control mr-sm-2" type="number" placeholder="Example: 15" aria-label="Search" value={input} onInput={(e) => setInput(e.target.value)} />
//           <hr />
//           <button className="text-center btn btn-light" type="submit">
//             Download
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

export default SearchJobs;
