import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const SparklineChart = ({ data, color = "#10b981" }) => {
  const options = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      containLabel: false,
    },
    xAxis: {
      type: "category",
      show: false,
      boundaryGap: false,
    },
    yAxis: {
      type: "value",
      show: false,
    },
    series: [
      {
        type: "line",
        data,
        showSymbol: false,
        smooth: true,
        lineStyle: {
          width: 2,
          color,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: `${color}40` },
            { offset: 1, color: `${color}10` },
          ]),
        },
      },
    ],
    animation: false,
  };

  return (
    <ReactECharts
      option={options}
      style={{ height: "40px", width: "120px" }}
      opts={{ renderer: "svg" }}
    />
  );
};

export default React.memo(SparklineChart);
