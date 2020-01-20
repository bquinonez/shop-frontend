import React from 'react';
import ItemCard from './ItemCard.js';



class Items extends React.Component {
    renderProducts = () => {
      return this.props.products.map(product => <ItemCard product={product} key={product.id} />)
    }
    render() {
      // console.log(this.props.products)

      return (
        <div>
        {/* {productComponents} */}
        <h1>Products</h1>
        {this.renderProducts()}
        
        </div>
      )
  }
}

export default Items;

