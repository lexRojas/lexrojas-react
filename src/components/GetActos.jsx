import React, { useEffect, useState } from "react";
import axios from "axios";

export default function GetActos({idRegistro}) {
  const [Actos, setData] = useState(null);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRegistro]);

  const baseURL = "https://lexrojas-backend-c21ed8c2c96d.herokuapp.com/actos"

  const fetchData = async () => {
    await axios.get(baseURL, {params: {idRegistro: idRegistro}})
    .then(function (response) {
      setData(response.data)
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    })  
  };


  if (Actos) {
    return Actos.map(({ id_acto, acto_descripcion }) => (
      <option key={id_acto} value={id_acto}>
        {acto_descripcion}
      </option>
    ));
  }
}
