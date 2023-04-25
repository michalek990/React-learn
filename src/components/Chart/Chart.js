import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const maximumValue = Math.max(...dataPointsValues);
  
    return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar 
        key={point.id}
        value={point.value} 
        maxValue={maximumValue} 
        label={point.label} />
      ))}
    </div>
  );
};

export default Chart;
