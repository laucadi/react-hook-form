import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./App.css";
import Subcomponent1 from "./components/Subcomponent1";
import Subcomponent2 from "./components/Subcomponent2";

const shema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required(),
});
function App() {
  const methods = useForm({ resolver: yupResolver(shema) });
  console.log("watch variable email", methods.watch("email"));
  const onSubmit = (values) => console.log(values);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Subcomponent1 />
        <Subcomponent2 />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

export default App;
