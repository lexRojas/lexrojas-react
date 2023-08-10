import React, { useEffect, useState } from "react";
//import axios from "axios";

export default function GetActos({idRegistro}) {
  const [Actos, setData] = useState(null);

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idRegistro]);

  const fetchData = async () => {
    try {

      const sql =  "http://localhost:8000/actos?idRegistro=".concat(idRegistro)
        const response = await fetch(sql);
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
