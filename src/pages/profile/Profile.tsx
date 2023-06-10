import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {};

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <TextField
        id="outlined-required"
        label="Nombre"
        placeholder="Ingrese nombre"
        {...register("name", { required: true })}
      />

      {errors.name && <span>This name field is required</span>}
      <input
        placeholder="Agregar apellido"
        {...register("lastName", { required: true })}
      />
      {errors.lastName && <span>This lastName field is required</span>}
      <input placeholder="Agregar dirección" {...register("address")} />

      <input type="submit" value="Agregar" />
    </form>
  );
};

export default Profile;
