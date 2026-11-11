import axios from "axios"
import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import Carousel from "./Carousel"

const Getproducts = () =>{
    // define 3 states for getting products 
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")

    let navigate = useNavigate();
    // fucntion to get products 
    const fetchallproducts = async() =>{
        setLoading("Fetching products...")
        try {
            const response = await axios.get("http://emmanuelmodcom.alwaysdata.net/getproducts")
            setProducts(response.data)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")
        }
    }

    // call the function 
    useEffect(()=>{
        fetchallproducts()
    }, [])
    console.log(products)
    const imagepath= "http://emmanuelmodcom.alwaysdata.net/static/images/"
    return(
        <div className="row">
            {/* carousel goes here  */}
            <Carousel/>
            <div className="container">
            <section className="row">
                <h1 className="text-center text-primary">Available products</h1>
                {products.map(singleproduct=>(
                    <div className="col-md-3 mb-2">
                        <div className="card shadow">
                            <img src={imagepath + singleproduct.product_photo} alt=""  height={300}/>
                            <div className="card-body text-center">
                                <h4>{singleproduct.product_name}</h4>
                                <p>{singleproduct.product_description}</p>
                                <span className="badge bg-dark">{singleproduct.product_category}</span><br />
                                <b className="text-primary">Ksh {singleproduct.product_cost}</b><br />
                                <button className="btn btn-primary w-100" onClick={() => navigate("/mpesapayment",{state:{singleproduct}})}>Purchase Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            </div>
        </div>
    )
}
export default Getproducts