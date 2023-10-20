
import React,{useEffect, useState} from 'react';
import {  Form, Input,message } from 'antd';
import { Link, useNavigate} from  "react-router-dom";
import axios from 'axios';
import Spinner from '../components/layout/Spinner';
import plant from '../images/plant2.gif'


const Register = () => {
const navigate= useNavigate();

const [loading,setLoading]= useState(false);

  const handleSubmit=async (value)=>{
    try{
      setLoading(true);
      await axios.post('/users/register',value)
      message.success('Registration successfull')
      setLoading(false);
      navigate("/login");
 }
    catch(error){
      setLoading(false)
      message.error('invalid username or password')
    }
    console.log(value);
  }

  //prevent for login user
  useEffect(()=>{
    if(localStorage.getItem('user')){
      navigate('/')
    }
  },[navigate])
  return (
    <>
    <div className="flex flex-col sm:flex-row w-full h-screen font-mono bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 backdrop-blur-xl">
      <div className="h-1/3 sm:h-full sm:w-1/2 bg-gradient-to-br from-[#0572E3] via-[#0345AC] to-[#022989] flex flex-col justify-center text-center   ">
        <img src={plant} alt="" className='w-[25vw] mx-auto'/>
    <h1 className='text-lg sm:text-3xl font-semibold bg-gradient-to-tr from-fuchsia-100 to-rose-300 font-mono bg-clip-text text-transparent '>WELCOME TO <br /> BUDGET BUDDY </h1>  
      </div>



    <div className="flex flex-row justify-center items-center h-screen w-full sm:w-1/2  ">
 {loading && <Spinner/>}
    <Form layout="vertical" onFinish={handleSubmit} className='w-10/12 h-[80vh]   text-center rounded-lg p-4 shadow-xl  flex flex-col justify-center  '>
    <div className="w-full ">
      <img src="https://picsum.photos/id/237/200/300" className='w-16 h-16  md:w-20 md:h-20 mx-auto rounded-full ' alt="" />
     </div>
    <h1 className='text-3xl md:text-5xl py-2 font-semibold'>Register Yourself</h1>
      <Form.Item label="Name" name="name">
      <Input placeholder='Sumit Panwar' className='sm:text-lg md:text-xl bg-inherit  hover:bg-slate-500/[0.4] hover:border-blue-800 border border-blue-800 focus:border-blue-700  '/>
      </Form.Item>
      <Form.Item label="Email" name="email">
      <Input placeholder='sumit2000@gmai.com' className='sm:text-lg md:text-xl bg-inherit  hover:bg-slate-500/[0.4] hover:border-blue-800 border border-blue-800 focus:border-blue-700  '/>
      </Form.Item>
      <Form.Item label="Password" name="password">
      <Input placeholder='xxxxxxxx' className='sm:text-lg md:text-xl bg-inherit  hover:bg-slate-500/[0.4] hover:border-blue-800 border border-blue-800 focus:border-blue-700  '/>
      </Form.Item>

      <div className="flex flex-col items-center gap-4">
        <div className='sm:text-base md:text-lg'>
              Already registered?<span className=' text-blue-700'><Link to='/login'>Click to Login</Link> </span>
        </div>
        <button className="h-10 sm:h-14 bg-gradient-to-br from-[#0572E3] via-[#0345AC] to-[#022989] text-white rounded-lg w-1/3 p-[2px] text-lg md:text-xl">Register</button>
      </div>
    </Form>
    </div>
    </div>
    </>
  )
}

export default Register
