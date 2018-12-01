import React, { Component } from 'react';
import Dashboard from './components/Dashboard.jsx';
// import Form from './components/Form.jsx';
import Header from './components/Header.js';
import axios from 'axios'
import './App.css'
import Routes from './routes'


class App extends Component {

  render() {
    return (
      <div className="main">
        <div className="header_container">
            <Header/>
        </div>
        <div className='body_container' >

        {/* // <div className="form_container">
        //       <Form
        //       saveCreate={this.saveCreate}
        //       handleInputs={this.handleInputs}
        //       handleCancel={this.handleCancel}
        //       verifyInput={this.verifyInput}
        //       imageUrl={this.state.image_url}
        //       productName={this.state.name}
        //       productPrice={this.state.price}
        //       />
        // </div>

        // <div className="dashboard_container" >
        //   <Dashboard
        //   productList={this.state.productList}
        //   handleDelete={this.handleDelete}
        //   />
        // </div> */}


        </div>
        {Routes}
      </div>
    );
  }
}

export default App;
