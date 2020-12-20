import React,{useState} from 'react';
import ins from '../imgs/insta.png';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './style.css';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';
function Instagram() {

    const [link, setlink] = useState('');
    const [isres, setisres] = useState(false);
    const [url, seturl] = useState('');

    const send = () => {
        if(link === '') {
            alert('Please Enter Valid URL')
        }
        else{
            Axios.get(`https://ig1903.herokuapp.com/video?url=${link}`).then(res => {
                if(res.data.video_link) {
                    console.log(res.data.video_link);
                    seturl(res.data.video_link);
                    setisres(true);

                }
                else{
                    alert('URL is not Valid :(')
                }
            })
        }
    }
    return (
        <>
<div className="mainbox">
     <div className="imgbx">
         <img src={ins} alt="picture" />
     </div>
     <div className="btnbox">
     <TextField id="outlined-basic" value={link} onChange={(e) => {setlink(e.target.value)}} label="Enter video URL" variant="outlined" />

         <button className="btns" onClick={send}>
         <ArrowDownwardIcon /><span> Get Video</span></button>
     </div>
{isres && <video height="300px" width="300px" controls={isres} src={url} />}
</div>
        </>
    )
}

export default Instagram;































