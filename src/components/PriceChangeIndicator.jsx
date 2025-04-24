import React from "react";

const PriceChangeIndicator = ({ value }) => {
  const isPositive = value >= 0;
  const colorClass = isPositive ? "text-green-500" : "text-red-500";
  const icon = isPositive ? "ri-arrow-up-line" : "ri-arrow-down-line";

  return (
    <div className={`${colorClass} flex items-center justify-end gap-1`}>
      <i className={icon}></i>
      <span>{Math.abs(value)}%</span>
    </div>
  );
};

export default PriceChangeIndicator;
