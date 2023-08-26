import React from "react";

function CardGrid({ children }) {
  const className = `grid gap-20 max-w-7xl mx-auto p-10 grid-cols-3 transition-all`;

  return (
    <div className="grid gap-20 max-w-7xl mx-auto p-10 grid-cols-1 3xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2">
      {children}
    </div>
  );
}

export default CardGrid;
