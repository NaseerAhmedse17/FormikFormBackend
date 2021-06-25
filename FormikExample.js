import { useFormik } from 'formik'
import React,{} from 'react'
import axios from 'axios';
export default function FormikExample() {
    const formik = useFormik({
        initialValues:{
            username:"",
            password:"",
        },
        validate:values=>{
            let error={};
            if(!values.username)
            error.username = "Name Required!";
            if(!values.password)
            error.password = "Password Required!";
            // console.log(error);
            return error;
        },
        onSubmit:textvalue=>{
          axios({
              method:'post',
              url:'http://localhost:8082/login',
              data:textvalue
          }).then(
            console.log(textvalue)
          );
        }
    });
     console.log(formik.errors);
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <input type="text" name="username" value={formik.values.username} onChange={formik.handleChange}/><br></br>
                {formik.errors.username?<p>{formik.errors.username}</p>:null}
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
                {formik.errors.password?<p>{formik.errors.password}</p>:null}
                <br/>
                <button type="submit">
                submit
                </button>
            </form>
        </div>
    )
}
