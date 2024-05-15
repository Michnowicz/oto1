import { useEffect, useState } from "react"
import axios from 'axios'
import "./CreatePresident.css"
import { Link } from "react-router-dom"

export default function CreatePresident() {

    const[president, setPresident] = useState({
        firstname : "",
        surname : "",
    })

    const [country, setCountry] = useState("")

    const createPresident = async()=>{
        try {
            await axios.post('http://127.0.0.1:8000/api/create/president' , {
                president: president,
                country : {name: country}
            })
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "firstname" || name ==="surname") {
            setPresident({...president, [name]: value })
        } else {
            // setCountry({...country, [name]: value })
            setCountry(value)
        }
            
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPresident()
    }

    console.log(president.firstname+"\n"+president.surname+"\n"+country);


    return(
        <section className="Home">
            <div className="container">
                <div className="btnDiv">
                    <button className="btn b_c"> <Link to={`/`}>Home</Link></button>
                </div>
                <div className="formDiv">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="firstname">Firstname </label>
                            <input type="text" name="firstname" id="firstname_id" value={president.firstname} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="surname">Lastname </label>
                            <input type="text" name="surname" id="surname_id" value={president.surname} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="country">Country </label>
                            <input type="text" name="country" id="country_id" value={country} onChange={handleChange}/>
                        </div>
                        <div>
                            <button type="submit"> ADD </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}