import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import "./PieChart.css";

const UseOfFounds = () => {
  const [selected, setSelected] = React.useState();
  const lineWidth = 70;

  const handleChange = (event, index) => {
    event.preventDefault();
    setSelected(index === selected ? undefined : index);
  };
  return (
    <div className="useOfFundsContainer">
      <div className="chartContainer">
        <PieChart
          style={{
            fontFamily:
              "Nunito Sans, -apple-system, Helvetica, Arial, sans-serif",
            fontSize: "7px",
          }}
          data={[
            { title: "four", value: 10, color: "#575757" },
            { title: "Three", value: 30, color: "#3D3D3D" },
            { title: "Two", value: 30, color: "#212121" },
            {
              title: "One",
              value: 30,
              color: "#121212",
            },
          ]}
          radius={PieChart.defaultProps.radius - 7}
          segmentsStyle={{
            transition: "stroke .3s",
            cursor: "pointer",
          }}
          segmentsShift={(index) => (index === selected ? 5 : 1)}
          animate
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + "%"}
          labelPosition={100 - lineWidth / 2}
          labelStyle={{
            fill: "#fff",
            opacity: 1,
            pointerEvents: "none",
            background: "#0bd2f5",
            border: "2px solid #0bd2f5",
          }}
          onClick={(event, index) => handleChange(event, index)}
          onMouseOver={(_, index) => {
            setSelected(index === selected ? undefined : index);
          }}
          onMouseOut={() => {
            setSelected(undefined);
          }}
        />
      </div>
      <div className="textContainer">
        <div className="textContent">
          <p className={selected === 0 ? "active" : ""}>10% - Charity</p>
          <p className={selected === 1 ? "active" : ""}>
            30% - Marketing & Giveaways
          </p>
          <p className={selected === 2 ? "active" : ""}>
            30% - Gaming Development
          </p>
          <p className={selected === 3 ? "active" : ""}>30% - Team</p>
        </div>
      </div>
    </div>
  );
};

export default UseOfFounds;
