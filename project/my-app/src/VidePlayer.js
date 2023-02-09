import React, {useState, useEffect} from 'react'
 import ReactPlayer from 'react-player/youtube'
 import Button from './components/Button'
const VidePlayer = (props) => {
    const [videourl, setVideoUrl] = useState('https://www.youtube.com/watch?v=ysz5S6PUM-U');
    const [showDiv, setShowDiv] = useState(false);
    console.log(showDiv);
let Array = [
    'https://youtu.be/kffacxfA7G4',
     'https://youtu.be/prmmCg5bKxA',
    'https://youtu.be/CHVhwcOg6y8',
    'https://youtu.be/bwmSjveL3Lc',
    'https://youtu.be/2S24-y0Ij3Y',
    'https://youtu.be/t5Sd5c4o9UM',
    'https://youtu.be/34Na4j8AVgA',
    'https://youtu.be/yzTuBuRdAyA',
    'https://youtu.be/oAVhUAaVCVQ',
    'https://youtu.be/hJBHSmyqv0Y',
    'https://youtu.be/Pkh8UtuejGw',
    'https://youtu.be/3AtDnEC4zak',
    'https://youtu.be/jZyAB2KFDls',
    'https://youtu.be/PT2_F-1esPk',
    'https://youtu.be/2mDCVzruYzQ',
    'https://youtu.be/0WtRNGubWGA'

]

const videoId = props.videoId;
const thumbnailSize = 'mqdefault';

    return(
        <>
         <div>
            
         <ReactPlayer
         width="100%"
         height="550px"
         url={videourl} />
         </div>
         <div className='w-100 ' style ={{ height: "100px", width: "1000px"}}   onMouseEnter={() => setShowDiv(true)}
      onMouseLeave={() => setShowDiv(false)}>
      {  showDiv && 
         <div   
          
       className='d-flex overflow-auto ' 
        style={ {  
            overflowX: "auto",
            whiteSpace: "nowrap"
            }}>
   { Array && Array.map((item) => {
     const videoId =item.split("/").pop();
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${thumbnailSize}.jpg`;
   
    return(
    <><Button
            onClick={() => {
                setVideoUrl(item);
            } }

            thumbnailUrl={thumbnailUrl} />
            </>

    )
   })}


            </div>}
         </div>
            </>
    )
}
export default VidePlayer

