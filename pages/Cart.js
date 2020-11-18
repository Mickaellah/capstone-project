import React, { useContext } from 'react';
import {myContext} from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
	const {cartItems} = useContext(myContext);
	const cartItemElement = cartItems.map(item => (
		<CartItem key={item.id} item={item} />
	));

	const totalCost = (cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})
	return (
		<main className="cart-page">
			<h1>Check out</h1>
			{cartItemElement}
				<p className="total-cost">Total: {totalCost}</p>
			<div className="order-button">
				<button>
					Place order
				</button>
			</div>
		</main>
	);
}

export default Cart;
