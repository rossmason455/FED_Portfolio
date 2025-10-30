import { Link } from 'react-router';

export default function(){
    return (
        <div >
            <Link to='/'>Home</Link> | 
            <Link to='about'>About</Link> |
            <Link to='regions'>regions</Link>
        </div>
    );
}