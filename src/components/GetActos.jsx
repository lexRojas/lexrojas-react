import React, { useEffect, useState } from "react";
//import axios from "axios";

export default function GetActos(idActo = -1) {
  const [Actos, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // useEffect(() => {

  //   const response = await fetch('http://localhost:8000/registros');
  //   const jsonData = await response.json();
  //   setData(jsonData);

  //   axios("http://localhost:8000/actos", {
  //     mode:'no-cors',
  //     params: idActo
  //   },[idActo])
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);
  // if (loading) return "Loading...";
  // if (error) return "Error!";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/actos?idActo=-1");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  if (Actos) {
    return Actos.map(({ id_acto, acto_descripcion }) => (
      <option key={id_acto} value={id_acto}>
        {acto_descripcion}
      </option>
    ));
  }
}
