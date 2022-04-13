import React,{useState} from 'react';
import { Link } from 'react-router-dom';

import productsData from '../data/productsData';

const Products = () => {

    const [category,setCategory] = useState('bags')
    const [showAll,setShowAll] = useState(true)
    const products = productsData.filter(item => item.category === category)
 
    
    const categoriesNames  = productsData.map(item => item.category)
    const uniqueArr = [...new Set(categoriesNames)];
    const links = uniqueArr.map(item => (
    <p key={item} style={category === item && !showAll ? {color:'#b39c42'} : null} className='category-cta' onClick={(e)=>{setCategory(item);setShowAll(false)}}>{item}</p>))

  
    return (
        <div className='products-container'>

            <div className='filter-box'>
               <div className='products-category-box'>
                    <p style={showAll ? {color: '#b39c42'} : null} className='category-cta' onClick={()=>setShowAll(true)}>show all</p>

                    {links}

               </div>
            </div>
            <div className='product-wrapper-flexible'>
                    

                {
                showAll ? 
                productsData.map(item => 
                    <Link className='product-item-link2'  key={item._id} to={`/products/${item._id}`}>
                        <div className=''>
                        <img alt='' className='product-item-link-img' src={item.img} />
                        <h4 className='product-item-link-name'>{item.name}</h4>
                            <h4 className='product-item-link-price' > {item.price} €</h4>
                        </div>
                    </Link> )
                    :
                    products.map(item => 
                        <Link className='product-item-link2'  key={item._id} to={`/products/${item._id}`}>
                            <div className=''>
                            <img alt='' className='product-item-link-img' src={item.img} />
                            <h4 className='product-item-link-name'>{item.name}</h4>
                                <h4 className='product-item-link-price' > {item.price} €</h4>
                            </div>
                        </Link> 
                        )
                
                
             
                }

            </div>
            
        </div>
    )
}

export default Products;
