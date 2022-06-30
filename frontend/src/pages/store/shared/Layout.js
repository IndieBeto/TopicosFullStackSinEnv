import "./Layout.css"
import ProductoItem from '../components/ProductoItem';
import Footer from '../components/Footer';
import React, { useState, useEffect } from "react";
import axios from "axios";

const Layout = () => {
    let [productos, setProductos] = useState([]);

    useEffect(() => {
        GetProductos();
    }, []);


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
        <div>
            <section className="navcontainer">
                <header style={{ background: "url('/images/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg') no-repeat 50% 50%" }}>
                    <nav className="stroke">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a>Productos</a></li>
                            <li><a>Contacto</a></li>
                        </ul>
                    </nav>
                </header>
            </section>

            <section className="quienes-somos container-fluid" id="productos">
                <div className="container text-center mb-3">
                    <h1>¿QUÉ ES <b className="font-bold">RETRO SHOP?</b></h1>
                    <p>
                        Vendemos productos retro de calidad. Reacondicionamos consolas y las devolvemos a su estado original. ¡Tenemos kits para que las reacondiciones tu mismo!
                    </p>
                    <div className="row">
                        {
                            productos.map((producto) => {
                                return (
                                    <ProductoItem key={producto._id} producto={producto}></ProductoItem>
 
                                );
                            })
                        }


                    </div>
                </div>
            </section>
            <Footer></Footer>
            
 
        </div >



    );
}
export default Layout;
