import DrinkUpdateForm from "@/components/share/DrinkUpdateForm";
import { supabase } from "@/config/supabase";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const EditDrinkPage = async ({ params }: Props) => {
  const { id } = await params;
  const {
    data: drink,
    status,
    error,
  } = await supabase.from("drinks").select("*").eq("id", id).single();
  if (status !== 200) {
    if (error instanceof Error) throw new Error(error?.message);
  }

  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto">
        <div className="flex justify-center items-center min-h-screen ">
          <DrinkUpdateForm drink={drink} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default EditDrinkPage;
