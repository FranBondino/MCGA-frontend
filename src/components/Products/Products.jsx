import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/Products/thunk';

export default function App() {
  
  const dispatch = useDispatch();
  useEffect( ()=> {
    dispatch( getProducts() )
  }, []);
    
  const products = useSelector((state) => state.products.products)
  const isLoading = useSelector(state => state.products.loading);
  // const error = useSelector(state => state.products.error);

  return(
    <Fragment>
           <h2 className="text-center my-5">Listado de Productos</h2>

           { isLoading ? <p className="text-center">Cargando....</p> : null }

           <table className="table table-striped">
               <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Stock</th>
                    </tr>
               </thead>
               <tbody>
                  { products.length === 0 ? 'No hay productos' : (
                       products.map(producto => (
                        <tr key={producto._id}>
                          <td>
                              {producto.name} 
                          </td>
                          <td>
                              {producto.price} 
                          </td>
                          <td>
                              {producto.stock} 
                          </td>
                        </tr>
                       )) 
                   ) }
               </tbody>
           </table>
       </Fragment>
  )
}
