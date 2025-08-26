import React from "react";
import { createDrink } from "@/server-actions/drink-actions";

const DrinksForm = () => {
  return (
    <form
      className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8"
      action={createDrink}
    >
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Make The Best Drink
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
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300"
      >
        Save Drink
      </button>
    </form>
  );
};

export default DrinksForm;
