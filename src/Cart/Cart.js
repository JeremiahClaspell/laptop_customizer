import React from 'react'; 
import CartItems from './CartItems/CartItems'; 
import Total from './Total/Total'; 


class Cart extends React.Component {

    render(){
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <CartItems selected={this.props.selected}/>
                <Total selected={this.props.selected}/>
            </section>
        )
    }
}

export default Cart; 


