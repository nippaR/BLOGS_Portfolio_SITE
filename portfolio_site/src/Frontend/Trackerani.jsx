import React from "react";
import { Box, Stack} from "@mui/material";
import { motion } from "framer-motion";
import ImageList from '@mui/material/ImageList';
import IMG1 from '../assets/UI1.avif';
import IMG2 from '../assets/UI2.jpeg';
import IMG3 from '../assets/UI3.png';
import IMG4 from '../assets/UI4.jpg';
import IMG5 from '../assets/UI5.jpg';
import IMG6 from '../assets/UI1.avif';
import IMG7 from '../assets/UI2.jpeg';
import IMG8 from '../assets/UI3.png';
import IMG9 from '../assets/UI4.jpg';
import IMG10 from '../assets/UI5.jpg';

const MotionBox = motion(Box);


const Images = [
    IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7,IMG8,IMG9,IMG10
]

function Trackerani() {
    return (
        <MotionBox
            
        >
            <Stack direction="row" spacing={4} sx={{mt: 8, gap: 12, border:'none'}}>

                <ImageList
                    sx={{ width: 2500, height: 1000 }}
                    variant="quilted"
                    cols={15}
                    rowHeight={121}
                    >  
               {Images.map((image, index) => (
                    <MotionBox
                        key={index}
                        sx={{ 
                            width: 150,
                            height: 150,
                            backgroundObjectFit: 'cover',
                        }}
                    >
                        <img src={image} alt="UI" style={{width: '100%', height: '100%',}} />
                    </MotionBox>
                ))}
                </ImageList>
            </Stack>
        </MotionBox>
    );
}

export default Trackerani;