import React from "react";
import Header from "./_components/Header";
import Markets from "./_components/Markets";

const page = () => {
  return (
    <section>
      <Header />
      <div className="mycontainer">
        <Markets />
      </div>
    </section>
  );
};

export default page;
