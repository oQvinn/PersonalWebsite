import Greet from "scenes/greet/greet";
import Header from "scenes/header/header";
import Navbar from "scenes/navbar/navbar";
import "styles/homePage.css"; 
import { useSelector } from "react-redux";
import About from "scenes/about/about";
import Portfolio from "scenes/portfolio/portfolio";
import Contact from "scenes/contact/contact";
import Footer from "scenes/footer/footer";
import { useEffect } from "react";
const { Box, useMediaQuery, Container } = require("@mui/material");



const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const main = useSelector((state) => state.main);

    
    //mainArea.scrollIntoView({behavior: "smooth", block:"end", inline:"end"}) 
    useEffect(() => {
        let mainArea = document.getElementById('mainBox');
        mainArea.scrollIntoView({behavior: "smooth", block:"start", inline: "end"})
    }, [main])

    return(
        <Box >
            <Header/>
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="1rem"
            >
                <Box flexBasis={isNonMobileScreens ? "25%" : undefined} marginBottom="2rem">
                    <Container>
                        <Navbar/>
                    </Container>
                </Box>
            
                <Box flexBasis={isNonMobileScreens ? "50%" : undefined} sx={{height: "100vh"}} id="mainBox">
                    {main === "greet" || main === null? <Greet/> : null}   
                    {main === "about" ? <About/>  : null}
                    {main === "portfolio" ? <Portfolio/>: null}
                    {main === "contact" ? <Contact/> : null}  
                </Box>
                
             </Box>
             <Footer/>
        </Box>
        
    );
};

export default HomePage;