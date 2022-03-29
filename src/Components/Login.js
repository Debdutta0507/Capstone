import axios from 'axios'

import { React } from 'react'

import { Formik, Field, Form, ErrorMessage } from "formik"

import * as Yup from "yup"

import Texterror from "./Texterror"

import "../styles/login.css"

import { ToastContainer, toast } from "react-toastify"
import Navbar1 from './navbar'
import { useHistory } from "react-router-dom"






const Login = (props) => {
    let history = useHistory();

    const initialValues = {

        fullname: "",

        email: "",

        phone: ""

    }

    const onSubmit = (values, { resetForm }) => {

        console.log(values)

        axios.get(`http://localhost:3001/signupUsers`)

            .then(res => {

                const user = res.data.find((a) => {

                    return a.fullname === document.getElementById("fullname").value &&

                        a.email === document.getElementById("email").value &&

                        a.phone === document.getElementById("phone").value

                })

                if (user) {

                    toast.success("Login successful", {

                        position: "top-center"

                    })
                    localStorage.setItem("login", JSON.stringify(user))

                    resetForm()



                }

                else {

                    toast.error("user not found", {

                        position: "top-center"

                    })

                    resetForm()

                }

            })

        axios.post(`http://localhost:3001/loginUsers`, {

            fullname: document.getElementById("fullname").value,

            email: document.getElementById("email").value,

            phone: document.getElementById("phone").value

        }).then(res => {


            history.push("/home")


        })



    }

    const validationSchema = Yup.object({

        fullname: Yup.string().required("Fullname is required"),

        email: Yup.string().email("Invalid email format").required("email is required"),

        phone: Yup.string().required("password is required").max(10).min(10)

    })

    return (

        <>


            <div className='login1'>

                <div className="container">

                    <div className="row">

                        <div className="col-md-6">

                            <div className="card1">

                                <div className="text-center">

                                    <h1 style={{ color: "orange" }}>Login</h1>

                                    <span data-testid="test-span">Enter your credentials here...</span>

                                </div>

                                <div>

                                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

                                        <Form>

                                            <div className="mb-3">

                                                <label>FullName</label>

                                                <Field type="text" id="fullname" name="fullname"

                                                    className="form-control" placeholder="Enter fullname" />

                                                <ErrorMessage name="fullname" component={Texterror} /><br />

                                            </div>

                                            <div className="mb-3">

                                                <label>Email address</label>

                                                <Field type="email" id="email" name="email"

                                                    className="form-control" placeholder="Enter email address" />

                                                <ErrorMessage name="email" component={Texterror} /><br />

                                            </div>

                                            <div className="mb-3">

                                                <label>Password</label>

                                                <Field type="password" id="phone" name="phone"

                                                    className="form-control" placeholder="enter the password" />

                                                <ErrorMessage name="phone" component={Texterror} /><br />

                                            </div>

                                            <button type="submit" className="btn btn-primary">Submit</button>

                                        </Form>

                                    </Formik>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <ToastContainer />

        </>



    )

}




export default Login