"use client";

import { supabase } from "@/config/supabase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

export type Quote = {
  author: string | undefined;
  quote: string | undefined;
};

const QuoteForm = () => {
  const router = useRouter();
  const [quote, setQuote] = useState<Quote>({
    author: "",
    quote: "",
  });

  //   quoteFormHandler
  const quoteFormHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log({ quote });

    const { status, error, data } = await supabase
      .from("quotes")
      .insert(quote)
      .single();
    if (error instanceof Error) {
      console.error({ "err-mess": error?.message });
    }
    if (status === 201) {
      console.log({ data });
      router.push("/tests/quotes");
    }
  };

  return (
    <React.Fragment>
      <main>
        <form
          className="w-[300px] sm:w-[600px] mx-auto rounded-2xl border bg-white p-6 shadow-sm"
          onSubmit={quoteFormHandler}
        >
          <div className="flex items-center gap-3 py-3 mb-2">
            <Link href={"/tests/quotes"} className="text-3xl cursor-pointer ">
              👈
            </Link>
            <h2 className=" text-2xl font-semibold text-indigo-400">
              Create a Quote
            </h2>
          </div>

          <label
            htmlFor="author"
            className="mb-1 block text-sm font-medium text-indigo-400"
          >
            Author <span className="text-red-500">*</span>
          </label>
          <input
            id="author"
            type="text"
            className="w-full text-gray-600/60 rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="e.g., Maya Angelou"
            value={quote.author}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setQuote((prev) => ({ ...prev, author: e.target.value }))
            }
          />

          <label
            htmlFor="quote"
            className="mt-4 mb-1 block text-sm font-medium text-indigo-400"
          >
            Quote <span className="text-red-500 ">*</span>
          </label>
          <textarea
            id="quote"
            rows={5}
            className="w-full text-gray-600/60 rounded-xl border px-4 py-2 outline-none focus:ring-2 focus:ring-blue-300"
            placeholder="Write the quote here…"
            value={quote.quote}
            onChange={(e) =>
              setQuote((prev) => ({ ...prev, quote: e.target.value }))
            }
          ></textarea>

          <div className="mt-6 flex gap-3">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Save Quote
            </button>
            <button
              type="reset"
              className="rounded-xl text-gray-600/60 border px-5 py-2.5 transition hover:bg-gray-100"
            >
              Reset
            </button>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default QuoteForm;
