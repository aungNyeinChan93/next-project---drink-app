import { supabase } from "@/config/supabase";
import React from "react";
// import { type Drink } from "@/types/share-types";
import DrinkCard from "@/components/share/DrinkCard";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    [key: string]: string | undefined;
  }>;
}

const DrinkPage = async ({ searchParams }: Props) => {
  const { sortBy } = await searchParams;
  const { data: drinks, error } = await supabase
    .from("drinks")
    .select("*")
    .order(sortBy || "created_at", { ascending: false })
    .limit(9);

  if (error) throw new Error(error?.message);

  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto bg-green-50">
        <div className="flex flex-col px-4">
          <section className="xl:mx-10 my-3 py-4 flex justify-between items-center">
            <h3 className="text-2xl underline underline-offset-8 font-semibold text-green-400 tracking-widest font-mono">
              All Drinks
            </h3>
            <span className="text-2xl">
              <Link href="/tests/drinks/create">➕</Link>
            </span>
          </section>
          <section className="flex justify-end mb-4 sm:pr-8">
            <form
              action=""
              className="flex items-center space-x-2 bg-white rounded shadow px-4 py-2"
            >
              <input type="hidden" name="sortBy" value="rate" />
              <span className="text-gray-600 font-medium">Sort by:</span>
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-500 text-white font-semibold px-4 py-1 rounded transition-colors duration-200"
              >
                Rate ⬆️
              </button>
            </form>
          </section>
          <section className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-2">
              {drinks &&
                Array.isArray(drinks) &&
                drinks?.map((drink) => (
                  <DrinkCard drink={drink} key={drink.id} />
                ))}
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DrinkPage;
