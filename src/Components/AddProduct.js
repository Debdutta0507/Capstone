import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { v4 as uuid } from 'uuid';
import Alloperations from '../CRUD/Alloperations';
import Navbar1 from './navbar';
import FormFields from './FormFields';
import {Prompt,useHistory,useParams} from 'react-router-dom';




const AddProduct = () => {
    const {id} =useParams();
    let history= useHistory();
    const CMode = !id;
    console.log(id);
    const validate = Yup.object({
        proName: Yup.string()
            .min(3, 'Product Name must have more than 2 letters')
            .max(30, 'Product Name must have less than 31 letters')
            .required('Product Name is Mandatory!!!'),
        desc: Yup.string()
            .required("Description is Mandatory!!!")
            .max(50, 'Description should be under/equals to 50 letters'),
        price: Yup.number()
            .moreThan(0,'Price must be greater than 0')
            .required('Price is Mandatory!!!'),

        quantity: Yup.number()
            .required("Quantity is Mandatory!!!")
            .min(0, "Quantity cannot be negative"),
        url: Yup.string()
            .required('Image Url is required'),
    })

    const initialValues = {
        proName: '',
        desc: '',
        url: '',
        price: '',
        quantity: '',
        count: 0
    }

    const [productData, setProductData] = useState(initialValues);
    useEffect(() => {
        if (!CMode) {
            Alloperations.getProductById(id).then(resp => {
                setProductData(resp.data);
            })
        }
    }, [id, CMode])

    const savedValues = {
        proName: productData.proName,
        desc: productData.desc,
        url: productData.url,
        price: productData.price,
        quantity: productData.quantity,
        count: 0
    }

    const onSubmit = (values => {
        return CMode ? createUser(values) : updateUser(id, values);
    })

    const createUser = async (data) => {
        const product = { ...data };
        product.id = uuid().slice(0, 8);
        const resp = await Alloperations.addProduct(product);
        alert("Product Added Successfully!!!");
        console.log(resp);
        history.push("/ProdLog");
    }

    const updateUser = async (id, data) => {
        const resp = await Alloperations.updateProductById(id, data);
        alert("Product Updated!!!");
        console.log(resp);
        history.push("/ProdLog");
    }

    return (
        <Formik
            initialValues={savedValues || initialValues}
            validationSchema={validate}
            onSubmit={onSubmit}
            enableReinitialize
        >
            {(formik) => {
                return (
                    <><Navbar1 /><div className="container mt-3">
                        <div className="row">
                            <div className="col-md-5">
                                <h1 className="my-4 font-weight-bold .display-4">{CMode ? 'Add Product' : 'Edit Product'}</h1>
                                <Form>
                                    <Prompt
                                        when={formik.dirty && formik.submitCount === 0}
                                        message="Are you sure you want to leave? You have with unsaved changes."
                                    />
                                    <FormFields formik={formik} type="text" name="proName" label="Product Name" value={formik.values.proName} />
                                    <FormFields formik={formik} type="text" name="desc" label="Product Description" value={formik.values.desc} />
                                    <FormFields formik={formik} type="text" name="url" label="Image Url" value={formik.values.url} />
                                    <FormFields formik={formik} type="number" name="price" label="Price" value={formik.values.price} />
                                    <FormFields formik={formik} type="number" name="quantity" label="Quantity" value={formik.values.quantity} />
                                    <button className="btn btn-dark mt-3" type="submit" name="submit" data-testid="Add">{CMode ? 'Add' : 'Update'}</button>
                                    <button className="btn btn-danger mt-3 ms-3" type="reset">Reset</button>
                                </Form>
                            </div>


                        </div>
                    </div></>
                )
            }}
        </Formik>
    )
}

export default AddProduct;