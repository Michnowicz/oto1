import { useEffect, useState } from "react"
import axios from 'axios'
import "./Home.css"
import { Link } from "react-router-dom"

export default function Home() {

    const [data, setData] = useState([])
    const [presidents, setPresidents] = useState([])
    const [countries, setCountries] = useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const response = await axios.get("http://localhost:8000/api");
        setData(response.data.data);
        setPresidents(response.data.data.presidents)
        setCountries(response.data.data.countries)
        console.log(response.data.data);
    }

    return(
        <section className="Home">
            <div className="container">
                <div className="btnDiv">
                    <button className="btn b_c"> <Link to={`/create/president`}>New President</Link></button>
                    <button className="btn b_c"> <Link to={`/create/country`}>New Countries</Link></button>
                </div>
                <div className="datas">
                    { data ?
                        presidents.map((p,i)=>(
                            <div className="data" key={i}>
                                <p><b>firstname : </b>{p.firstname}</p>
                                <p><b>lastname : </b>{p.surname}</p>
                                <p><b>country : </b>{countries[p.id-1].name}</p>
                            </div>
                        ))
                        :
                        <></>
                    }
                </div>
            </div>
        </section>
    )
}