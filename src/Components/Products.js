import React from 'react'
import oxygen from '../oxygen.png'
import firstaidkit from '../firstaidkit.png'
import './Products.css'

function Products() {
    return (
        <div class="container ">
            <div class = 'row'>
                <div class="col-lg">
                    <div class="card" >
                        <img class="card-img-top" src={oxygen} alt="Card image cap"/>
                        <div class="card-body">
                            <h3 class="card-title">Medical Oxygen</h3>
                            
                        </div>
                    </div>
                </div>
                <div class="col-lg">
                    <div class="card" >
                        
                        <img class="card-img-top" src={firstaidkit} alt="Card image cap"/>
                        <div class="card-body">
                            <h3 class="card-title">Medical O2 kit</h3>
                            <a href="#" class="btn btn-lg">Refill</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg">
                    <div class="card" >
                        <img class="card-img-top" src={oxygen} alt="Card image cap"/>
                        <div class="card-body">
                            <h3 class="card-title">Medical Oxygen</h3>
                            
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Products
