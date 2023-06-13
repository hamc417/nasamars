import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField } from '@mui/material';
import {TableData} from '../../components/TableUser';
import { IFormData } from './interface';
import "./styles.scss"



const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const [data, setData] = useState<IFormData[]>([]);

  const onSubmit = (formData: IFormData) => {
    setData((prevData: IFormData[]) => [...prevData, formData]);
    reset();
  };

  return (
    <>
        <div className='profile'>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'flex-center',
            flexDirection: 'column',
            textAlign: 'center',
            p: 3,
            m: 0,
            gap: 2,
            width: 500,
                       
          }}
        >
          <h1>Formulario</h1>
          <TextField
            id="outlined-required"
            label="Nombre"
            placeholder="Ingrese nombre"
            {...register('name', { required: true })}
          />
          {errors.name && <span>This name field is required</span>}
          <TextField
            id="outlined-required"
            label="Apellido"
            placeholder="Ingrese Apellido"
            {...register('lastname', { required: true })}
          />
          {errors.lastname && <span>This lastname field is required</span>}

          <TextField id="outlined-required" label="Direccion" placeholder="Ingrese direccion" {...register('address')} />

          <input type="submit" value="Agregar" />
        </Box>
        
      </form>
     

          <h2>Personas</h2>
      

      <TableData data={data} />
      </div>
    </>
  );
};

export default Profile;