
import {useContext} from 'react';
import gsap from 'gsap';
import { Context } from '../context/ContextProvider';

const useCloseProductPage = () => {

        const {setProductPage} = useContext(Context)

        return ()=>{

            const tl = gsap.timeline({defaults:{duration:.3,ease:'power3.out'}})
            tl.to('div.product-page',{y:1000,opacity:.8,onComplete:(()=>{
                setProductPage(false)
            })})
            tl.to('div.hero-section',{display:'flex' , opacity: 1,duration:.6})

        }
  


}

export default  useCloseProductPage;
