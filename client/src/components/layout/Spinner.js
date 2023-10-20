import React from 'react'


const Spinner = () => {
  return (
    <>
 

  <div className="flex justify-center  text-center absolute bg-inherit h-full w-full ">
    <div className="spinner-border" role="status">
      
      <span className="visually-hidden"><img src={(`data:image/svg+xml,\
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -20 40 40">\
<style> /* ...YO DAWG... */ circle { animation: 4s a infinite linear, 3s o infinite linear; }\
@keyframes a {from{stroke-dasharray:100 0}50%25{stroke-dasharray:0 100}to{stroke-dasharray:100 0}}\
@keyframes o {from{stroke-dashoffset:75}to{stroke-dashoffset:375}}\
<%2Fstyle><circle r="15.9154943092" stroke-width="7" fill="none" stroke="snow" />\
</svg>`)} alt="" /> Loading...</span>
    </div>
  </div>


    
    </>
  )
}

export default Spinner
