import React,{useEffect} from 'react';
import Circleslayout from '../componets/CirclesLayout';
import { Link } from 'react-router-dom';
import useOpenProductPage from '../Hooks/useOpenProductPage';
import useGSAPbgc from '../Hooks/useGSAPbgc';

const BagPage = () => {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    useGSAPbgc('linear-gradient(240deg, rgba(145,91,96,1) 20%, rgba(205,88,19,1) 95%)')
    const click = useOpenProductPage()
    
    return (
        <>
         <Circleslayout />
        <div className='hero-section'>

            

            <div className='img-box'>
                <img className='hero-img' alt='' src='./images/frontpage-handbag.png'/>
            </div>
            <div className='hero-text'>
                <h1>Going places. With bags of beauty</h1>
                <p>On everyone's wish list this season? Timeless presents they'll treasure forever, including our must-have Leaishera handbag</p>
                <button onClick={click}  className='btn'>explore.</button>
                <Link  className='link-btn' to="/BootsPage" >
                    <img className='link-svg' alt='' src='./images/arrow.svg' />
                </Link>
            </div>
                
        </div>
        </>
    );
}

export default BagPage;
