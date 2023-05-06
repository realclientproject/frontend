import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:8000/resource`);
      setResources(response.data.response.docs);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching Resources:", error);
    } finally {
      setLoading(false);
    }
  };
    React.useEffect(() => {
      fetchData();
    }, []);

  const reFetcth = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setIsLoading(false);
  };
  return { data, isLoading, error, reFetcth };
};

export default useFetch