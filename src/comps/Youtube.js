import React, { useState } from 'react'
import you from '../imgs/youtube.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './style.css';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
function Youtube() {
    const [link, setlink] = useState('');
    const [show, setshow] = useState(false);
    const [url, seturl] = useState('');

    const send = () => {
        if (link === '') {
            alert('Please Enter Valid URL')
        }
        else{
            console.log('sending ....')
            Axios.post('https://ig1903.herokuapp.com/facebook',{url: link}).then(res => {
               if(res.data.url) {
                seturl(res.data.url);
                setshow(true);
               }
               else{
                   alert('please enter valid url of facebook video');
               }
            })

        }
    }
    return (
        <>
            <div className="mainbox">
                <div className="imgbx">
                    <img src={you} alt="picture" />
                </div>
                <div className="btnbox">
                    <TextField id="outlined-basic" value={link} onChange={(e) => { setlink(e.target.value) }} label="Enter video URL" variant="outlined" />

                    <button className="btns" onClick={send}>
                        <ArrowDownwardIcon /><span> Get Video</span></button>
                </div>
                {show && <video height="300px" width="300px" controls={show} src={url} />}
            </div>
        </>
    )
}

export default Youtube













