import React from 'react';




class ItemCard extends React.Component {

 


    render() {
      console.log(this.props.product)
      return (
        <div className="ui column">
          <div className="ui card">
            
          </div> 

          
          <h1>{this.props.product.name} </h1>
          <div className="img">
            <img src={this.props.product.image}></img> 
          </div>
          <h2>${this.props.product.price}</h2>
          <br></br>
        </div>
      )
    }
  }

  export default ItemCard;