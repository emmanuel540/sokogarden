import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5'>
        <section className="row bg-primary text-light p-4">
            <div className="col-md-4">
                <h2 className='text-dark'>About Us</h2>
                <p>At Fruitcart, we believe healthy living begins with fresh choices. We are passionate about bringing nature's goodness closer to you through a wide selection of fresh, delicious and nutritious fruits. Shop with us and enjoy freshness in every bite!</p>
            </div>
            <div className="col-md-4">
                <h2 className='text-dark'>Contact Us</h2>
                <input type="email" className="form-control"  placeholder='Enter your email'/><br />
                <textarea name="" id="" className="form-control" placeholder='Leave a message'></textarea><br />
                <button className="btn btn-dark w-100">Send Message</button>
            </div>
            <div className="col-md-4">
                <h2 className='text-dark'>Stay Connected</h2>
                <a href="https://facebook.com">
                    <img src="/images/facebook.svg" alt="fb" width="100" className='m-2'/>
                </a>
                <a href="https://instagram.com">
                    <img src="/images/instagram.svg" alt="ig" width="100" className='m-2' />
                </a>
                <a href="https://x.com">
                    <img src="/images/twitter-x.svg" alt="x" width="100" className='m-2' />
                </a>
            </div>
        </section>
        <footer className='bg-dark p-3 text-center text-light'>
            <b>Developed by E.H.K 2026</b>
        </footer>
    </div>
  )
}

export default Footer