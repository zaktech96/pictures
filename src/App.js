import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = (term) => {
    // event button for search bar
    console.log("do search with", term);
  };
  return (
    <div>
      {/*  this shows searchBar component, 
      event handler can be any name in this case for components*/}
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
