
import Navbar from '../components/Navbar'
import Defects from '../components/Defects';
// import FileBrowser from './components/FileBrowser';
import Params from '../components/Params';
import TempColMap from '../components/TempColMap';
import Table from '../components/Table';
import Saved from '../components/Saved';
// import Footer from '../components/Footer';
import Video from '../components/Video';
import LineGraph from '../components/LineGraph';
import '../App.css';

const Layout =()=>{
    return(
        <div>
            <Navbar />
            {/* <Defects />
            <Params />
            <TempColMap/>
            <Table  />
            <Saved />
            <Footer/>
            <Video /> */}

   
            <div className='wrapper display'>
                <div className='display-defects-param'>
                    <div className='display-info flex-col'>
                        <div className='display-defects'><Defects /></div>
                        <div className='display-params'><Params /></div>
                    </div>
                    
                </div>
                {/* <div className='display-video'><Video /></div> 
                <div className='display-st'>
                    <div className='flex tempmap'>
                    <span className="flex left temp-scale">
                            <TempColMap />
                        </span>
                        
                        <span className="flex justify-center ds">
                            <Saved />
                        </span>
                    </div>
                  
                </div> */}


                <div className=' display-video'>
                    <div className='flex play-thermal-vid'>
                        <spam className="flex right vid-play">
                            <Video />
                        </spam>
                        <span className="ml-5 flex left temp-scale">
                            <TempColMap />
                        </span>
                    </div>
                  
                </div> 
                <div className='display-saved'><Saved /></div>
            </div>
            {/* <div className="wrapper dt"> */}
            <div className='flex display-table'>
                <spam className=" mr-5 flex-right t1">
                <Table />
                </spam>
                <spam className="mr-5 flex-left t2">
                <LineGraph />
                </spam>
            </div>
            {/* </div> */}
            
            
            
        </div>
    )
}
export default Layout