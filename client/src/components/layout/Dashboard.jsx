import React from 'react'
import {useAppContext} from '../../pages/AppContext'
import moment from 'moment';

const Dashboard = () => {
    const {
            allTransaction,
            setFrequency,
            
           
      } = useAppContext();
    //   setSelectDate(365)
      setFrequency(365);
    
    const allIncomeTransection=allTransaction
                .filter((transaction)=>transaction.type==='income') 
    const allExpenseTransection=allTransaction
                .filter((transaction)=>transaction.type==="expense")
               

  const totalIncome=allTransaction
  .filter((transection)=> transection.type ==="income")
  .reduce((acc,transection)=>acc+transection.amount,0);

  const totalExpanse=allTransaction
                .filter((transection)=>transection.type==='expense')
                .reduce((acc,transection)=>acc+transection.amount,0)

  const totalBalance= totalIncome - totalExpanse;
 let minIncome=0;
 let maxIncome=0;
 if (allIncomeTransection.length > 0) {
     minIncome = Math.min(...allIncomeTransection.map((transaction) => transaction.amount));
     maxIncome=Math.max(...allIncomeTransection.map((transaction)=>transaction.amount));
    
  } else {
    console.log('No income transactions found.');
  }

  let minExpence=0;
  let maxExpence=0;
  if(allExpenseTransection.length>0){
    minExpence=Math.min(...allExpenseTransection.map((transaction)=>transaction.amount));
    maxExpence=Math.max(...allExpenseTransection.map((transaction)=>transaction.amount))
  }

  const last4Transactions = allTransaction.slice(0,3); // Get the last 4 transactions

  return (

 
      <div className="w-full flex  flex-col md:flex-row justify-between items-center">

        <div className="w-10/12 md:w-1/2  flex flex-col bg-gradient-to-tr from-blue-800 to-indigo-400 backdrop-blur-3xl rounded-lg m-4 py-8 gap-8  shadow-lg shadow-slate-600">
           <h1 className='w-full text-center text-2xl font-bold sm:text-3xl md:text-4xl'>Status</h1>
            
            <div className="w-2/3 h-auto text-center text-white/[0.6]  bg-[#262651] shadow-lg rounded-lg p-2 mx-auto">
                <h1 className='text-xl sm:text-xl md:text-2xl'>Total Income</h1>
                <h1><span className='text-sm md:text-2xl' >₹  </span>  <span className='text-green-700 sm:text-2xl md:text-3xl'>{totalIncome} </span></h1>
            </div>
            <div className="w-2/3 h-auto text-center text-white/[0.6]  bg-[#262651]  shadow-lg rounded-lg p-2 mx-auto">
                <h1 className='sm:text-2xl'>Total Expanse</h1>
                <h1><span className='text-sm md:text-2xl' >₹  </span> <span className='sm:text-2xl md:text-3xl text-red-700'> {totalExpanse}</span></h1>
            </div>
            <div className="w-2/3 h-auto text-center text-white/[0.6]   bg-[#262651]  shadow-lg rounded-lg p-2 mx-auto">
                <h1 className='sm:text-2xl'>Total Balance</h1>
                <h1><span className='text-sm md:text-2xl' >₹  </span> <span className='sm:text-2xl md:text-3xl text-blue-500'> {totalBalance}</span></h1>
            </div>
        </div>



        <div className="w-10/12 h-[90vh] sm:mt-4 py-4 flex flex-col items-center bg-gradient-to-tr from-blue-800 to-indigo-400 backdrop-blur-3xl m-4 rounded-lg p-2 gap-4 shadow-lg shadow-slate-600  ">
        <h1  className='w-full text-center font-bold text-2xl sm:text-3xl md:text-4xl pb-4'>Recent Histroy</h1>
        
          {
             
           last4Transactions.map((transaction) => (
               <div className="flex justify-between w-[90%] sm:w-10/12 sm:h-14 p-2 text-xs sm:text-sm  bg-[#262651] text-white/[0.6] shadow-lg rounded-lg  mx-auto gap-4" key={transaction._id}>
                 <p className='text-xs sm:text-base md:text-xl'> {moment(transaction.date).format('YYYY-MM-DD')}</p>
                 <p  className='text-xs sm:text-base md:text-lg'> {transaction.amount}</p>
                 {
                  transaction.type === 'income' ? <p className='text-green-600 text-xs sm:text-base md:text-xl'> {transaction.type}</p>:<p className='text-red-600 text-xs sm:text-base md:text-xl'> {transaction.type}</p>
                 }
               
                
                  <p  className='text-xs sm:text-base md:text-lg' > {transaction.description}</p> 
               </div>
             ))
          }
            
            
            
            <div className='mt-4 w-10/12 flex flex-row justify-between items-end px-4'>
                <h1 className='text-sm md:text-xl' >min</h1>
                <p className='text-2xl md:text-3xl font-bold'>Salary</p>
                <p className='text-sm md:text-xl' >max</p>
            </div>
            <div className="w-10/12 h-10 md:h-12 py-2 px-2 text-center bg-[#262651] text-white/[0.6]  shadow-lg rounded-lg  mx-auto flex justify-between">
             <h1 className='text-sm sm:text-lg md:text-xl'>₹{minIncome}</h1>
             <h1 className='text-sm sm:text-lg md:text-xl'>₹{maxIncome}</h1>
            </div>

           
            <div className='mt-4 w-10/12 flex flex-row justify-between items-end px-4'>
                <h1 className='text-sm md:text-xl' >min</h1>
                <p className='text-2xl md:text-3xl font-bold'>Expense</p>
                <p className='text-sm md:text-xl' >max</p>
            </div>
            <div className="w-10/12 h-10 md:h-12 py-2 px-2 text-center bg-[#262651] text-white/[0.6]  shadow-lg rounded-lg  mx-auto flex justify-between">
             <h1 className='text-sm sm:text-lg md:text-xl'>₹{minExpence}</h1>
             <h1 className='text-sm sm:text-lg md:text-xl'>${maxExpence}</h1>
            </div>
            
        </div>
      </div>
     
    
  )
}

export default Dashboard
