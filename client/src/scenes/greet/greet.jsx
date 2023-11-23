
import { Box, Typography, useTheme } from "@mui/material";

const Greet = () => {
    const theme = useTheme();
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

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

    return(
        <Box
            backgroundColor = {alt}
            padding="1rem"
            borderRadius="9%"
            height="100%"
        >
            <Typography style={headerStyle} color="primary">
                Welcome!
                <p style={paraStyle}>
                    &nbsp;&nbsp;&nbsp;&nbsp; This website is a fun little project I decided to create and iterate on over time. Currently it's probably pretty basic, however, over time I hope to add more interesting features to showcase my development experience.
                </p>
                <p style={paraStyle}>
                    &nbsp;&nbsp;&nbsp;&nbsp; Feel free to explore the website! All my important links are on the left, and maybe I'll have figured out what to do with the right side by the time someone reads this.
                </p>
            </Typography>
        </Box>
    );
}

export default Greet;