import QuoteList from "@/components/share/QuoteLists";
import Link from "next/link";
import React from "react";

const QuotesPage = async () => {
  return (
    <React.Fragment>
      <main className="container mx-auto p-4">
        <div className="  w-full min-h-screen bg-slate-500">
          {/*  */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-6 sm:px-10 px-4 sm:py-4 bg-green-400 rounded-b-3xl">
              <h1 className="text-white text-2xl p-3 font-semibold underline underline-offset-8">
                Quotes Page
              </h1>
              <span className="text-white px-4 py-2 bg-indigo-400 rounded-lg">
                <Link href={"/tests/quotes/create"}>Create Quote</Link>
              </span>
            </div>
            <div>
              <QuoteList />
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default QuotesPage;
