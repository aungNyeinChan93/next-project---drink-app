import DrinksForm from "@/components/share/DrinkForm";
import React from "react";

const DrinkCreatePage = async () => {
  return (
    <React.Fragment>
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <DrinksForm />
      </main>
    </React.Fragment>
  );
};

export default DrinkCreatePage;
