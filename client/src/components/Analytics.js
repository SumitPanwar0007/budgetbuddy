import React from 'react'
import  { Progress } from 'antd'


const Analytics = ({allTransection}) => {
//categroies array
const categories=[
            "salary",
            "tip",
            "project",
            "food",
            "movie",
            "bills",
            "medical",
            "fee",
            "tax"
]

    //total transections
const totalTransection= allTransection.length;
  const totalIncomeTransection= allTransection.filter((transection)=>transection.type=== "income");
  const totalExpenceTransection= allTransection.filter((transection)=>transection.type==='expense');

  const totalIncomePercent= (totalIncomeTransection.length/totalTransection)*100;
  const totalExpencePercent= (totalExpenceTransection.length/totalTransection)*100;


  //total turnover

  const totalTurnover=allTransection.reduce((acc,transection)=> acc+ transection.amount,0)

  const totalIncomeTurnover=allTransection
                            .filter((transection)=> transection.type ==="income")
                            .reduce((acc,transection)=>acc+transection.amount,0);

    const totalExpenceTurnover= allTransection
                                .filter((transection)=>transection.type==='expense')
                                .reduce((acc,transection)=>acc+transection.amount,0);

    const totalIncomeTurnoverPercent= (totalIncomeTurnover/totalTurnover)*100;
    const totalExpenseTurnoverPercent= (totalExpenceTurnover/totalTurnover)*100;


  return (
    <> 
     <div className='grid sm:grid-cols-2 md:grid-cols-4'>
       
    

     
        <div className="mt-4 px-2">
            <div className=" bg-[#484899]/[0.2] shadow-slate-300 shadow-lg text-center rounded-lg">
                <div className='bg-[#9191d2]/[.8] text-2xl md:text-3xl py-2 font-bold mb-6 rounded-t-lg text-center  backdrop-blur-xl'>
                    Total 
                     Transection: <br /> <span className='text-blue-900'>{totalTransection} </span>
                </div>
                <div className="text-xl md:text-3xl  ">
                    <h3 className='text-[#166534] md:my-2 '>Income: ₹ {totalIncomeTransection.length}</h3>
                    <h3 className='text-[#991b1b] md:my-2'>Expense: ₹ {totalExpenceTransection.length}</h3>
                    <div className='gap-6 md:my-4 '>
                        <Progress 
                                    type="circle"
                                    percent={totalIncomePercent.toFixed(0)}
                                    strokeColor={'#166534'}
                                    className="mx-2 my-4 "
                        />
                        <Progress 
                                    type="circle"
                                    percent={totalExpenseTurnoverPercent.toFixed(0)}
                                    strokeColor={'#991b1b'}
                                    className="mx-2 my-4 "
                        />
                    </div>
                </div>

            </div>
        </div>

        <div className="mt-4 px-2">
            <div className=" bg-[#484899]/[0.2] shadow-slate-300 shadow-lg text-white/[0.6] rounded-lg text-center">
                <div className='text-2xl md:text-3xl py-2 bg-[#9191d2]/[0.8] text-black font-bold  mb-6 rounded-t-lg text-center'>
                    Total Turnover: <br /> <span className='text-blue-900'> {totalTurnover} </span>
                </div>
                <div className="text-xl md:text-3xl">
                    <h3 className='text-[#166534] md:my-2'>Income:  ₹ {totalIncomeTurnover}</h3>
                    <h3 className='text-[#991b1b] md:my-2'>Expense: ₹ {totalExpenceTurnover}</h3>
                    <div>
                        <Progress 
                                    type="circle"
                                    percent={totalIncomeTurnoverPercent.toFixed(0)}
                                    strokeColor={'#166534'}
                                    className="mx-2 my-4"
                        />
                        <Progress 
                                    type="circle"
                                    percent={totalExpencePercent.toFixed(0)}
                                    strokeColor={'#991b1b'}
                                    className="mx-2 my-4"
                        />
                    </div>
                </div>

            </div>
        </div>

    
         <div className="mt-4 m-2 rounded-lg shadow-slate-300 shadow-lg  bg-[#484899]/[0.2] text-white/[0.6]">
            <h4 className='text-2xl md:text-3xl py-2 bg-[#9191d2]/[0.8] text-black font-bold  mb-6 rounded-t-lg text-center'>Categorywise <br /> Income</h4>

            {categories.map((category)=>{

                const amount= allTransection
                            .filter(
                                (transection)=>transection.type==="income" && transection.category===category
                            )
                            .reduce((acc,transection)=>acc+ transection.amount,0);
                            return(
                                amount>0 &&(
                                <div className=" p-2">
                                    <div className="text-black text-sm md:text-xl">
                                        <h4>{category}</h4>
                                        <Progress    
                                        strokeColor={'#166534'}
                                                    percent={((amount/totalIncomeTurnover)*100).toFixed(0)} />
                                    </div>
                                </div>
                            )) 
            })}
            </div>
            <div className="mt-4 m-2 rounded-lg shadow-slate-300 shadow-lg  bg-[#484899]/[0.2] text-white/[0.6]">
            <h4 className='text-2xl md:text-3xl py-2 bg-[#9191d2]/[0.8] text-black font-bold  mb-6 rounded-t-lg text-center'>Categorywise <br /> expense</h4>

            {categories.map((category)=>{

                const amount= allTransection
                            .filter(
                                (transection)=>transection.type==="expense" && transection.category===category
                            )
                            .reduce((acc,transection)=>acc+ transection.amount,0);
                            return(
                                amount>0 &&(
                                <div className="p-2">
                                    <div className="text-black text-sm md:text-xl">
                                        <h4>{category}</h4>
                                        <Progress   
                                                     strokeColor={'#991b1b'}
                                                    percent={((amount/totalExpenceTurnover)*100).toFixed(0)} />
                                    </div>
                                </div>
                            )) 
            })}
            </div>
        </div>
  
    </>
   
  )
}

export default Analytics

