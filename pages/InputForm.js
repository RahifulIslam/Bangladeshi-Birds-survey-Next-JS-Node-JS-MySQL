import React from 'react'
import Container from '@material-ui/core/Container';
import { TextField } from '@material-ui/core';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import axios from "axios";


const InputForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const addBirdsInformation = async (insertedData) => {
    console.log("Button is clicked", insertedData)

    // const requData = {
    //   NAME_OF_BIRDS: insertedData.name,
    //   ORDER_OF_BIRDS: insertedData.order,
    //   FAMILY_OF_BIRDS: insertedData.family,
    //   COLOR_OF_BIRDS: insertedData.color,
    //   TOTAL_COUNTS_OF_BIRDS: insertedData.total,

    // }
    // console.log(requData)

    //   const response = await fetch('http://localhost:3000/api/birds_information/', {
    //     method: 'POST',
    //     body: JSON.stringify({ insertedData }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   const data = await response.json()
    //   console.log(data)
    // }

    // POST data using axios
    axios.post("http://localhost:3000/api/birds_information/", insertedData)
      // console.log("task is end")
      // .then(response => response.json())
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error is:', error.response);
      });
  }

  return (
    <Container maxWidth="xs">
      <h1>Insert Birds Information</h1>
      <form onSubmit={handleSubmit(addBirdsInformation)} action="/profile" method="post" enctype="multipart/form-data">
        <Box mb={2}>
          <TextField variant='outlined' label='Name' fullWidth autoFocus
            {...register('name', { required: true })}
          />
          {errors.name && errors.name.type == "required" && <p color='red'>Please enter the birds name</p>}
        </Box>
        <Box mb={2}>
          <TextField variant='outlined' label='Order' fullWidth autoFocus
            {...register("order", { required: "Required" })}
          />
          {errors.order && errors.order.type == "required" && <p color=''>Please enter the birds order</p>}
        </Box>
        <Box mb={2}>
          <TextField variant='outlined' label='Family' fullWidth autoFocus
            {...register("family", { required: "Required" })}
          />
          {errors.family && errors.family.type == "required" && <p color=''>Please enter the birds family</p>}
        </Box>
        <Box mb={2}>
          <TextField variant='outlined' label='Size' fullWidth autoFocus
            {...register("size", { required: "Required" })}
          />
          {errors.size && errors.size.type == "required" && <p color=''>Please enter the birds size</p>}
        </Box>
        <Box mb={2}>
          <TextField variant='outlined' label='Color' fullWidth autoFocus
            {...register("color", { required: "Required" })}
          />
          {errors.color && errors.color.type == "required" && <p color=''>Please enter the birds color</p>}
        </Box>
        <Box mb={2}>
          <TextField variant='outlined' type='file' InputLabelProps={{ shrink: true }} label='Image' fullWidth autoFocus
            {...register("image")}
          />
          {errors.image && errors.image.type == "required" && <p color=''>Please enter the birds image</p>}
        </Box>
        <Box mb={2}>
          <TextField variant='outlined' label='Total counts' fullWidth autoFocus
            {...register("total", { required: "Required" })}
          />
          {errors.total && errors.total.type == "required" && <p color=''>Please enter the birds total</p>}
        </Box>
        <Box mb={2}>
          <Button type="submit" variant='contained' color='primary' fullWidth>Input Information</Button>
        </Box>
      </form>

    </Container>
  )
}

export default InputForm