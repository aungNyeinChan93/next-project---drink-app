import { supabase } from "@/config/supabase";
import React from "react";

const LoginPage = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: "koko@gmail.com",
    password: "123123123",
  });

  console.log({ data, error });

  return (
    <React.Fragment>
      <main></main>
    </React.Fragment>
  );
};

export default LoginPage;
