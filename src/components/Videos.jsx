const Videos = () => {
  return (
    <div className="container mt-5">
        {/* section 1  */}
        <h2 className="text-center mb-4">Agrocart Grocery</h2>
        <section className="row">
            {/* child 1 goes here (col-md-4) */}
            <div className="col-md-4 mb-4">
                <video className="w-100 rounded-1 shadow" style={{ height: "220px", objectFit: "cover"}} controls>
                    <source src="/videos/grocerystore.mp4" type="video/mp4" />
                </video>
                <h5 className="mt-2 text-center">Grocery Display</h5>
                <p className="text-center text-muted">We have a variety of Fruit at Agrocart, welcome to the Fruit world.</p>
            </div>
            {/* child 2 goes here (col-md-4) */}
            <div className="col-md-4 mb-4">
            <video className="w-100 rounded-1 shadow" style={{ height: "220px", objectFit: "cover"}} controls>
                    <source src="/videos/fruitsalad.mp4" type="video/mp4" />
                </video>
                <h5 className="mt-2 text-center">Fruit Salad</h5>
                <p className="text-center text-muted">We have Fruit Salad at your disposal, order yours today.</p>
            </div>
            {/* child 3 goes here (col-md-4) */}
            <div className="col-md-4 mb-4">
               
            </div>
        </section>
        {/* end of section 1  */}
        <hr className="my-5" />
        {/* section 2  */}
        {/* NB: You can copy paste section 1 and pasted it here  */}
    </div>
  )
}

export default Videos