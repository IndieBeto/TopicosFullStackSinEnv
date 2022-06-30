import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./CrearProducto.css"
import AWN from 'awesome-notifications';
import '../../../../node_modules/awesome-notifications/dist/style.css'




const Index = () => {
  let globalOptions =  {
    position: "bottom-right"
  }
  let notifier = new AWN(globalOptions);

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState(1);
  const [imagen, setImagen] = useState('');
  const [precio, setPrecio] = useState('$');


  const clickz = () => {
    notifier.success("esdad")
  }
  
  const crearProducto = (event) => {
    event.preventDefault();
    const nuevoProducto = {
      nombre: nombre,
      descripcion: descripcion,
      stock: stock,
      imagen: imagen,
      precio: precio
    }
    axios.post('http://localhost:4040/api/productos', nuevoProducto)
      .then(response => {
        notifier.success('Producto creado correctamente.') 
        setNombre('');
        setDescripcion('');
        setImagen('');
        setPrecio('$');
        document.getElementById('file1').value = '';
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
      })
  }


  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const onInputChange = event => {
    const file = event.target.files[0];
    toBase64(file)
    .then(res => {
      setImagen(res);
    })    
  }
  return (
      <div className="row">
        <div className="col-lg-6">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Crear Producto
              </h6>
            </div>
            <div className="container p-4">
              <div className="d-flex flex-column justify-content-around align-items-center">
                <form id="upload_form" method="post">
                  <div className="form-group">
                    <input
                      className="form-control-file"
                      type="file"
                      name="file1"
                      id="file1"
                      onChange={(e) => onInputChange(e)}
                    ></input>
                    <h3 className="text-center" id="status"></h3>
                    <p id="loaded_n_total"></p>
                  </div>
                </form>
                <div className="subida-img">
                  <img className="img-fluid" src={imagen}>
                  </img>
                </div>
              </div>
              <form>
                <div className="form-group">
                  <label>Nombre del producto: {nombre}</label>
                  <input
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}                    
                    type="text"
                    className="form-control"
                    placeholder="Gameboy Color"
                  ></input>
                </div>
                <div className="form-group">
                  <label>Descripcion</label>
                  <textarea
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="form-control"
                    rows="8"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Precio</label>
                  <input
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    type="text"
                    className="form-control"                    
                  ></input>
                </div>
                <div className="form-group">
                  <label>Stock</label>
                  <input
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                    type="number"
                    className="form-control"                    
                  ></input>
                </div>
                <button onClick={(e) => crearProducto(e)} type="submit" className="btn btn-primary">
                  Crear
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
  );
};

export default Index;
