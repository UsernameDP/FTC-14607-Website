import React from "react";

function TitleSection({ name, content, children }) {
  return (
    <section className="flex flex-row w-full h-3/6 max-w-7xl mx-auto py-28 p-10 align-middle gap-10">
      <section className="text-left flex flex-col gap-5">
        <h2 className="text-6xl font-Roboto font-medium max-w-lg pt-14">
          {name}
        </h2>
        <p className="max-w-lg text-xl text-FTC_GREY font-light">{content}</p>
      </section>
      {children}
    </section>
  );
}

export default TitleSection;
