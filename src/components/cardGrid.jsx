import React from "react";

function CardGrid({ rows, col, children }) {
  return (
    <div className="grid grid-cols-3 gap-20 max-w-7xl mx-auto p-10">
      {children}
    </div>
  );
}

export default CardGrid;
