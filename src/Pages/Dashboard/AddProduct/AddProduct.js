import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://obscure-caverns-05990.herokuapp.com/products', data)
            .then(res => {
                if(res.data.insertedId){
                    alert('Added Successfully!');
                    reset();
                }
            })
    };
    return (
        <div>
            <h3 className='my-4'>Please Add a Products</h3>
            <form className='mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <input className='form-control mb-4' placeholder='Product Name' {...register("name", { required: true })} />
                    <input className='form-control mb-4' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <textarea className='form-control mb-4' placeholder='Description' {...register("description", { required: true })} />
                    <input className='form-control mb-4' placeholder='Img url' {...register("img", { required: true })} />
                    <input className='btn btn-primary mb-4' type="submit" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;