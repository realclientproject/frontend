import axios from "axios";
import React, { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [Resources,  setResources] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`https://supportteachers-mern-api.onrender.com/resource`);
      setResources(response.data.response.docs);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetching Resources:", error);
    } finally {
      setIsLoading(false);
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