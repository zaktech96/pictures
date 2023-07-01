import axios from "axios";

const searchPhoto = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    // typo here can throw error
    headers: {
      Authorization: "Client-ID 28bhIn6gLEuUXu1Zl7mu2NBBAArrqsbo96fYOdZvZPI",
    },
    params: {
      query: term, // want to accept search terms here, not hard code one image type
    },
  });

  return response.data.result; // here is returning the data object and then result array
};

export default searchPhoto;
