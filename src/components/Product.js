import React  from 'react';
import './Product.css'
 export default function(props){
    return (
            <div className='product_container' >
            <div className='img_box' >
                <img src={props.itemUrl} />
            </div>
            <div className='info_container'>

                <div className="item_labels" >
                    <h6>{props.itemName}</h6>
                    <h6>{props.itemPrice}</h6>
                </div>

                <div className="item_button_toolbar">
                    <button
                    onClick={()=> props.handleDelete(props.itemId)}
                    >Delete</button>
                    <button>Edit</button>
                </div>
            </div>

            </div>
    )

}