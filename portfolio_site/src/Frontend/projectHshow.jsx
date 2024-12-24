import React from "react";
import { Box,IconButton,Grid, Typography } from "@mui/material";
import Image from '../assets/OIS.png';
import GitHubIcon from '@mui/icons-material/GitHub';

function projectHshow() {

    return (

        <Grid sx={{mt:6}} >
            
            <Box sx={{ width:"400px", height:"450px", borderRadius: '15px', boxShadow: 15}} >
                <Grid sx={{ paddingTop:2, ml:3}} >
                <img src={Image} alt="My Image" style={{width: "350px", height: '300px',
                                                        borderRadius: '15px',
                                                        boxShadow: "0px 2px 10px rgba(0, 33, 251, 0.2)"}} />

                                                        
                      <Typography variant="h6" sx={{mt:2, ml:8}} >
                           Block Chain Application  
                      </Typography> 
                      <IconButton aria-label="GitHub" sx={{mt:2,ml:18,color: 'white', scale: 1.7, ":hover": {color: "#1e1eff"}}}>
                        <GitHubIcon />
                    </IconButton>   
                </Grid>
            </Box>


        </Grid>

    )
}

export default projectHshow;