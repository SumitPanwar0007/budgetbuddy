import React, { useEffect } from 'react'
import { useAppContext } from "../pages/AppContext";
import {  Select, message } from 'antd'; 
import axios from 'axios';

const Expense = () => {
    const { allTransaction,
      frequency,setFrequency,
      setLoading,
     setAllTransaction,
      selectDate,
      type   } = useAppContext();

    const totalIncome = allTransaction
      .filter((transection) => transection.type === "expense")
      .reduce((acc, transection) => acc + transection.amount, 0);

      useEffect(() => {
        const getAllTransaction = async () => {
          try {
            const user = JSON.parse(localStorage.getItem('user'));
            setLoading(true);
            const res = await axios.post('/transection/get-transection', {
              user_id: user._id,
              frequency,
              selectDate,
              type,
            });
            setLoading(false);
            setAllTransaction(res.data);
            
          } catch (error) {
            console.log(error);
            message.error('Fetch Issue with Transection');
          }
        };
        getAllTransaction();
      }, [frequency, selectDate, type]);

  return (
    <div className='mt-6 w-full'>
    <h1 className=" px-4 text-3xl md:text-4xl font-bold">Expanse</h1>
    <br />
    <div className="flex flex-col justify-end items-end gap-4">
      <div className="w-[90vw] flex sm:w-[80vw] h-16 md:h-24 text-center bg-[#262651] rounded-lg mx-2 py-2 text-3xl text-white/[0.6]">
      

      <div className="w-1/3 text-3xl">
        
          <Select value={frequency} style={{minWidth:'10vw', maxWidth:'25vw'}} onChange={(value) => setFrequency(value)} dropdownStyle={{ backgroundColor: '#9191d2' }} >
            <Select.Option value='7' >Week</Select.Option>
            <Select.Option value='30'>Month</Select.Option>
            <Select.Option value='365'>Year</Select.Option>
            
          </Select>
          </div>
      
      <div className="w-2/3 text-xl sm:text-2xl  md:text-4xl " >  Total Expanse :{" "}
        <span className="text-[#991b1b] text-bold font-bold">
          
          ₹ {totalIncome}
        </span>
        </div>  
      </div>
      {allTransaction.map((transection) => {
        if (transection?.type === "expense") {
          const transactionDate = new Date(transection.date);
       const formattedDate = transactionDate.toISOString().split('T')[0]; 

          return (
          <>
  
         <div className="w-10/12 sm:w-[60vw]  h-14 md:h-20 flex flex-col  bg-gradient-to-r from-[#3A50CA] to-indigo-400 backdrop-blur-2xl backdrop-brightness-50 rounded-lg mx-2 py-2 shadow-md shadow-slate-500 ">
            <div className="w-full pl-8 text-xs sm:text-base md:text-2xl font-semibold"><p> {transection.description}</p> </div>
            <div className="flex justify-evenly text-sm pl-4 gap-2 ">
            {/* <p className=' text-2xl font-semibold mb-2'> {transection.description}</p>  */}
              <p className='text-red-900 text-xl md:text-2xl font-semibold mb-2'> ₹{transection.amount}</p>
               <p className='text-xs sm:text-base md:text-xl'>Date: {formattedDate}</p>
               <p className=" text-xs sm:text-base md:text-2xl ">{transection.category}</p>
            </div>
            </div>
            </> );
        }
      })}
    </div>
  </div>
  )
}

export default Expense
