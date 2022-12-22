import React, { useState, useEffect } from "react";
import { Header } from "../Header";
import "../../Tailwind/App.css"
import { Link } from "react-router-dom";

interface FormInputs {
  first_name:string,
    last_name:string,
    user_name:string,
    mobile_number: number,
    email:string
}


const populateForm=()=>{
  const storedValues= localStorage.getItem('form')
  if(!storedValues){
    return {
      first_name:'',
      last_name:'',
      user_name:'',
      mobile_number:+234,
      email:''
    }
  }
  return JSON.parse(storedValues)
}


 const SignUp=()=>{

  const [values, setValues]=useState<FormInputs>(populateForm)

 useEffect(()=>{
    localStorage.setItem('form', JSON.stringify(values))
  }, [values])

  const handleSubmit=(event : React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    alert("saved!")
  }

  const changeHandler=(event : React.ChangeEvent<HTMLInputElement>)=>{
    setValues((previousValues:any)=>({
      ...previousValues,
      [event.target.name]: event.target.value,
    }))

  }


    return(
      <div className=" bg-slate-900">
           <Header />
        <div className=" pt-11  ">
        <h2 className="text-3xl underline font-bold font-mono text-slate-300 text-center pb-5">Sign Up</h2>
        <form className="container flex flex-col gap-11 border-2 p-11 
                        rounded-xl bg-slate-800 border-indigo-600
                        pt-7 flex-wrap m-auto  text-xl font-bold font-mono text-slate-300"
                       onSubmit={handleSubmit} >
                      
      
          <label className="flex flex-col " htmlFor="Name">
            First Name:
            <input 
              className="border-2 mt-2 bg-inherit border-slate-300 h-12 rounded-md"
              type="text"
              id="nameInput"
              name="first_name"
              placeholder=" What is your first name?"
              onChange={changeHandler}
              value={values.first_name}

            />
          </label>

          <label className="flex flex-col " htmlFor="Name">
            Last Name:
            <input 
              className="border-2 mt-2 bg-inherit border-slate-300 h-12 rounded-md"
              type="text"
              id="nameInput"
              name="last_name"
              placeholder=" What is your last name?"
              onChange={changeHandler}
              value={values.last_name}

            />
          </label>

          <label className="flex flex-col " htmlFor="Name">
            User Name:
            <input 
              className="border-2 mt-2 bg-inherit border-slate-300 h-12 rounded-md"
              type="text"
              id="nameInput"
              name="user_name"
              placeholder=" input a user name?"
              onChange={changeHandler}
              value={values.user_name}

            />
          </label>

          <label className="flex flex-col " htmlFor="Number">
            Mobile Number:

            <input 
              className="border-2 mt-2 bg-inherit border-slate-300 h-12 rounded-md"
              type="number"
              id="numberInput"
              name="mobile_number"
              placeholder=" input your mobile number"
              onChange={changeHandler}
              value={values.mobile_number}

            />
          </label>

          <label className="flex flex-col " htmlFor="email">
            Email Address:
            
            <input 
              className="border-2 mt-2 bg-inherit border-slate-300 h-12 rounded-md"
            required
              type="email"
              id="emailInput"
              name="email"
              placeholder=" johndoe@email.com"
              onChange={changeHandler}
              value={values.email}

            />
          </label>

          <Link type="submit" to="/edit-Profile"
           className="inline-flex justify-center rounded-md border border-transparent
           bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
    )
}
export default SignUp;