import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/imageList";
import ImageShow from "./api";

function App() {
  const [image, setImage] = useState([]); // setting state to empty array
  const handleSubmit = async (term) => {
    const result = await ImageShow(term); // shows images component file,

    setImage(result); // call state
    // array of object, showing result
  };
  return (
    <div>
      {/*  this shows searchBar component, 
      event handler can be any name in this case for components*/}
      <SearchBar onSubmit={handleSubmit} />
      <ImageList image={image} />
      {/* prop name caused issue, as i named it as photos, done images and caused issue */}
      {/* image list component shown , passing state as image prop*/}
    </div>
  );
}

export default App;
