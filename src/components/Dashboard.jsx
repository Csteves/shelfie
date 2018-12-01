import React, { Component } from 'react';
import Product from './Product'
import axios from 'axios'


export default class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      productList:[]
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    axios.get(`/api/products`)
    .then(res => {
        console.log(res.data);
        this.setState({
            productList: res.data
        })
    })

  }
  handleDelete(id){
    axios.delete(`/api/products/${id}`)
    .then(res =>{
        console.log(res.data);
        this.setState({
            productList:res.data
        })
    })
}
  render() {
    const {productList} = this.state;
    const product = productList.map(item => {
        return(
          <Product
            key={item.product_id}
            itemName={item.name}
            itemUrl={item.image_url}
            itemPrice={item.price}
            itemId={item.product_id}
            handleDelete={this.handleDelete}
            item={item}
            />
        )
    })
    return (
        <div>
          {product}
        </div>


    )
  }
}