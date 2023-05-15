import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

const Subcomponent1 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue="hola@gmail.com"
        render={({ field }) => (
          <TextField
            {...field}
            type="email"
            label="email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : ""}
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
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            label="Password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password ? errors.password?.message : ""}
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

export default Subcomponent1;
