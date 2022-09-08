import React, { useEffect, useState } from "react";
// import styled from "styled-components";

const Form = () => {
  // const libraryArr = [];
  // console.log(libraryArr)
  const [data, setData] = useState({});
  const [library, setLibrary] = useState({
    libraries : []
  });

  const inputEvent = (e) => {
    // console.log(e.target.value)
    setData((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
  };

  const libraryData = (e) => {
    // console.log(e.target.value)
    const { value, checked } = e.target;
    const { libraries } = library;

    setLibrary({
      libraries: [...libraries, value],
    });
  };
 

  const addTask = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(library);
  };

 

  return (
    <>
      <form
        style={{ textAlign: "start" }}
        className="border shadow rounded p-3 my-3"
      >
        <label htmlFor="date">Date : </label>
        <input type="date" name="date" onChange={inputEvent} />
        <br />
        <label className="mt-3" htmlFor="title">
          Task Title :{" "}
        </label>
        <input type="text" name="title" onChange={inputEvent} />
        <br />
        <label className="mt-3" htmlFor="date">
          Task Description :{" "}
        </label>
        <textarea
          name="task_Description"
          rows="7"
          cols="30"
          className="align-top mt-3"
          onChange={inputEvent}
        ></textarea>
        <br />
        <label className="mt-3" htmlFor="ui-tech">
          UI Technology :{" "}
        </label>
        <select name="UI_technology" onChange={inputEvent}>
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
        />
        <label htmlFor="vehicle1">Redux</label>
        <input
          type="checkbox"
          onChange={libraryData}
          // name="Libraries"
          value="Saga"
        />
        <label htmlFor="vehicle2"> Saga</label>
        <input
          type="checkbox"
          onChange={libraryData}
          // name="Libraries"
          value="Numpy"
        />
        <label htmlFor="vehicle3">Numpy</label>
        <input
          type="checkbox"
          onChange={libraryData}
          // name="Libraries"
          value="Pandas"
        />
        <label htmlFor="vehicle3">Pandas</label>
        <div className="mt-3">
          <button onClick={addTask}>AddTask</button>
          <button>Reset</button>
          <button>Cancel</button>
        </div>
      </form>
    </>
  );
};

export default Form;
