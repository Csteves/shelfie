import React, { Component } from 'react';
import axios from 'axios';
import './Form.css'
export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      productList : [],
      name:'',
      price: '',
      image_url:""
    }
    this.saveCreate = this.saveCreate.bind(this);

    this.handleInputs = this.handleInputs.bind(this);
    this.verifyInput = this.verifyInput.bind(this);
  }

  handleInputs(e){
    const{name,value} = e.target;
    this.setState({
      [name]:value, [name]:value,[name]:value
    })
  }
  verifyInput(){
    const {name,price,image_url} = this.state;
    if(name.length >= 2 && image_url.length >= 2){
      this.handleCreate()
    }else{
      this.setState({
        name:'',
        price:0,
        image_url:""
      })
    }
  }

  handleCancel(){
    this.setState({
      name:'',
      price:'',
      image_url:''
    })
    this.forceUpdate();
  }
  handleCreate(){
    const newItem = {
      name:this.state.name,
      price: this.state.price,
      image_url: this.state.image_url
  }
    this.saveCreate(newItem);
    this.setState({
      name:'',
      price:'',
      image_url:''
    })
  }

  saveCreate(obj){
  axios.post(`/api/products`,{obj})
    .then(res => {
        console.log(res.data)
        this.setState({
            productList:res.data
        })
    })
  }
  render() {

    return (
      <div className="main_container">
        <div className="image_container" >
        <img src={this.state.imageUrl} alt=""/>
        </div>
        <div className="input_container">
            <h6>ImageUrl:</h6>
            <input
            type="text"
            name='image_url'
            value={this.state.imageUrl}
            onChange={(e) => this.handleInputs(e)}
            />
            <h6>Product Name:</h6>
            <input
            type="text"
            name='name'
            value={this.state.productName}
            onChange={(e) => this.handleInputs(e)}
            />
            <h6>Price:</h6>
            <input
            type="text"
            name='price'
            value={this.state.productPrice}
            onChange={(e) => this.handleInputs(e)}
            />
        </div>

        <div className="button_toolbar">
            <button
            onClick={() => this.handleCancel()}
            >
            cancel
            </button>

            <button
            onClick={() => this.verifyInput()}
            >
            Add to Inventory
            </button>
        </div>
      </div>
    )
  }
}