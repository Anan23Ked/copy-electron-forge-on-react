import React, { useState } from 'react';
// import ReactPlayer from 'react-player'
// import video from '../assets/Video/trail2AVI.avi'

const FileBrowser = () => {
  const [files, setFiles] = useState([]);

  const appendFile = (file) => {
    setFiles(prevFiles => [...prevFiles, file]);
  };

  const   handleFileOpen=(event)=>{
    const newFile = event.target.files[0]
    if(newFile){
      appendFile(newFile)
    }
  }

  const playVid=()=>{
    const vid = document.getElementById('myVid');
    vid.play()
  }
  const pauseVid=()=>{  
    const vid = document.getElementById('myVid');
    vid.pause()
  }

  return (
    <div>
      {/* <p>Fispuhdf</p> */}
      <input type ="file" onChange={handleFileOpen}/>

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>

      <button onClick={playVid} type = "button">Play</button>
      <button onClick={pauseVid} type = "button">Pause</button>

      {/* <video id="myVid">
        <source src = "src\assets\Video\Optrics-vid.mp4" type="video/mp4"></source>
      </video> */}
      {/* <ReactPlayer 
      url= '../assets/Video/trail2AVI.avi' 
      width="100%"
      
      height="100%"
      controls={true}
      /> */}

{/* <video src={video} width="800" height="400" controls /> */}

<video controls>
        <source src='../assets/Video/trail2AVI.avi'
 type="video/avi" />
        Your browser does not support the video tag.
      </video>
      
    </div>
  );
};

export default FileBrowser;