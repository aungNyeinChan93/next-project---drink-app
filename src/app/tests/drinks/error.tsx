"use client";

import React, { useEffect } from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const DrinkErrorPage = ({ error, reset }: Props) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold tracking-wide text-red-600">
            {error && error.message}
          </h3>
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 inline-block w-[100px] mx-auto rounded bg-slate-200 text-gray-600 cursor-pointer "
          >
            Try again
          </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DrinkErrorPage;
