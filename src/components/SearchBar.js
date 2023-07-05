import "./searchbar.css";
import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState(""); // step 1 new piece of state
  const handleFormSubmit = (event) => {
    event.preventDefault(); // this helps to prevent reloading process

    onSubmit("term"); //call what ever text user types in input
  };

  const handleChange = (event) => {
    // step 2 onChange event
    // console.log(event.target.value); // step 3 gets value from input
    setTerm(event.target.value); // gets value and updates state
  };
  return (
    <div>
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <label>enter term</label>
          {/* shows event to form*/}
          {/*  wrapping form around input, makes a submit event*/}
          <input value={term} onChange={handleChange} />{" "}
          {/* step 3get value from input */}
          {/* step 5 pass state to input value prop */}
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
