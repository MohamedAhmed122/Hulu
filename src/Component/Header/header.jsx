import React, { Fragment } from "react";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, Typography } from "@material-ui/core";

import useStyles from './Styles.jsx'


const Header = () => {
    const classes = useStyles()

return (
    <Fragment>
        <Grid className={classes.header} container justify="space-between" alignItems="center">
            <Grid item className={classes.icons}>
                <Grid container >
                <Grid item className={classes.icons}>
                <HomeIcon className={classes.icon} fontSize='large'/>
                    <p className={classes.textMain}>Home</p>
                </Grid>
                <Grid item className={classes.icons}>
                <FlashOnIcon className={classes.icon} fontSize='large' />
                    <p className={classes.text}>Trending</p>    
                </Grid>
                <Grid className={classes.icons}>
                <OndemandVideoIcon className={classes.icon} fontSize='large' />
                    <p className={classes.text}>Verified</p>
                </Grid>
                <Grid className={classes.icons}>
                <VideoLibraryIcon className={classes.icon} fontSize='large' />
                    <p className={classes.text}>Collections</p>
                </Grid>
                <Grid className={classes.icons}>
                <SearchIcon className={classes.icon} fontSize='large' />
                    <p className={classes.text}>Search</p>
                </Grid>
                <Grid className={classes.icons}>
                <PermIdentityIcon className={classes.icon} fontSize='large'  />
                    <p className={classes.text}>Account</p>
                </Grid>           
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant='h2' className={classes.main}>hulu</Typography>
            </Grid>
        </Grid>
        
    </Fragment>
);
};
export default Header;
