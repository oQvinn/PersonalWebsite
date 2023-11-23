import FlexBetween from "components/FlexBetween";
import { useTheme, Link } from "@mui/material";
import {Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () =>{
    const theme = useTheme();
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const iconStyle = {
        verticalAlign: "sub", 
        marginRight: "0.5rem",
    }
    
      

    return(
        <FlexBetween padding="1rem 6%" backgroundColor={alt}>
            
                <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                    color="primary"
                  >
                    <GitHubIcon sx={iconStyle}/><Link href="https://github.com/oQvinn" target="_blank" underline="none" color="inherit">Github</Link>
                  </Typography>

                  <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                    color="primary"
                  >
                    <LinkedInIcon sx={iconStyle}/><Link href="https://www.linkedin.com/in/quinn-wegner-531425242/" target="_blank" underline="none" color="inherit">LinkedIn</Link>
                  </Typography>
                  <Typography color="primary">
                    Website Version: 1.0 - Nov.23/2023
                  </Typography>
                  <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                    color="primary"
                  >
                    <HeadsetMicIcon sx={iconStyle}/><Link href="#" target="_blank" underline="none" color="inherit">Discord</Link>
                  </Typography>

                  <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                    color="primary"
                  >
                    <TwitterIcon sx={iconStyle}/><Link href="https://twitter.com/oQvinn" target="_blank" underline="none" color="inherit">Twitter</Link>
                  </Typography>

        </FlexBetween>
    );
}

export default Footer;