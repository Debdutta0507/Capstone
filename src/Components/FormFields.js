import { ErrorMessage } from "formik";
import React from 'react';
import { Field } from 'formik';

const FormFields = (props) => {
    const { name, type, label, value } = props;

    return (
        <div className='mb-2'>
            <label htmlFor={name}>{label}</label>
            <Field type={type} id={name} className="form-control" name={name} value={value}/>
            <ErrorMessage component="div" data-testid={name} name={name} className="error" />
        </div>
    )
}

export default FormFields;