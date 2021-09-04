import { useEffect, useState } from "react";
import yelp from "./../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //helper ftn
  const SearchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage("SOMETHING WENT WRONG !");
    }
  };

  useEffect(() => {
    SearchApi("beef");
  }, []);

  return [SearchApi, results, errorMessage];
};
