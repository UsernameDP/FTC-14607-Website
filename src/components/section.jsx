import React from "react";

function Section({ children }) {
  return (
    <section className="flex mx-auto w-11/12 sm:w-5/6 md:w-5/6 xl:w-2/3 max-w-8xl">
      {children}
    </section>
  );
}

export default Section;
