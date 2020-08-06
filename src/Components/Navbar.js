import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div >
            <nav class="navbar navbar-expand-sm ">
                <button class="btn navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Orders <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Profile <span class="sr-only">(current)</span></a>
                    </li>
                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-danger my-2 my-md-0" type="submit">Search</button>
                    </form> */}
                </div>
                
            </nav>
            
        </div>
    )
}

export default Navbar
