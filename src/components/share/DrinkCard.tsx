import { type Drink } from "@/types/share-types";
import Link from "next/link";
import React from "react";

interface Props {
  drink: Drink;
}

const DrinkCard = ({ drink }: Props) => {
  return (
    <React.Fragment>
      <section className=" hover:scale-105 transition-all duration-400 ">
        <div className="bg-white border sm:min-h-60 border-gray-200 shadow-md w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4">
          <div className="p-6">
            <div>
              <h3 className="text-lg font-semibold text-green-400/90 tracking-wide px-2">
                {drink?.title}
              </h3>
              <p className="mt-2 py-2 bg-red-50/60 px-4 rounded-lg text-sm text-slate-500 leading-relaxed min-h-[150px]">
                {drink?.recipe.length > 100
                  ? drink?.recipe.substring(0, 100) + " ... "
                  : drink?.recipe}
              </p>
            </div>
            <div className="mt-6 flex gap-3">
              <span className="text-base mr-3 text-red-600 hover:scale-105 transition-all duration-500 cursor-pointer">
                ⭐ {drink?.rate}
              </span>
              <span>
                <Link
                  href={`/tests/drinks/${drink.id}`}
                  className="mt-6 px-5 py-2 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 cursor-pointer"
                >
                  View
                </Link>
              </span>
              {/* <span>
                <Link
                  href={`/tests/drinks/edit/${drink.id}`}
                  className="mt-6 px-5 py-2 rounded-md text-white text-sm font-medium tracking-wider border-none outline-none bg-amber-300/90 hover:bg-amber-400 cursor-pointer"
                >
                  Edit
                </Link>
              </span> */}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default DrinkCard;
