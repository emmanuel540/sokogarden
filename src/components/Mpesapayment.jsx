import axios from "axios"
import React, { useState } from "react"
import { useLocation} from "react-router-dom"

const Mpesapayment = ()=>{
    const {singleproduct} = useLocation().state || {}
    const imagepath= "http://emmanuelmodcom.alwaysdata.net/static/images/"

    // declare 3 states for posting data 
    const [loading, setLoading] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

    const [phone, setPhone] = useState("")

    // function for mpesa payment 
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setLoading("Please wait....")
        // create empty digital envelope 
        const envelope = new FormData()

        envelope.append("phone", phone)
        envelope.append("amount", singleproduct.product_cost)
        try {
            const response = await axios.post("http://emmanuelmodcom.alwaysdata.net/mpesa_payment", envelope) 
            setSuccess(response.data.message)
            setLoading("")
        } catch (error) {
            setError(error.message)
            setLoading("")            
        }
    }

    return(
        <div className="container m-5">
            <section className="justify-content-center row">
                <div className="col-md-6 p-4 card shadow">
                <img src={imagepath + singleproduct.product_photo} alt=""  height={300}/>
                    <b>{singleproduct.product_name}</b>
                    <p>{singleproduct.product_description}</p>
                    <b className="text-warning">Ksh {singleproduct.product_cost}</b>
                    <span className="badge w-100 bg-success text-light">{singleproduct.product_category}</span> <br />
                    {/* bind the states here  */}
                    <h1 className="text-warning">{loading}</h1>
                    <h1 className="text-success">{success}</h1>
                    <h1 className="text-danger">{error}</h1>
                    <form action="" onSubmit={handleSubmit}>
                    <input type="phone" required placeholder="Enter phone 254XXXXXXXXX" onChange={(e)=>setPhone(e.target.value)} className="form-control"/> <br />
                    <button type="submit" className="btn btn-primary text-dark w-100">Make Payment</button>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Mpesapayment