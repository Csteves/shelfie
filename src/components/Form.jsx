import React, { Component } from 'react';
import axios from 'axios';
import {Link,Route} from 'react-router-dom';
import './Form.css';
import queryString from 'query-string';
import Dashboard from './Dashboard'

export default class Form extends Component {
  constructor(){
    super()
    this.state = {
      productList : [],
      name:'',
      price: 0,
      image_url:"",
      isEditing:false,
      currentId:null

    }
    this.saveCreate = this.saveCreate.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
    this.verifyInput = this.verifyInput.bind(this);
  }

  componentDidMount(){
  const {id} = this.props.match.params;
  if(id){
   axios.get(`/api/products/${id}`)
   .then(res => {
     const {name,price,image_url} = res.data[0];
     this.setState({
       name:name,
      price:price,
      image_url:image_url
    })
   })
  }
}

  componentDidUpdate(prevProps,){
    const {id} = this.props.match.params;
    if(this.state.currentId !== prevProps.match.params.id){
        this.setState({
              isEditing:!this.state.isEditing,
              currentId:id,
        })
      }
  }

  handleInputs(e){
    const{name,value} = e.target;
    this.setState({
      [name]:value, [name]:value,[name]:value
    })
  }
  verifyInput(){
    const {name,image_url} = this.state;
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
      price:0,
      image_url:''
    })
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
      price:0,
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

  saveUpdate(){
    const {id} = this.props.match.params
    const {name,price,image_url} = this.state;
    const updated = {
      name:name,
      price:price,
      image_url:image_url
    }
    axios.put(`/api/products/${id}`,{updated})
    .then(res => {
        console.log(res.data)
        this.setState({
           name:'',
           price:0,
           image_url:'',
        })
    })

}

  render() {
     const condButton = this.state.isEditing
                      ?   <button
                          onClick={() => this.saveUpdate()}
                          >
                          save edit
                          </button>
                      : <button
                        onClick={() => this.verifyInput()}
                        >add to inventory</button>;
    return (
      <div className="main_container">
        <div className="image_container" >
        <img src={this.state.image_url} alt=""/>
        </div>
        <div className="input_container">
            <h6>ImageUrl:</h6>
            <input
            type="text"
            name='image_url'
            defaultValue={this.state.image_url}
            onChange={(e) => this.handleInputs(e)}
            />
            <h6>Product Name:</h6>
            <input
            type="text"
            name='name'
            defaultValue={this.state.name}
            onChange={(e) => this.handleInputs(e)}
            />
            <h6>Price:</h6>
            <input
            type="text"
            name='price'
            defaultValue={this.state.price}
            onChange={(e) => this.handleInputs(e)}
            />
        </div>

        <div className="button_toolbar">
            <Link to='/'>
              <button
              onClick={() => this.handleCancel()}
              >
              cancel
              </button>
            </Link>
            {condButton}

        </div>
      </div>
    )
  }
}