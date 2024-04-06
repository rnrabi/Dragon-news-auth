import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <h2>{moment().format("dddd, MMMM D , YYYY")}</h2>
        </div>
    );
};

export default Header;