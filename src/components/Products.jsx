import './Products.css'
import { AddToCartIcon } from './Icons.jsx'

export function Products({ products, addToCart }) {
    return (
        <main className='products'>
            <ul>
            {products.slice(0,10).map(product => (
                <li className='product' key={product.id}>
                    <img className='product-image' src={product.thumbnail} />
                    <h3 className='product-name'>{product.title} - ${product.price}</h3>
                    {/* <p className='product-price'></p> */}
                    <button className='product-add-to-cart' onClick={() => addToCart(product)}>
                        <AddToCartIcon />
                    </button>
                </li>
            ))}
            </ul>
        </main>
    )
}