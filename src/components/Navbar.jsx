import React from 'react'


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-primary mb-1 sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><b>AgroCart</b><img src="/images/brand.png" alt="" width={100} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link text-white active" aria-current="page" href="/">Home</a>
        <a class="nav-link text-white" href="/addproduct">Add Products</a>
        <a class="nav-link text-white" href="/signin">Signin</a>
        <a class="nav-link text-white" href="/signup">Signup</a>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar