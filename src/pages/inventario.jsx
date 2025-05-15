import * as XLSX from "xlsx";
import React, { useEffect, useState } from "react";

function ExcelUploader() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/public/Inventario Pabellon 16 (1).xlsx")
            .then((res) => res.arrayBuffer())
            .then((buffer) => {
                const workbook = XLSX.read(buffer, { type: "array" });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                setData(jsonData);
            })
            .catch((error) => console.error("Error leyendo Excel:", error));
    }, []);


    return (
        <div>
            <h2>Datos del Inventario</h2>
            <table border="1">
                <thead>
                    <tr>
                        {data.length > 0 &&
                            Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((fila, index) => (
                        <tr key={index}>
                            {Object.values(fila).map((valor, i) => (
                                <td key={i}>{valor}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExcelUploader;