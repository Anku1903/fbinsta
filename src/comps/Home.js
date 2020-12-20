import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import home from '../imgs/home.png';
import { useHistory } from 'react-router-dom';
import './style.css';
function Home() {
    const history = useHistory();
    return (
        <>
<div className="mainbox">
     <div className="imgbx">
         <img src={home} alt="picture" />
     </div>
     <div className="btnbox">
         <button className="btns" onClick={() => {history.push('/insta')}}><InstagramIcon /><span> Download Instagram Video</span></button>
         
         
         <button className="btns" onClick={() => {history.push('/youtube')}}><FacebookIcon /><span> Download Youtube Video</span></button>
     </div>
</div>

        </>
    )
}

export default Home
