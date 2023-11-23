import FlexBetween from "components/FlexBetween";
import { useTheme, Link, useMediaQuery } from "@mui/material";
import {Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Box} from "@mui/material";

const Footer = () =>{
    const theme = useTheme();
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

    const iconStyle = {
        verticalAlign: "sub", 
        marginRight: "0.15rem",
    }
    const mobileIconStyle={
      display: "flex",
      
    }
    const textStyle = {
        fontWeight: "bold",
        textAlign: "center"
    }
    const mobileTextStyle = {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "0.6rem",
      display:"block"
    }
      

    return(
        <FlexBetween padding="1.5rem 6%" backgroundColor={alt}>
                  <Box >
                    <Typography
                      sx={{
                        "&:hover": {
                          color: primaryLight,
                          cursor: "pointer",
                        },
                      }}
                      color="primary"
                      style={isNonMobileScreens ? textStyle : mobileTextStyle}
                    >
                      <GitHubIcon style={{marginLeft: "0.35rem"}} sx={isNonMobileScreens ? iconStyle : mobileIconStyle}/><Link href="https://github.com/oQvinn" target="_blank" underline="none" color="inherit">Github</Link>
                    </Typography>
                  </Box>
                  

                  <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                    color="primary"
                    style={isNonMobileScreens ? textStyle : mobileTextStyle}
                  >
                    <LinkedInIcon style={{marginLeft: "0.55rem"}} sx={isNonMobileScreens ? iconStyle : mobileIconStyle}/><Link href="https://www.linkedin.com/in/quinn-wegner-531425242/" target="_blank" underline="none" color="inherit">LinkedIn</Link>
                  </Typography>
                  <Typography color="primary" style={isNonMobileScreens ? textStyle : mobileTextStyle}>
                    Version: 1.0
                    <br/>
                    Nov.23/2023
                  </Typography>
                  <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                    color="primary"
                    style={isNonMobileScreens ? textStyle : mobileTextStyle}
                  >
                    <HeadsetMicIcon style={{marginLeft: "0.45rem"}} sx={isNonMobileScreens ? iconStyle : mobileIconStyle}/><Link href="#" target="_blank" underline="none" color="inherit">Discord</Link>
                  </Typography>

                  <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                    color="primary"
                    style={isNonMobileScreens ? textStyle : mobileTextStyle}
                  >
                    <TwitterIcon style={{marginLeft: "0.45rem"}} sx={isNonMobileScreens ? iconStyle : mobileIconStyle}/><Link href="https://twitter.com/oQvinn" target="_blank" underline="none" color="inherit">Twitter</Link>
                  </Typography>

        </FlexBetween>
    );
}

export default Footer;