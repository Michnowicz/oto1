import { useEffect, useState } from "react"
import axios from 'axios'
import "./CreateCountry.css"
import { Link } from "react-router-dom"

export default function CreateCountry() {

    const [name, setName] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        createCountry(); 
    };

    const createCountry = async()=>{
        try {
            await axios.post('http://127.0.0.1:8000/api/create/country', {
                name: name
            } )
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }




    return(
        <section className="Home">
            <div className="container">
                <div className="btnDiv">
                    <button className="btn b_c"> <Link to={`/`}>Home</Link></button>
                </div>
                <div className="formDiv">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name : </label>
                        <input type="text" name="name" id="name_id" value={name} onChange={e => setName(e.target.value)}/>
                        <div>
                            <button type="submit"> submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}