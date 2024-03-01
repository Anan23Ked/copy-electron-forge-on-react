import { ReactComponent as Tick } from '../assets/icons/Tick.svg';


const savedDefects = [
    {
        name: "Porosity",
        image: <Tick />,
        time: "00:05:32:15",
        dist:"45mm"
    },
    {
        name: "Burn Through",
        image: <Tick />,
        time: "00:05:32:15",
        dist:"45mm"
    },
    {
        name: "Burn Through",
        image: <Tick />,
        time: "00:05:32:15",
        dist:"45mm"
    },
    {
        name: "Lack of Fusion",
        image: <Tick />,
        time: "00:05:32:15",
        dist:"45mm"
    },
   
];

const Saved = () => {
    return (
        <div className='ml-80 flex container saved-table'>
             <div className='table'>
            <table className='table-auto border rounded'>
                <thead>
                    <tr className="bg-green-100">
                        <th className="px-1 py-2 text-centre">Saved</th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {savedDefects.map(x => (
                        <tr key={x.name}>
                            <td className="px-1 py-2 whitespace-nowrap">
                                <div className="flex items-center justify-between">
                                    <span className="ml-4">{x.name}</span>
                                    <span className="ml-4">{x.image}</span>
                                </div>
                                <span className='flex-right'>{x.time}</span>
                                <div>{x.dist}</div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
       
    );
};

export default Saved;
