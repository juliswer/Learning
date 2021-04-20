import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import Navbar from '../components/Navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PublicIcon from '@material-ui/icons/Public';
import VideocamIcon from '@material-ui/icons/Videocam';
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics'

const useStyles = makeStyles(()=> ({
    root:{
        flexGrow: 1
    },
    iconos: {
        color: "white"
    },
    container: {
        paddingTop: '40px',
        alignItems: 'center'
    }
}))

function Dashboard(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Navbar/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<YouTubeIcon className={classes.iconos}/>} titulo="CANAL" texto="pepe" color="rgba(248,80,50,1)" font="white" />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<PublicIcon className={classes.iconos}/>} titulo="MENSAJE" texto="mensaje" color="rgba(248,80,50,1)" font="white" />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<VideocamIcon className={classes.iconos}/>} titulo="CANAL" texto="pepe maestro" color="rgba(248,80,50,1)" font="white" />
                </Grid>
                <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="SUSCRIPTORES" texto="123"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="SEGUIDORES" texto="123"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="PEPINES" texto="123"/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                           <Cards titulo="PEPES" texto="123"/>
                    </Grid>
                </Grid>
                <Grid>

                </Grid>

                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>

                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.container}>
                    
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;