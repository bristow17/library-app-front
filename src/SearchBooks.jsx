import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchBooks = () => {


    const [data, setData] = useState(
        {
            "title": "",
        }
    )

    const [result, setResult] = useState(
        []
    )



const deletebooks=(id)=>{

    let input={"_id":id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.success="success") {
                alert("successfully deleted!")
                
            } else {
                alert("error")
            }
        }
    ).catch()

}





    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        axios.post("http://localhost:8080/search", data).then((response) => {
            setResult(response.data)
        }

        ).catch(
            (error) => {
                console.log(error)
            }

        ).finally()

    }







  return (
    <div>
<Navbar/>


<div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <label htmlFor="" className="form-label">Course Title</label>
                                <input type="text" className="form-control" name='title' value={data.title} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Search</button>
                            </div>
                        </div>




                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-dark table-striped table-hover">

                            <thead>
                                <tr>

                                <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Publisher</th>
                                    <th scope="col">Publishing Date</th>
                                    <th></th>

                                </tr>
                            </thead>
                            <tbody>

                                {
                                    result.map(
                                        (value, index) => {
                                            return <tr>

<td>{value.title}</td>
                                                <td>{value.desc}</td>
                                                <td>{value.author}</td>
                                                <td>{value.pub}</td>
                                                <td>{value.pdate}</td>
                                                <td><button className="btn btn-danger" onClick={()=>{deletebooks(value._id)}}>DELETE</button></td>
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

export default SearchBooks