
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";

const Greet = () => {
    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const alt = theme.palette.background.alt;
    const primaryLight = theme.palette.primary.light;
    const primary = theme.palette.primary.main;

    const headerStyle = {
        fontWeight:"bold",
        fontSize:"2rem",
        textAlign: "center",
        padding: "1rem"
    }
    const paraStyle = {
        fontWeight:"200",
        fontSize:"1.3rem",
        textAlign: "left",
        padding: "1rem"
    }
    const mobileParaStyle = {
        fontWeight:"200",
        fontSize:"0.9rem",
        textAlign: "left",
        padding: "0.4rem"
    }

    return(
        <Box
            backgroundColor = {alt}
            padding="1rem"
            borderRadius="9%"
            height="100%"
            sx={{
                overflowY: "scroll",
                overflowX : "hidden",
                '&::-webkit-scrollbar': {
                    width: '0.8rem',
                    //background: 'primary',
                    
                  },
                  '&::-webkit-scrollbar-track': {
                    background: {alt},
                    marginTop: "5rem",
                    marginBottom: "5rem",
                    borderRadius: "10px",
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: primary,
                    borderRadius: "10px",
                  },
                  '&::-webkit-scrollbar-thumb:hover': {
                    background: primaryLight
                  }
            }}
        >
            <Typography style={headerStyle} color="primary">
                Welcome!
                <p style={isNonMobileScreens ? paraStyle : mobileParaStyle}>
                    &nbsp;&nbsp;&nbsp;&nbsp; This website is a fun little project I decided to create, with the intent to iterate on it over time. Currently it's probably pretty basic, however, over time I hope to add more interesting features to showcase my development experience.
                    <br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; Feel free to explore the website! All my important links are at the bottom of the page, and maybe I'll have figured out what to do with the right side of the site by the time someone reads this.
                </p>
            </Typography>
        </Box>
    );
}

export default Greet;