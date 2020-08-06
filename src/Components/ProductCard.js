import React from 'react'


function ProductCard({product}) {
    return (
        <div class="col-4">
            <div class="card" >
                <img class="card-img-top" src={product.product_image} alt="Card image cap"/>
                <div class="card-body">
                    <h3 class="card-title">{product.product_title}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
