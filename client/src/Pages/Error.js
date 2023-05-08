import { Link } from 'react-router-dom'
import img from '../assets/images/not-found2.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => {
    return (
        <Wrapper>
        <div>
            <img src={img} alt='not found' />
            <h3> ohh! page not found</h3>
            <p> we can't seem to find the page you're looking for</p>
            <Link to='/' >Click this link to go back to Home Page</Link>
        </div>
        </Wrapper>
    )    
}

export default Error
