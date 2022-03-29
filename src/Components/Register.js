import { React, useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";

import axios from "axios";

import { Link, Prompt, useHistory } from "react-router-dom"

import { ToastContainer, toast } from "react-toastify"

import Texterror from "./Texterror";

import "../styles/Register.css"

import Navbar1 from "./navbar";




const Register = (props) => {

    const [clicked, setClicked] = useState(true)
    let history = useHistory();

    const initialValues = {

        fname: "",

        lname: "",

        fullname: "",

        email: "",

        phone: ""

    }

    const validationSchema = Yup.object({

        fname: Yup.string().required("First name is required"),

        lname: Yup.string().required("Last name is required"),

        fullname: Yup.string().required("fullname is required"),

        email: Yup.string().required("email is required"),

        phone: Yup.string().required("password is required").min(10).max(10)

    })

    function signup() {

        setClicked(false)

        axios.post("http://localhost:3001/signupUsers", {

            fname: document.getElementById("fname").value,

            lname: document.getElementById("lname").value,

            fullname: document.getElementById("fullname").value,

            email: document.getElementById("email").value,

            phone: document.getElementById("phone").value

        }).then(res => {

            localStorage.setItem("user", JSON.stringify(res.data))

        })

        toast.success("registered successfully", {

            position: "top-center"

        })

        history.push("/login")

    }

    return (

        <>



            <div className="container register1">

                <div className="row">

                    <div className="col-md-6">

                        <div className="card1">

                            <div className="text-center">

                                <h1 style={{ color: "orange" }}>Register</h1>

                                <span data-testid="span-element">you can register here...</span>

                            </div>

                            <div>

                                <Formik initialValues={initialValues} onSubmit={signup} validationSchema={validationSchema}>

                                    <Form>

                                        <div className="mb-3">

                                            <label>Firstname</label>

                                            <Field type="text" id="fname" /*value={email} 

                                        onChange={(e)=>setEmail(e.target.value)}*/ name="fname"

                                                className="form-control" placeholder="Enter the firstname" />

                                            <ErrorMessage name="fname" component={Texterror} /><br />

                                        </div>

                                        <div className="mb-3">

                                            <label>Lastname</label>

                                            <Field type="text" id="lname" /*value={phone} 

                                        onChange={(e)=>setPhone(e.target.value)}*/ name="lname"

                                                className="form-control" placeholder="Enter lastname" />

                                            <ErrorMessage name="lname" component={Texterror} /><br />

                                        </div>

                                        <div className="mb-3">

                                            <label>FullName</label>

                                            <Field type="text" id="fullname" name="fullname"

                                                className="form-control" placeholder="Enter fullname" />

                                            <ErrorMessage name="fullname" component={Texterror} /><br />

                                        </div>

                                        <div className="mb-3">

                                            <label>Email</label>

                                            <Field type="email" id="email" /*value={email} 

                                        onChange={(e)=>setEmail(e.target.value)}*/ name="email"

                                                className="form-control" placeholder="Enter email" />

                                            <ErrorMessage name="email" component={Texterror} /><br />

                                        </div>

                                        <div className="mb-3">

                                            <label>Password</label>

                                            <Field type="password" id="phone" /*value={phone} 

                                        onChange={(e)=>setPhone(e.target.value)}*/ name="phone"

                                                className="form-control" placeholder="Enter password" />

                                            <ErrorMessage name="phone" component={Texterror} /><br />

                                        </div>

                                        <button type="submit" onClick={() => signup} className="btn btn-primary">Submit</button><br /><br />

                                        <span>Already have an account.Proceed to <Link style={{ color: "orange" }} to="/login">login</Link></span>

                                    </Form>

                                </Formik>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <Prompt when={clicked} message="You have unsaved changes,sure want to go back" />

            <ToastContainer />

        </>

    )

}

export default Register;