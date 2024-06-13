import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBooks = () => {

    const [data, setdata] = useState(

        {
            "title": "",
            "desc": "",
            "author": "",
            "pub": "",
            "pdate": ""


        }
    )

    const inputhandler = (event) => {
        setdata({ ...data, [event.target.name]: event.target.value })
    }

    const readvalue = () => {
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
                    if (response.data.status=="success") {
                        alert("Added Successfully");
                    } else {
                        alert(response.data);
                    }
                
            }
        ).catch(
            (error)=>{
                    alert("error");
            }
        )
    }





  return (
    <div>

<Navbar/>

<div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <lable className="label form-label">Title</lable>
                        <input type="text" className="input form-control" name='title' value={data.title} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label"> Description</label>
                        <input type="text" className="input form-control" name='desc' value={data.desc} onChange={inputhandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label">Author</label>
                        <input type="text" className="input form-control" name='author' value={data.author} onChange={inputhandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label">Publisher</label>
                        <input type="text" className="input form-control" name='pub' value={data.pub} onChange={inputhandler}/>

                    </div>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <label htmlFor="" className="label form-label">Publishing Date</label>
                        <input type="date" name="pdate" id="" className="form-control" value={data.pdatedate} onChange={inputhandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <button className="btn btn-primary" onClick={readvalue}>ADD Book</button>
                    </div>
                </div>

                </div>
            </div>
        </div>



        
    </div>
  )
}

export default AddBooks