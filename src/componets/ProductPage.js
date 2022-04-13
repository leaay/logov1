import React,{useRef,useEffect} from 'react';
import gsap from 'gsap';
import productData from '../data/productsData';
import { Link } from 'react-router-dom';
import useCloseProductPage from '../Hooks/useCloseProductPage';


const ProductPage = () => {

    const page = useRef()
    const close = useCloseProductPage()

    useEffect(()=>{
        gsap.set(page.current,{y:1000,opacity:0})
        const tl = gsap.timeline({defaults:{duration:.75,ease:'power3.out'}})
        tl.to('div.hero-section',{opacity:0,display:'none',duration:.3})
        tl.fromTo(page.current,{y:1000,opacity:.8},{y:0,opacity:1})

    },[])

   

     const products = productData.map(item => (
        <Link className='product-item-link' onClick={close} key={item._id} to={`/products/${item._id}`}>
            <div className='product-item-box' >
                <img className='product-item-link-img' src={item.img} />
                <h4 className='product-item-link-name'>{item.name}</h4>
                <h4 className='product-item-link-price' > {item.price} €</h4>
            </div>
        </Link>

        ))

    return (
        <div ref={page} className='product-page'>
            <img onClick={close} className='product-page-close-btn' src='./images/close.svg' />
            <h1 className='product-page-title'>Shop our signatures.</h1>
            <h3 className='product-page-title2'>Your shortcut to sophstification. Our signatures never go out of style.</h3>
            <div className='products-wrapper'>
            {products}
            </div>
            
        </div>
    );
}

export default ProductPage;
