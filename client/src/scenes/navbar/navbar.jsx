import { useDispatch } from "react-redux";
import FlexBetween from "components/FlexBetween";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Stack,
  Link,
  Divider,
} from "@mui/material";

import InfoIcon from '@mui/icons-material/Info';
import SourceIcon from '@mui/icons-material/Source';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PersonIcon from '@mui/icons-material/Person';
import LinkIcon from '@mui/icons-material/Link';
import { setMain } from "state";

const Navbar = () => {
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const subheadStyle = {
    fontWeight:"bold",
    fontSize:"1.5rem",
    justifyContent: "center",
    alignItems: "center",
    
    textAlign:"center",
    

  }
  const iconStyle = {
    verticalAlign: "sub", 
    marginRight: "0.5rem"
  }

  const subheadIconStyle = {
    verticalAlign: "text-stop", 
    marginRight: "0.5rem"
  }

  return(
    <Box 
      backgroundColor = {alt}
      padding="1rem"
      borderRadius="15%"
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack 
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <FlexBetween>
          <Typography
              style={subheadStyle}
              color="primary"
              onClick={() => dispatch(setMain("about"))}
              sx={{
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer",
                },
              }}
            >
              <InfoIcon sx={subheadIconStyle}/>About Me
          </Typography>
        </FlexBetween>
        <Divider style={{width:'100%'}}/>
        <FlexBetween>
          <Typography
              style={subheadStyle}
              color="primary"
              onClick={() => dispatch(setMain("portfolio"))}
              sx={{
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer",
                },
              }}
            >
              <SourceIcon sx={subheadIconStyle}/>Portfolio
          </Typography>
        </FlexBetween>
        <Divider style={{width:'100%'}}/>
        <FlexBetween>
          <Typography
              style={subheadStyle}
              color="primary"
              onClick={() => dispatch(setMain("contact"))}
              sx={{
                "&:hover": {
                  color: primaryLight,
                  cursor: "pointer",
                },
              }}
            >
              <PersonIcon sx={subheadIconStyle}/>Contact
          </Typography>
        </FlexBetween>
        <Divider style={{width:'100%'}}/>
        <FlexBetween>
          <Typography
              style={subheadStyle}
              color="primary"
            >
              <LinkIcon sx={subheadIconStyle}/>Links
              <Stack
                direction="column"
                justifyContent="center"
                
                marginTop="0.5rem"
                spacing={1}
              >
                  <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
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
                  >
                    <LinkedInIcon sx={iconStyle}/><Link href="https://www.linkedin.com/in/quinn-wegner-531425242/" target="_blank" underline="none" color="inherit">LinkedIn</Link>

                  </Typography>
                  <Typography
                    sx={{
                      "&:hover": {
                        color: primaryLight,
                        cursor: "pointer",
                      },
                    }}
                  >
                    <HeadsetMicIcon sx={iconStyle}/><Link href="#" target="_blank" underline="none" color="inherit">Discord</Link>
                  </Typography>
              </Stack>
          </Typography>
          
          
        </FlexBetween>
      </Stack>
    </Box>
  );

}

export default Navbar;