// import {Line} from "react-chartjs-2"
import {LineChart} from '@mui/x-charts/LineChart'





const LineGraph = ()=>{
   
    return(
        <div>
           
            <h2>Temperatyyyure(°C)-Time(ms) </h2>
            <LineChart
            xAxis ={[{data:[1,2,3,4,5,6,7,8,9,10]}]}
            series={[
                {
                    data:[2,3,5.5,6.1,2.3,5,1,4,6,8.5],
                    // showMark:({index}) => index %2 ===0,
                }
            ]}
            width ={500}
            height={300} />


        </div>
    )
}


export default LineGraph