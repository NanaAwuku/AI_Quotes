import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-col flex-center ">
      <h1 className="head_text text-center ">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Powered Quotes </span>
      </h1>
      <p className="desc text-center">
        PQuotes is an open source AI quotes generation tool for mordern world to discover, create and share creative quotes
      </p>
      {/* feed */}
      <Feed/>

    </section>
  );
};

export default Home;
