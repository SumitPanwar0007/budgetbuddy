import React,{useState,useEffect} from 'react';
import {  Form, Input,message } from 'antd';
import { Link,useNavigate} from  "react-router-dom";
import axios from 'axios';
import Spinner from '../components/layout/Spinner';
import plant from '../images/plant2.gif'


const Login = () => {
const navigate= useNavigate();

const [loading,setLoading]= useState(false);

    const handleSubmit= async (value)=>{
       try{
        setLoading(true)

        const {data} = await axios.post('/users/login',value)
        setLoading(false)
        message.success("login Successfull")
        localStorage.setItem('user',JSON.stringify({...data.user,password:''}))
        navigate('/')
       }
       catch(error){
        setLoading(false);
        message.error("No user Found, Please Register first!!")
      console.log("here the error is : ",error)
       }
       console.log(value)
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
    
    <div className="flex flex-col justify-center items-center w-full sm:w-1/2  l ">
      
    {loading && <Spinner/>}
    <Form  layout="vertical"  onFinish={handleSubmit} className='w-10/12 h-[60vh] sm:h-[80vh]  text-center rounded-lg p-4 shadow-xl gap-6  flex flex-col justify-center'>
    <div className="w-full h-10 my-4">
      <img src="https://picsum.photos/id/237/200/300" className='w-14 mx-auto rounded-full h-14  md:h-20 md:w-20' alt="" />
     </div>
    <h1 className='text-3xl md:text-5xl my-4 font-bold '>Welcome Back { console.log(localStorage.getItem('user')) }</h1>
     
    
      <Form.Item label="Email" name="email" >
      <Input type="email" placeholder='Sumitpanwar3107@gmail.com'  className='sm:text-lg md:text-xl bg-inherit  hover:bg-slate-500/[0.4] hover:border-blue-800 border border-blue-800 focus:border-blue-700  '/>
      </Form.Item>
     
      <Form.Item label="Password" name="password">
      <Input type="password" placeholder='*******' className='sm:text-lg md:text-xl bg-inherit  hover:bg-slate-500/[0.4] hover:border-blue-800 border border-blue-800 focus:border-blue-700 '/>
      </Form.Item>

      <div className="flex flex-col items-center gap-4">
        <div className='sm:text-base md:text-lg'>
          
       NOt registered? <span className=' text-blue-800'><Link to='/register'>Click to Register</Link> </span>
        </div>
        <button className="h-10 md:h-14 bg-gradient-to-br from-[#0572E3] via-[#0345AC] to-[#022989] rounded-lg w-1/3 p-[2px] text-lg text-white">LOGIN</button>
      </div>
    </Form>

    </div>
    </div>
    </>
  )
}

export default Login
