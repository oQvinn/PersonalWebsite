import Greet from "scenes/greet/greet";
import Header from "scenes/header/header";
import Navbar from "scenes/navbar/navbar";
import "styles/homePage.css"; 
import { useSelector } from "react-redux";
import About from "scenes/about/about";
import Portfolio from "scenes/portfolio/portfolio";
import Contact from "scenes/contact/contact";
const { Box, useMediaQuery, Container } = require("@mui/material");



const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const main = useSelector((state) => state.main);
    return(
        <Box>
            <Header/>
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="1rem"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <Container>
                        <Navbar/>
                    </Container>
                </Box>
                
                <Box flexBasis={isNonMobileScreens ? "55%" : undefined} sx={{height: "100vh"}}>
                    {main === "greet" ? <Greet/> : null}   
                    {main === "about" ? <About/> : null}
                    {main === "portfolio" ? <Portfolio/>: null}
                    {main === "contact" ? <Contact/> : null}
                </Box>
                
             </Box>
        </Box>
        
    );
};

export default HomePage;