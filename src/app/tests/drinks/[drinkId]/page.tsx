import BestDrinks from "@/components/share/BestDrinks";
import DetailDrinkCard from "@/components/share/DetailDrinkCard";
import { supabase } from "@/config/supabase";
import React, { Suspense } from "react";

interface Props {
  params: Promise<{
    drinkId: string;
  }>;
}

const DetailDrink = async ({ params }: Props) => {
  const { drinkId } = await params;

  const {
    data: drink,
    error,
    status,
  } = await supabase.from("drinks").select("*").eq("id", drinkId).single();

  if (status !== 200) {
    if (error instanceof Error) throw new Error(error?.message);
  }

  return (
    <React.Fragment>
      <main className="w-full min-h-screen container mx-auto">
        <div className="flex flex-col ">
          <div className="flex justify-center items-center min-h-screen px-5">
            <Suspense fallback={<>Laoding ... </>}>
              <DetailDrinkCard drink={drink} />
            </Suspense>
          </div>
          <section className="flex justify-center items-center min-h-screen px-5">
            <BestDrinks />
          </section>
        </div>
      </main>
    </React.Fragment>
  );
};

export default DetailDrink;
