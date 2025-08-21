import { useState, useEffect } from "react";

export const useFetch = (myAPI) => {
  const [data, setData] = useState(null);

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [id, setId] = useState();
  const [callFetch, setCallFetch] = useState(false);

  const httpConfig = (data, method, id) => {    
    if (method === "POST") {      
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    }

    if (method === "DELETE") {      
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMethod(method);
      setId(id);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(myAPI);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [myAPI, callFetch]);

  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [myAPI, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
      }
      if (method === "DELETE") {
        let fetchOptions = [myAPI+"/"+id, config];
        const res = await fetch(...fetchOptions);
        const json = await res.json();
        setCallFetch(json);
      }
    };
    httpRequest();
  }, [config]);

  return { data, httpConfig };
};
