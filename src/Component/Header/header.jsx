import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';

import './Styles.css'

const Header = () => {


return (
    <section className='header'>
        <div className='header-icons'>
            <div className='container'>
                <HomeIcon fontSize='large'/>
                <p className='text2'>Home</p>
            </div>
            <div className='container'>
                <FlashOnIcon  fontSize='large'/>
                <p className='text'>Trending</p>
            </div>
            <div className='container'>
                <VideoLibraryIcon fontSize='large' />
                <p className='text'>Verified</p>
            </div>
            <div className='container'>
                <OndemandVideoIcon  fontSize='large'/>
                <p className='text'>Collections</p>
            </div>
            <div className='container'>
                <SearchIcon  fontSize='large'/>
                <p className='text'>Search</p>
            </div>
            <div className='container'>
                <PermIdentityIcon fontSize='large'/>
                <p className='text'>Account</p>
            </div>
        </div>
        <h1>hulu</h1>
    </section>
);
};
export default Header;
