import React from 'react'
import './product.css'
import { Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}
