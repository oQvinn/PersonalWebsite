import { Box, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import {useMediaQuery} from "@mui/material";

const About = () => {
    const theme = useTheme();
    const primaryLight = theme.palette.primary.light;
    const alt = theme.palette.background.alt;
    const primary = theme.palette.primary.main;
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

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
    const subheadStyle = {
        fontWeight:"160",
        fontSize:"1.3rem",
        textAlign: "flex",
        padding: "1rem",
        fontStyle: "italic"
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
            display={isNonMobileScreens ? "flex" : "block"}
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
                
                About Me
                <p style={subheadStyle}>Ambitious and goal oriented developer, looking to create fun and interesting projects.</p>
                <Box
                    component="img"
                    sx={{
                        height: isNonMobileScreens ? "25rem" : "15rem",
                        width: isNonMobileScreens ? "19.375rem" : "9.375",
                        display: "inline-flex",
                        marginRight: isNonMobileScreens ? "1rem" : "0rem",
                        marginTop: "1.5rem",
                        float: isNonMobileScreens ? "left" : "none",
                        borderColor: "primary",
                        border: 1,
                        borderWidth: "0.25rem"
                    }}
                    alt="Image of Quinn."
                    src="assets/me2.jpg"
                    borderRadius="15%"
                    
                >
                </Box>
                <p style={isNonMobileScreens? paraStyle : mobileParaStyle}>
                    &nbsp;&nbsp;&nbsp;&nbsp; Hello! My name is Quinn Wegner. I'm a software developer who's currently enthusiastic about creating fun and creative projects, or just expanding my knowledge on new and interesting technologies. 
                    <br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; In June of 2022, I graduated from the University of Manitoba with a Bachelor of Science in Psychology and Statistics. 
                                            As I progressed through my degree, I ended up taking some computer science courses to be a more well-rounded graduate, 
                                            and I thoroughly enjoyed my experience. I enjoyed the process of solving all kinds of problems using code, and the 
                                            hands-on "building" component of software development really appealed to me. By the end of my degree, I had a firm grasp
                                            on conducting research from my psychology classes; statistical analysis, modeling, and R code from my statistics classes;
                                            and a foundation of computer science knowledge, as well as Java coding experience, from my computer science classes. 
                    <br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; Fast forward a couple months, and I accepted my first offer to work as a software developer in a consultancy environment.
                                             Over the course of the next year and a bit, I built on my previous experience coding in R and Java to become a back-end
                                             developer, focused on the Spring framework. In tandem with my work as a backend developer, I upskilled as a full-stack
                                             developer, working within the MERN stack. The experience I gained was invaluable to my personal and professional growth 
                                             as a software developer.
                    <br/>
                    <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp; Currently, I'm looking to pursue a full-time role as a full-stack or front-end developer. I know I have the skills and attitude
                                             necessary to become a valuable asset to any team, and I look forward to finding a team that will provide an opportunity to grow.
                </p>                        
            </Typography>   
        </Box>
    );

}

export default About;