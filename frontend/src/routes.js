import React from 'react'

const Productos = React.lazy(() => import('./pages/admin/productos/CrearProducto'))
const ListadoProductos = React.lazy(() => import('./pages/admin/productos/ListadoProducto'))



const routes = [
    { path: '/dashboard', name: 'Dashboard', element: Productos },
    { path: '/productos', name: 'List', element: ListadoProductos },
]

export default routes
