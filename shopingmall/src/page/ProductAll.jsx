import React, { useState } from 'react'
import {useEffect} from 'react'
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  const [productList, setproductList] = useState([]);

  const getProducts = async () => {
    // 모든 데이터를 가진 주소를 부른다.
    let url = "http://localhost:3004/products"
    // url fetch 해줘라
    let response = await fetch(url);
    // response에서 json을 뽑아와라
    let data = await response.json();
    console.log(data)
  }

  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div></div>
  )
}

export default ProductAll