import { ReactComponent as LogoIcon } from '../../../assets/logo.svg';
import { ReactComponent as MobileLogoIcon } from  '../../../assets/logoMobile.svg';
import { Link } from 'react-router-dom';
import React from 'react';
import RWD from '../../../util/RWD';

const Logo = props => {
     
    return (
        <Link to="/">
            <RWD>
                <div up='lg'>
                    <LogoIcon/>
                </div>
                <div>
                    <MobileLogoIcon/>
                </div>
            </RWD>
        </Link>
    );
}

export default Logo;