import { supabase } from "@/config/supabase";
import React from "react";
import DrinkCard from "./DrinkCard";
import { GlassWater } from "lucide-react";

const BestDrinks = async () => {
  const {
    error,
    status,
    data: bestDrinks,
  } = await supabase.from("drinks").select("*").gte("rate", 5).limit(5);
  if (status !== 200) {
    if (error instanceof Error) throw new Error(error?.message);
    return;
  }
  if (bestDrinks) {
    // console.log({ bestDrinks });
  }

  return (
    <React.Fragment>
      <main className=" w-full min-h-auto container mx-auto rounded bg-green-50 p-4 my-1">
        <div className="flex flex-col gap-1">
          <section className="flex gap-2 justify-start items-center">
            <GlassWater
              size={24}
              color="#0edd56"
              strokeWidth={1.25}
              absoluteStrokeWidth
            />
            <h3 className="text-lg ps-3 text-green-400 underline underline-offset-4 font-semibold">
              Best Drinks
            </h3>
          </section>
          <section className="flex justify-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-2">
              {bestDrinks &&
                Array.isArray(bestDrinks) &&
                bestDrinks?.map((drink) => (
                  <DrinkCard drink={drink} key={drink.id} />
                ))}
            </div>
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default BestDrinks;
