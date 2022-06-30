import "./ListadoProducto.css";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AWN from 'awesome-notifications';
import '../../../../node_modules/awesome-notifications/dist/style.css'

import {
    faCartShopping,
    faTachometerFast,
    faWrench,
    faCross
} from "@fortawesome/free-solid-svg-icons";


const ListadoProductos = () => {
    let globalOptions =  {
        position: "bottom-right"
      }
      let notifier = new AWN(globalOptions);

    let [productos, setProductos] = useState([]);

    useEffect(() => {
        // call api or anything
        GetProductos();
    }, []);

    const BorrarProducto = (producto) => {
        productos.length = 0;
        console.log(producto._id);
        axios.delete(`http://localhost:4040/api/productos/${producto._id}`)
            .then(response => {
                GetProductos();
                notifier.success("Producto borrado exitosamente");
            })
            .catch(error => {
                console.log(error);
            })

    }


    const GetProductos = () => {
        axios.get('http://localhost:4040/api/productos')
            .then(response => {
                setProductos(productos.concat(response.data));
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {

            })
    }
    return (
        <div >
            <h1>Tus Productos</h1>
            <div id="app" className="table-editable">
                <span className="table-add float-right mb-3 mr-2 hola">
                </span>
                <div v-if="donations.items != null" className="table-responsive">
                    <table className="table table-bordered table-striped text-center">
                        <thead>
                            <tr>
                                <th className="text-center">Nombre</th>
                                <th className="text-center">Fecha Adicion</th>
                                <th className="text-center">Stock</th>
                                <th className="text-center">Precio</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productos.map((producto) => {
                                    return (
                                        <tr key={producto._id}>
                                            <td className="pt-3-half" > {producto.nombre} </td>
                                            <td className="pt-3-half">{producto.descripcion} </td>
                                            <td className="pt-3-half"> {producto.stock}</td>
                                            <td className="pt-3-half"> {producto.precio}</td>

                                            <td className="pt-3-half">
                                                
                                                    <p className="btn btn-danger" onClick={(e) => BorrarProducto(producto)}>
                                                        <FontAwesomeIcon className="fas fa-fw mr-2" icon={faCross} />
                                                      Borrar</p>
                                            </td>
                                        </tr>

                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListadoProductos;
