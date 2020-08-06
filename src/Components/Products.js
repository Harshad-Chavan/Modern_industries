import React from 'react'
import oxygen from '../images/oxygen.png'
import firstaidkit from '../images/firstaidkit.png'
import gas from '../images/gas.png'
import Chemistry from '../images/chemistry.png'

import './Products.css'
import ProductCard from './ProductCard'

function Products() {

    const productslist = [
        { id:1, product_title:"Medical Oxygen",product_image:oxygen,},
        { id:2, product_title:"Medical kit o2",product_image:firstaidkit},
        { id:3, product_title:"Industrial Gases",product_image:gas},
        { id:4, product_title:"Chemicals",product_image:Chemistry},
        { id:5, product_title:"Medical kit o2",product_image:oxygen},
        { id:6, product_title:"Medical kit o2",product_image:oxygen},
        { id:7, product_title:"Medical kit o2",product_image:oxygen},
    ]

    const getproduct = productslist.map( product => <ProductCard  key={ product.id} product={product}></ProductCard>)

    return (
        <div class="container">
            <div class = 'row'>
                {getproduct}
            </div> 
        </div>
    )
}

export default Products
