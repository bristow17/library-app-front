import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {


    const [data,changedata]=useState([])
        

    const fetchdata = () => {
        axios.get("http://localhost:8080/viewall").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error)=>(
                console.log()
            )
        ).finally()
    }

    useEffect(() => { fetchdata() }, [])


  return (
    <div>

<Navbar/>


<br></br><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-col-xl-12 col-xxl-12">

                        <table class="table">
                            <thead>
                                <tr>

                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Publishing Date</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, i) => {
                                            return <tr>

                                                {/* <td>{value._id}</td> */}
                                                <td>{value.title}</td>
                                                <td>{value.desc}</td>
                                                <td>{value.author}</td>
                                                <td>{value.pub}</td>
                                                <td>{value.pdate}</td>
                                            </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>


    </div>
  )
}

export default ViewAll