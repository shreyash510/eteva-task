import React, { useState } from "react";
// import styled from "styled-components";

const Form = () => {

  const [data, setData] = useState({});
  const [library, setLibrary] = useState({
    libraries: []
  });

  const inputEvent = (e) => {
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };


  // const clearState = () => {
  //   setState({ ...initialState });
  // };

  const libraryData = (e) => {
    const { value, checked } = e.target;
    const { libraries } = library;

   if (checked === true) {
      setLibrary({
        libraries: [...libraries, value],
      });
    };
  }


  const addTask = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(library);
  };

  return (
    <>
      <form
        style={{ textAlign: "start", width:"59%" }}
        className="border shadow rounded p-3 my-3"
      >
        <label htmlFor="date">Date : </label>
        <input className="ms-2" type="date" name="date" onChange={inputEvent} />
        <br />
        <label className="mt-3" htmlFor="title">
          Task Title :{" "}
        </label>
        <input className="ms-2" type="text" name="title" onChange={inputEvent} />
        <br />
        <label className="mt-3" htmlFor="date">
          Task Description :{" "}
        </label>
        <textarea
          name="task_Description"
          rows="7"
          cols="37"
          className="align-top mt-3 ms-2"
          onChange={inputEvent}
        ></textarea>
        <br />
        <label className="mt-3" htmlFor="ui-tech">
          UI Technology :{" "}
        </label>
        <select className="ms-2" name="UI_technology" onChange={inputEvent}>
          <option value="No Select">Select</option>
          <option value="React">React</option>
          <option value="Angular">Angular</option>
          <option value="Flutter">Flutter</option>
          <option value="Vue.js">Vue.js</option>
        </select>
        <br />
        <label className="mt-3 mr-2" htmlFor="date">
          Back-End Technology :{" "}
        </label>
        <label htmlFor="html">Python</label> {" "}
        <input
        className="ms-0"
          type="radio"
          name="backend"
          onChange={inputEvent}
          value="Python"
        />
        <label htmlFor="html">.NET</label> {" "}
        <input type="radio" name="backend" onChange={inputEvent} value=".NET" />
        <label htmlFor="html">PHP</label> {" "}
        <input type="radio" name="backend" onChange={inputEvent} value="PHP" />
        <br />
        <label className="mt-3" htmlFor="date">
          Library Used :{" "}
        </label>
        <input
          type="checkbox"
          onChange={libraryData}
          // name="Libraries"
          value="Redux"
          className="me-2"
        />
        <label htmlFor="vehicle1">Redux</label>
        <input
          type="checkbox"
          onChange={libraryData}
          // name="Libraries"
          value="Saga"
          className="me-2"
        />
        <label htmlFor="vehicle2"> Saga</label>
        <input
          type="checkbox"
          onChange={libraryData}
          // name="Libraries"
          value="Numpy"
          className="me-2"
        />
        <label htmlFor="vehicle3">Numpy</label>
        <input
          type="checkbox"
          onChange={libraryData}
          // name="Libraries"
          value="Pandas"
          className="me-2"
        />
        <label htmlFor="vehicle3">Pandas</label>
        <div className="mt-3">
          <button className="btn btn-success me-2" onClick={addTask}>AddTask</button>
          <button className="btn btn-secondary me-2">Reset</button>
          <button className="btn btn-link border me-2">Cancel</button>
        </div>
      </form>
    </>
  );
};

export default Form;
