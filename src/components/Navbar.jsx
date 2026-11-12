import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary mb-1 sticky-top">
  <div class="container-fluid">
    <Link class="navbar-brand" href="/">
    <b>Fruitcart</b><img src="/images/brand.png" alt="" width={100} />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link text-white active" aria-current="page" href="/">Home</Link>
        <Link class="nav-link text-white" href="/addproduct">Add Products</Link>
        <Link class="nav-link text-white" href="/signin">Signin</Link>
        <Link class="nav-link text-white" href="/signup">Signup</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar