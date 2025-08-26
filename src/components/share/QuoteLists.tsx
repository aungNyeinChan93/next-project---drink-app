"use client";

import { supabase } from "@/config/supabase";
import React, { useEffect, useState } from "react";
import { Quote } from "./QuoteForm";
import QuoteCard from "./QuoteCard";

const QuoteList = () => {
  const [quotes, setQuotes] = useState<Quote[] | []>([]);
  const [isError, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuotes = async () => {
      const { error, data } = await supabase
        .from("quotes")
        .select()
        .order("created_at", { ascending: false })
        .limit(12);
      if (error instanceof Error) {
        console.error(error?.message);
        setError(error?.message);
      }
      setQuotes(data ?? []);
    };
    fetchQuotes();
  }, []);

  if (isError) return <>{isError}</>;

  return (
    <React.Fragment>
      <main className="flex justify-center w-full py-10">
        <section className=" p-2 grid grid-cols-1 sm:grid-cols-4 gap-5">
          {quotes &&
            Array.isArray(quotes) &&
            quotes
              .slice(0, 12)
              ?.map((q) => <QuoteCard key={q.author} quote={q} />)}
        </section>
      </main>
    </React.Fragment>
  );
};

export default QuoteList;
