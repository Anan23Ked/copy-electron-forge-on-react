import Layout from "./layout/Layout";
// import {channels } from '../preload/preload'
const {ipcRenderer} = require('electron')

function App() {
  
//   const getData = ()=>{
//     ipcRenderer.send(channels.GET_DATA, {product:'linegraph'})
// }
const fun =()=>{
  window.api.receive("fromMain", (data)=>{
    console.log(`Received ${data} from main process`)
  })
  window.api.send("toMain", "some data")

}

  return (  
    <div className="App">
      
    {/* <button onClick={()=>{
         ipcRenderer.send('msg', 'ping')
         }}>Com</button> */}
        <button onClick = {fun}>Click maaduu</button>
     with electron forge- copy main 
     
    
      <Layout />
     
     
    </div>
  );
}

export default App;
