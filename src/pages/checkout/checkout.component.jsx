import React from 'react';
import './checkout.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selectors'

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Qunatity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(
                cartItems => <CheckoutItem key={cartItems.id} cartItem={cartItems} />
            )
        }
        <div className='total'>
            <span>TOTAL: $ {total} </span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);

