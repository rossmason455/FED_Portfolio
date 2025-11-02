import { Link } from 'react-router';

export default function(){
    return (
        <>
        <div className="bg-red-500 text-3xl font-bold p-8">
            TESTING TAILWIND STYLES
        </div>
        <div >
            <Link to='/'>Home</Link> | 
            <Link to='subregions'>Sub Regions</Link> |
            <Link to='regions'>Regions</Link>
        </div>
        
        </>
    );
}