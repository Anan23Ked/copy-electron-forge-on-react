
import { ReactComponent as Temp} from '../assets/icons/Vector-DegreeCelcius.svg'
import AddIcon from '@mui/icons-material/Add';

import '../App.css'



const Params = ()=>{
    const parameters =  [
        {
        name: "User Defined Area",
        val: "973.86" ,
        unit : <Temp />
    },
    {
        name: "Hotspot Area",
        val:"1766.45",
        unit : <Temp />
    }
]
    return(
        // <div className = 'flex-col container Params'>
        //     <div>
        //     <button className='Plusbtn'><Plus/></button>
        //     </div>
        //     <div className="flex-col container ">
        //         <div className='container '>
        //            {parameters.map(x=>(
        //             // 
        //             <div className="container param-box" key ={x.name}>
        //                 {x.name}
        //                 <div className='flex-container data'>
        //                     <span className ="ml-1 flex-item-left">{x.val}</span>
        //                     <span className ="ml-1 flex-item-right">℃</span>
        //                 </div>
        //                 {/* <div className='data'>
        //                     <span className ="text">{x.val}</span>
        //                     <span className ="icon">{x.unit}</span>
        //                 </div> */}
                        
        //             </div>   
        //            ))}
        //         </div>
                
        //     </div>
        // </div>

        <div className="flex-col container Params">
    <div className="flex justify-centre mt-8">
        <button className=" flex-row Plusbtn">
            {/* <span className="container"><Plus/></span> */}
            <span className="ml-2 flex-item-left">New Area <AddIcon></AddIcon></span>
            </button>
        
    </div>
    
    <div className="flex-col container">
        <div className="container">
            {parameters.map(x => (
                <div className="container param-box" key={x.name}>
                    {x.name}
                    <div className="flex-container data">
                        <span className="ml-1 flex-item-left">{x.val}</span>
                        <span className="ml-1 flex-item-right">℃</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
</div>

    )
}      

export default Params