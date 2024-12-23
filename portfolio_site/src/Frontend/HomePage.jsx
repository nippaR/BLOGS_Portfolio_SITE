import React from "react";
import { Box, Button, Grid, IconButton, Stack, Typography, Divider } from "@mui/material";
import MyImage from '../assets/myImage.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';



function HomePage() {
    return (
        
        <Grid
            sx={{ 
                fontFamily: "poppins"
            }}>
            <Stack direction = "row" spacing={2} sx={{mt: 10, ml: 10, gap: 12}}>
                <Grid>
                    <Typography sx={{fontSize:"6rem",fontWeight: "0.5rem"}}>Hello World..!</Typography>
                    <Typography sx={{fontSize:"1.3rem",fontWeight: "bold", ml: 1}}>I'm Thanuja</Typography>
                    <Typography sx={{fontSize:"1.3rem",fontWeight: "bold", ml: 1}}>A creator with a passion Design and stories</Typography>
                        <Box sx={{
                            width: '1px',
                            height: '110px',
                            backgroundColor: 'white',
                            alignSelf: 'stretch',
                            ml: 1.8
                        }} />
                    <Typography sx={{fontSize:"1rem",fontWeight: "bold", ml: 1}}>Explore my journey creative and insightful blogs that bring ideas to life </Typography>
                    
                    <Stack direction="row" spacing={2} sx={{mt: 4, ml: 1, gap: 2}}>
                        <Button variant="contained" sx={{backgroundColor: "#1e1eff", ":hover": {backgroundColor: "#00006b"}}}>
                            <Typography sx={{fontSize:"0.7rem"}}>Read My Blogs</Typography>
                        </Button>

                        <Button variant="contained" sx={{backgroundColor: "#1e1eff", ":hover": {backgroundColor: "#00006b"}}}>
                            <Typography sx={{fontSize:"0.7rem"}}>Explore Portfolio</Typography>
                        </Button>
                    </Stack>
                </Grid>
                    <Box sx={{ml: 15,  transition: 'transform 0.3s ease-in-out','&:hover': {transform: 'scale(1.1)'}}}>
                        <img src={MyImage} alt="My Image" style={{ width: '500px', height: '500px', borderRadius:'50%'}} />
                    </Box>
            </Stack>

            {/*SOCIAL MEDIA ICONS*/}

            <Grid sx={{mt: 4, ml: 10}}>
                    <IconButton aria-label="Linkedin" sx={{ color: 'white', scale: 1.8, ":hover": {color: "#1e1eff"}}}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton aria-label="X" sx={{ ml:3,color: 'white', scale: 1.5, ":hover": {color: "#1e1eff"}}}>
                        <XIcon />
                    </IconButton>
                    <IconButton aria-label="GitHub" sx={{ ml:3,color: 'white', scale: 1.7, ":hover": {color: "#1e1eff"}}}>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton aria-label="Fiverr" sx={{ ml:3,color: 'white', fontFamily: 'poppins', scale: 1.7, ":hover": {color: "#1e1eff"}}}>
                        Fi
                    </IconButton>
            </Grid>

            <Divider sx={{mt:7,ml:8,backgroundColor: 'white' ,width: '90%'}} />

            <Grid sx={{mt: 5, ml: 10}}>
                    
                <Typography sx={{fontSize:"1.5rem",fontWeight: "bold"}}>On Going Projects</Typography>

                <Box sx={{
                            width: '180px',
                            height: '1.5px',
                            backgroundColor: 'white',
                            ml: 1.2,
                            mt:1.5
                        }} />

            </Grid>

        </Grid>
    );
}

export default HomePage;