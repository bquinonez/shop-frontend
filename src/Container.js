import React from 'react';
import Items from './Items.js';
import Cart from './Cart.js';



class Container extends React.Component {

  state = {
    products: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/items")
    .then(res => res.json())
    .then(products => this.setState({products: products})
    )}


    render() {
    // console.log(this.state.products)
      return(
        <div>
          <Items products={this.state.products} />
        </div>
      )
    }
  }

  export default Container;


