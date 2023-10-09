import React from "react";
import HelpSection from "./HelpSection";
import { FAQ } from "../utils/constants";

const Help = () => {
  return (
    <div className="w-3/4 mx-auto mb-8">
      <h1 className="py-4 flex justify-center mx-auto bg-slate-900 text-white text-3xl rounded-t-md">
        FAQ'S
      </h1>
      {FAQ.map((question) => {
        return (
          <HelpSection
            key={question.id}
            title={question.title}
            description={question.description}
          />
        );
      })}
    </div>
  );
};

export default Help;
