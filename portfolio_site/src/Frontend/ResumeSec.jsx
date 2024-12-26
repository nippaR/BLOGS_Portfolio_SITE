import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Image1 from '../assets/react.png';

function ResumeSec() {
    return (
        <Grid>

            <Typography sx={{fontSize:"1rem",fontWeight: "bold", ml: 1,mt:2}}>Skills</Typography>
            
            <Box sx={{
                            width: '360px',
                            height: '2.5px',
                            backgroundImage: 'linear-gradient(to right,rgb(0, 0, 106),rgb(170, 0, 255))',
                            ml: 1,
                            mt:1.5
                        }} />
        
                <Stack direction="row" spacing={1} sx={{mt: 3, ml: 1, gap: 2}}> 
                <Chip
                    avatar={<Avatar alt="Natacha" src={Image1} />}
                    label="React"
                    variant="outlined"
                    sx={{borderColor: "white", color: "white"}}
                />
                
                <Chip
                    avatar={<Avatar alt="Natacha" src={Image1} />}
                    label="React"
                    variant="outlined"
                    sx={{borderColor: "white", color: "white"}}/>

                <Chip
                    avatar={<Avatar alt="Natacha" src={Image1} />}
                    label="React"
                    variant="outlined"
                    sx={{borderColor: "white", color: "white"}}/>

                <Chip
                    avatar={<Avatar alt="Natacha" src={Image1} />}
                    label="React"
                    variant="outlined"
                    sx={{borderColor: "white", color: "white"}}/>
                
                <Chip
                    avatar={<Avatar alt="Natacha" src={Image1} />}
                    label="React"
                    variant="outlined"
                    sx={{borderColor: "white", color: "white"}}/>
                

                </Stack>

        </Grid>
    );
}

export default ResumeSec;