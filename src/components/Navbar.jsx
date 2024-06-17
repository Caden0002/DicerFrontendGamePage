import React, { useState } from 'react';
import '../../static/fonts.css';
import DicerLogo from '/DicerLogoWhite.svg';
import ProfileLogo from '/NavbarProfile.svg';
import NavbarDropDownGames from './NavbarDropDownGames'; // Import your new component

const navLink1 = 'Games';
const navLink2 = 'Quests';
const navLink3 = 'Referral';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

 
    return (
        <div className="mt-6 fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
            <div className="mx-auto backdrop-blur-xl rounded-2xl pointer-events-auto" style={{ background: 'rgba(4, 4, 5, 0.6)', border: '1px solid rgba(255, 255, 255, 0.25)' }}>
                <div className="inline-flex justify-center items-center sfuiNavbarLinks text-textColorSecondary px-4 space-x-11">
                    <img src={DicerLogo} alt="Dicer Logo" className="cursor-pointer" style={{ width: '18px', height: '18px' }} />
                    <div 
                        className="py-4 hover:text-textColorPrimary cursor-pointer relative group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {navLink1}
                        <NavbarDropDownGames isHovered={isHovered} />
                    </div>
                    <div className="py-4 hover:text-textColorPrimary cursor-pointer">{navLink2}</div>
                    <div className="py-4 hover:text-textColorPrimary cursor-pointer">{navLink3}</div>
                    <img src={ProfileLogo} alt="Profile Logo" className="cursor-pointer" style={{ width: '24px', height: '24px' }} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
