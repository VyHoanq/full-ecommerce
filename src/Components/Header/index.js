import { Link } from 'react-router-dom';
import Logo from '../../asset/img/logo.png'
import CountryDropdown from '../CountryDropdown';
import { FaSearch, FaRegUser, FaCartPlus } from "react-icons/fa";
import { Button } from '@mui/material';

const Header = () => {
    return (
        <>
            <div className='headerWrapper'>
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}>
                                    <img src={Logo} alt='Logo' />
                                </Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>

                                {/* Header Search Start Here */}
                                <div className='headerSearch ml-3 mr-3'>
                                    <input type='text' placeholder='Search for products ....' />
                                    <Button>
                                        <FaSearch />
                                    </Button>
                                </div>
                                {/* Header Search End Here */}
                                <CountryDropdown />

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'>
                                        <FaRegUser />
                                    </Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.39</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle'>
                                                <FaCartPlus />
                                            </Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;