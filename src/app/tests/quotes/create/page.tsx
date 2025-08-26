import QuoteForm from "@/components/share/QuoteForm";
import React from "react";

const CreateQuote = async () => {
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center ">
        <QuoteForm />
      </main>
    </React.Fragment>
  );
};

export default CreateQuote;
