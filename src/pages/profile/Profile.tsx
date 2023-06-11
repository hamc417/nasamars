import { TextField, Grid, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import {CustomizedTables} from '../../components/TableUser'

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data: any) => {
    const Data = data;
    {reset()}
  console.log(Data) 
  console.log(Data.lastname) };

  const Datalist = [
    {
      nombre: "Data.name",
      Apellido: "Data.lastname",
      Direccion: "Data.address"

    }
  ]




  console.log(watch("name")); // watch input value by passing the name of it
  

  return (
    <>
    {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
    <form onSubmit={handleSubmit(onSubmit)}>

      
      {/* register your input into the hook by invoking the "register" function */}
     
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-center',
          flexDirection: 'column',
          p: 3,
          m: 3,
          gap: 2,
          width: 500,
        
        }}
      >

      <TextField
        id="outlined-required"
        label="Nombre"
        placeholder="Ingrese nombre"
        {...register("name", { required: true })}
      />
      {errors.name && <span>This name field is required</span>}
      <TextField
        id="outlined-required"
        label="Apellido"
        placeholder="Ingrese Apellido"
        {...register("lastname", { required: true })}
      />
      {errors.lastname && <span>This lastname field is required</span>}

      <TextField
        id="outlined-required"
        label="Direccion"
        placeholder="Ingrese direccion"
        {...register("address")}
      />
      
      <input type="submit" value="Agregar" max-width={2} />

      </Box>
   
   
    </form>

<CustomizedTables/> 
</>
  );
};

export default Profile;
