import '../App.css'
import { ReactComponent as Current } from '../assets/icons/Current.svg'
import { ReactComponent as Voltage } from '../assets/icons/Voltage.svg'
import { ReactComponent as Time } from '../assets/icons/Time.svg'
import { ReactComponent as TempFill } from '../assets/icons/TempFill.svg'
const Table = () => {
    const data = [
        {
            sl_No: "1",
            Time: "00.01.00",
            Current: "10A",
            Voltage: "10V",
            Temperature: "500 C",
            FeedRate:"15 lpm",
        },
        {
            sl_No: "2",
            Time: "00.02.00",
            Current: "210A",
            Voltage: "210V",
            Temperature: "600 C",
            FeedRate:"15 lpm",
        },
        {
            sl_No: "3",
            Time: "00.03.00",
            Current: "210A",
            Voltage: "210V",
            Temperature: "700 C",
            FeedRate:"15 lpm",
        },
        {
            sl_No: "4",
            Time: "00.04.00",
            Current: "210A",
            Voltage: "210V",
            Temperature: "800 C",
            FeedRate:"15 lpm",
        },
        {
            sl_No: "5",
            Time: "00.05.00",
            Current: "210A",
            Voltage: "210V",
            Temperature: "900 C",
            FeedRate:"15 lpm",
        }
    
    
    
    ]

    return (
        <div>
            <table className='readings'>
                <thead className='readings-thead'>
                    <tr className='readings-tr'>
                        <th className='readings-th'>sl_No</th>
                        <th className='readings-th'>
                            <spam className="flex"> 
                                <div  className="mt-1 icon flex-right justify-centre"><Time fill='#666666'/></div> 
                                <div className='ml-2 text flex justify-centre'>Time </div>
                                 <div className="ml-2 unit flex-right">(ms)</div>                                      
                            </spam>
                        </th>
                        <th className='readings-th'>
                            <spam className="flex"> 
                                <div  className="mt-1 icon flex-right justify-centre"><Current fill='#D3D3D3'/></div> 
                                <div className='ml-2 text flex justify-centre'>Current </div>
                                <div className="ml-2 unit flex-right">(A)</div>
                            </spam>
                        </th>
                        <th className='readings-th'>
                            <spam className="flex"> 
                                <div  className="mt-1 icon flex-right justify-centre"><Voltage fill='#D3D3D3'/></div> 
                                <div className='ml-2 text flex justify-centre'>Voltage </div>
                                <div className="ml-2 unit flex-right">(V)</div>
                            </spam>
                        </th>
                        <th className='readings-th'>
                            <spam className="flex"> 
                                <div  className="mt-1 icon flex-right justify-centre"><TempFill  fill='red'/></div> 
                                <div className='ml-2 text flex justify-centre'>Temperature </div>
                                <div className="ml-2 unit flex-right">(°C)</div>
                            </spam>
                        </th>
                        <th className='readings-th'>
                            <spam className="flex"> 
                                {/* <div  className="mt-1 icon flex-right justify-centre"><Current fill='#666666'/></div>  */}
                                <div className='ml-2 text flex justify-centre'>Feed Rate </div>
                                <div className="ml-2 unit flex-right">(lmp)</div>
                            </spam>
                        </th>
                        
                    </tr>
                </thead>
                <tbody className='readings-tbody'>
                    {data.map((values, index) => (
                        <tr className='readings-tr' > {/* Add key prop */}
                            {/* <td className='readings-td'>{index}</td> */}
                            <td className='readings-td'>{values.sl_No}</td>
                            <td className='readings-td'>{values.Time}</td>
                            <td className='readings-td'>{values.Current}</td>
                            <td className='readings-td'>{values.Voltage}</td>
                            <td className='readings-td'>{values.Temperature}</td>
                            <td className='readings-td'>{values.FeedRate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
