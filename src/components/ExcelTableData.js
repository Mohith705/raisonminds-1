import React, { useEffect, useRef, useState } from 'react';
import { useDownloadExcel } from 'react-export-table-to-excel';

const ExcelTableData = () => {
    const tableref = useRef(null);
    const [userData, setUserData] = useState([]);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableref.current,
        filename: 'excel_multiple2',
        sheet: 'UserData'
    })

    useEffect(() => {
      const getuserdata = async () => {
        const userreq = await fetch("http://localhost:8000/api/excel");
        const userres = await userreq.json();
        // console.log(userres);
        setUserData(userres);
      };
      getuserdata();
    }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button style={{ padding: "15px" }} onClick={onDownload}>
        Export Data
      </button>
      <table style={{ border: "2px solid black" }} ref={tableref}>
        <thead>
          <th>ID</th>
          <th>TITLE</th>
          <th>LEVEL</th>
          <th>URL</th>
        </thead>
        <tbody>
          {userData.map((dd) => {
            return (
              <tr>
                <td style={{ borderBottom: "2px solid black" }}>{dd.id}</td>
                <td style={{ borderBottom: "2px solid black" }}>{dd.title}</td>
                <td style={{ borderBottom: "2px solid black" }}>{dd.level}</td>
                <td style={{ borderBottom: "2px solid black" }}>{dd.url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table style={{ border: "2px solid black" }} ref={tableref}>
        <thead>
          <th>ID</th>
          <th>TITLE</th>
          <th>LEVEL</th>
        </thead>
        <tbody>
          {userData.map((dd) => {
            return (
              <tr>
                <td style={{ borderBottom: "2px solid black" }}>{dd.id}</td>
                <td style={{ borderBottom: "2px solid black" }}>{dd.title}</td>
                <td style={{ borderBottom: "2px solid black" }}>{dd.level}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExcelTableData
