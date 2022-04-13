import React from 'react';
import { Route,Routes,useLocation} from "react-router-dom"
import BagPage from '../pages/BagPage';
import HatPage from '../pages/HatPage'
import gsap from 'gsap'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import BootsPage from '../pages/BootsPage'
import Product from '../pages/Product';
import Products from '../pages/Products';
import Cart from '../pages/Cart';



const RoutesComponent = () => {

    const location = useLocation()
 

    const  onEnter = node => {
        console.log(node.children)
        const tl = gsap.timeline({default:{duration:1,ease:'power3.out'}})
        tl.fromTo('div.header',{opacity:0,x:10},{opacity:1,x:0,delay:.1})
        tl.fromTo('div.hero-section',{opacity:0},{opacity:1})
        tl.fromTo('img.circle1',{y:-60,x:-15},{y:0,x:0,duration:1},'<')
        tl.fromTo('img.circle3',{y:60},{y:0,duration:1},'<')
        // tl.fromTo([node.children[0],node.children[2]],{y:-50},{y:0},'<')
        tl.fromTo('img.circle2',{y:-50},{y:0},'<20%')
    }

    // const  onExit = node => {
    //     const tl = gsap.timeline({default:{duration:2,ease:'power3.out'}})
    //     // tl.fromTo(node,{x:0},{x:-100})
    //     tl.fromTo(node,{opacity:1},{opacity:0})
    // }

    return (
        <TransitionGroup component={null} >
                <CSSTransition
                key={location.pathname}
                timeout={0}
                
                classNames='hero-section'
                onEnter={onEnter}
                // onExit={onExit}
        
                >
                    <Routes location={location}>
                        <Route path='/'  exact element={<BagPage/>} />
                        <Route path='/BootsPage'  element={<BootsPage />} />
                        <Route path='/HatPage'  element={<HatPage />} />
                        <Route path='/Cart'  element={<Cart />} />
                        <Route path='/products'  element={<Products />} />
                        <Route path='/products/:id' element={<Product />} />
                    </Routes>

            </CSSTransition>
        </TransitionGroup>
  
    );
}

export default RoutesComponent;
