import React from "react";

function Table() {
  const rowStyle1 = {
    color: "yellow",
  };
  const cellStyle1 = {
    padding: "10px",
    border: "2px solid black",
     backgroundColor: "black",
  };

  return (
    <>
      <table>
        <tr style={rowStyle1}>
          <td style={cellStyle1}>Chinmay</td>
          <td style={cellStyle1}>Full Stack Dev</td>
        </tr>
        <tr>
          <td style={cellStyle1}>Sunder Pichai</td>
          <td style={cellStyle1}>Senior Dev</td>
        </tr>
      </table>
    </>
  );
}

export default Table;
