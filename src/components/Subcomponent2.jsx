import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const Subcomponent2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        name="firstName"
        control={control}
        defaultValue="Lau"
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            label="First name"
            variant="outlined"
          />
        )}
      />
      {/* <input
        type="email"
        defaultValue="hola@gmail.com"
        {...register("email")}
      /> */}
      <br />
      <br />
      {/* <input
        type="password"
        defaultValue="hola@gmail.com"
        {...register("password")}
      /> */}

      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            label="Last name"
            variant="outlined"
          />
        )}
      />
      <br />
      {/* {errors.password && errors.password?.message && (
        <span>{errors.password.message}</span>
      )} */}
      <br />
    </>
  );
};

export default Subcomponent2;
