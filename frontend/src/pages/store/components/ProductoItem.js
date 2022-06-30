import React from 'react'
import './ProductoItem.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faTachometerFast,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";


const ProductoItem = ({ producto }) => {
    return ( 
    <div className="cardcontainer">
        <div className="photo">
            <img src={producto.imagen}></img> 
        </div>
        <div className="content">
            <p className="txt4 p-2">{producto.nombre}</p>
            <p className="txt2"></p>
            <p className="txt2">{producto.descripcion}</p>
        </div>
        <div className="footer d-flex justify-content-around align-items-center">
            <p className="btn lead price-tag btn-outline-secondary">{producto.precio}</p>
            <p className="btn btn-danger">           <i>
              {" "}
              <FontAwesomeIcon className="fas fa-fw mr-2" icon={faCartShopping} />
            </i>Comprar</p>
        </div>
    </div>

    )
}

export default ProductoItem

