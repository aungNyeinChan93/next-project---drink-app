import React from "react";
import { updateDrink } from "@/server-actions/drink-actions";
import { Drink } from "@/types/share-types";
import Link from "next/link";

interface Props {
  drink?: Drink;
}

const DrinkUpdateForm = async ({ drink }: Props) => {
  return (
    <form
      className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
      action={async (formData: FormData) => {
        "use server";
        await updateDrink(formData, drink?.id);
      }}
    >
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Update The Drink
      </h1>

      {/* Title */}
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          name="title"
          type="text"
          id="title"
          placeholder="Enter drink title"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 placeholder-red-500"
          defaultValue={drink?.title}
        />
      </div>

      {/* Recipe */}
      <div className="mb-5">
        <label
          htmlFor="recipe"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Recipe
        </label>
        <textarea
          name="recipe"
          id="recipe"
          placeholder="Write recipe here..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 placeholder-red-500"
          rows={4}
          defaultValue={drink?.recipe}
        />
      </div>

      {/* Rate */}
      <div className="mb-6">
        <label
          htmlFor="rate"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Rate
        </label>
        <input
          name="rate"
          type="number"
          id="rate"
          placeholder="Enter rate (1-5)"
          min="1"
          max="10"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 placeholder-red-500"
          defaultValue={drink?.rate}
        />
      </div>
      <div className="flex justify-center gap-1">
        {/* Submit */}
        <button
          type="submit"
          className=" basis-3/5 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          Update Drink
        </button>
        <button
          type="button"
          className=" basis-2/5 w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
        >
          <Link href={"/tests/drinks"}>Back</Link>
        </button>
      </div>
    </form>
  );
};

export default DrinkUpdateForm;
