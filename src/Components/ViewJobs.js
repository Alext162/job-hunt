import { React, useState } from "react";
import axios from "axios";

function ViewJobs(props) {
  const [state, setState] = useState({
    jobs: [],
  });

  fetch("http://localhost:3001/api/getData")
    .then((data) => data.json())
    .then((res) => this.setState({ jobs: res.data }));

  const putDataToDB = (message) => {
    let currentIds = this.state.data.map((data) => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("http://localhost:3001/api/putData", {
      id: idToBeAdded,
      message: message,
    });
  };

  const updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    parseInt(idToUpdate);
    this.state.jobs.forEach((dat) => {
      if (dat.id === idToUpdate) {
        objIdToUpdate = dat._id;
      }
    });

    axios.post("http://localhost:3001/api/updateData", {
      id: objIdToUpdate,
      update: { message: updateToApply },
    });
  };

  const deleteFromDB = (idTodelete) => {
    parseInt(idTodelete);
    let objIdToDelete = null;
    this.state.data.forEach((dat) => {
      if (dat.id == idTodelete) {
        objIdToDelete = dat._id;
      }
    });

    axios.delete("http://localhost:3001/api/deleteData", {
      data: {
        id: objIdToDelete,
      },
    });
  };

  const { jobs } = this.state;

  return (
    <div>
      <ul>
        {jobs.length <= 0
          ? "NO DB ENTRIES YET"
          : jobs.map((dat) => (
              <li style={{ padding: "10px" }} key={jobs.message}>
                <span style={{ color: "gray" }}> id: </span> {dat.id} <br />
                <span style={{ color: "gray" }}> data: </span>
                {dat.message}
              </li>
            ))}
      </ul>
      <div style={{ padding: "10px" }}>
        <input type="text" onChange={(e) => this.setState({ message: e.target.value })} placeholder="add something in the database" style={{ width: "200px" }} />
        <button onClick={() => this.putDataToDB(this.state.message)}>ADD</button>
      </div>
      <div style={{ padding: "10px" }}>
        <input type="text" style={{ width: "200px" }} onChange={(e) => this.setState({ idToDelete: e.target.value })} placeholder="put id of item to delete here" />
        <button onClick={() => this.deleteFromDB(this.state.idToDelete)}>DELETE</button>
      </div>
      <div style={{ padding: "10px" }}>
        <input type="text" style={{ width: "200px" }} onChange={(e) => this.setState({ idToUpdate: e.target.value })} placeholder="id of item to update here" />
        <input type="text" style={{ width: "200px" }} onChange={(e) => this.setState({ updateToApply: e.target.value })} placeholder="put new value of the item here" />
        <button onClick={() => this.updateDB(this.state.idToUpdate, this.state.updateToApply)}>UPDATE</button>
      </div>
    </div>
  );
}

export default ViewJobs;
