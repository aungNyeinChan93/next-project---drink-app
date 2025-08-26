import { deleteDrink } from "@/server-actions/drink-actions";
import { Drink } from "@/types/share-types";
import { BrushCleaning, Dna, GlassWater } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  drink?: Drink;
}

const DetailDrinkCard = ({ drink }: Props) => {
  return (
    <React.Fragment>
      <div className="bg-green-50 w-full md:w-180 p-5 h-auto shadow-md relative rounded-md">
        <button className="bg-green-200 text-green-700 rounded-xl px-3 py-1 absolute right-2 text-[0.9em]">
          {drink?.rate ?? 10}
        </button>
        <div className="py-3 px-1 text-green-400 flex justify-start gap-3 items-center">
          <GlassWater
            size={30}
            color="#0edd56"
            strokeWidth={1.25}
            absoluteStrokeWidth
          />
          <p className="text-lg font-bold font-sans text-green-400/90">
            {drink?.title ?? "Coffee"}
          </p>
        </div>
        <div className="text-sm tracking-wider py-2 font-mono text-slate-500">
          {drink?.recipe ||
            `branch of science that examines the compounds made of atoms,
          molecules, and the properties and behavior of materials and the effect
          of materials on each other....`}
        </div>

        <div className="flex justify-between items-center pt-1 px-1">
          <button
            type="button"
            className="text-[#c810e0] text-base underline underline-offset-2 mt-4"
          >
            <Link href={"/tests/drinks"}>Back</Link>
          </button>

          <div className="flex justify-around space-x-7">
            <button
              type="button"
              className="text-red-400  hover:scale-120 transition-all duration-600 ease-in-out  underline underline-offset-2 mt-4 border-2 border-green-400 rounded-full p-1"
            >
              <Link href={`/tests/drinks/edit/${drink?.id}`}>
                <Dna
                  size={30}
                  color="#4de30d"
                  strokeWidth={1.25}
                  absoluteStrokeWidth
                />
              </Link>
            </button>

            <button
              type="button"
              className="border-1 border-red-400 p-1 rounded-full text-red-400  hover:scale-120 transition-all duration-600 ease-in-out  underline underline-offset-2 mt-4"
            >
              <form action={deleteDrink}>
                <input type="hidden" name="id" value={drink?.id} />
                <button type="submit">
                  <BrushCleaning
                    size={30}
                    color="#f41558"
                    strokeWidth={1.25}
                    absoluteStrokeWidth
                  />
                </button>
              </form>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DetailDrinkCard;
