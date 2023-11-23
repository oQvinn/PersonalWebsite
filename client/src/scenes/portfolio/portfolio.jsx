import { Box, Card, CardActions, CardContent, CardHeader, Collapse, Typography } from "@mui/material";
import {useTheme, useMediaQuery} from "@mui/material";
import { useEffect, useState } from "react";
import IconButton  from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Portfolio = () => {
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
    const mobileParaStyle = {
        fontWeight:"200",
        fontSize:"0.9rem",
        textAlign: "left",
        padding: "0.4rem"
    }

    const [data, setData] = useState([]);
    const [expanded, setExpanded] = useState(-1);

    const languages = ["Java", "JavaScript", "CSS", "HTML", "R"];
    const frameworks = ["React", "Node", "Spring Boot", "Redux", "Redux Toolkit", "Maven Multi-Modules", "Microservice", "Express", "REST API"];
    const databases = ["MongoDB", "MySQL"];
    const tools = ["R-Markdown", "lapply", "ggplot", "rootSolve", "multiroot", "optim", "bootstrapping", "Material UI", "JSON Web Token"];

    function checkTech(tech){
        let res = "";
        if(languages.includes(tech)){
            res = "green";
        }else if(frameworks.includes(tech)){
            res = "red";
        }else if(databases.includes(tech)){
            res = "cyan";
        }else if(tools.includes(tech)){
            res = "pink";
        }else{
            res = "grey";
        }
        return res;
    }

    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other}/>;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(180deg)' : 'rotate(0deg)',
        marginLeft: 'auto', 
        transition: theme.transitions.create('transform', {duration: theme.transitions.duration.shortest,})
    }));

    const handleExpandClick = i => {
        setExpanded(expanded === i ? -1: i);
    }

    useEffect(() => {
        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/oQvinn/repos");
            
            if(!response.ok){
                const message = `An error has occured: ${response.status}. Github may be experiencing issues.`
                throw new Error(message);
            }

            const result = await response.json();
            return result;
        }
        
        fetchRepos().then((repos) => {
            const cleaned = repos.map((rep, i) => {
                const modifiedDesc = rep.description.split('Technologies');
                const justTech = modifiedDesc[1].slice(8, modifiedDesc[1].length-1).split(", ");
                console.log(justTech[1]);
                return(
                    <div>
                        <Card sx={{width: "100%", marginBottom: "0.5rem"}} key={rep.id} variant="outlined">
                            <CardActions>
                                <Typography color="primary"><CardHeader title={rep.name}></CardHeader></Typography>
                                <ExpandMore
                                    expand={expanded}
                                    onClick={() => handleExpandClick(i)}
                                >
                                    <ExpandMoreIcon/>
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded === i} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography color="primary" style={{textAlign: "left"}}>
                                        {modifiedDesc[0]}
                                        <br/>
                                        <br/>
                                        Technologies used:
                                        <br/>
                                        <br/>
                                        {justTech.map((tech) => {
                                            return (
                                                <Box sx={{
                                                    background: checkTech(tech),
                                                    variant: "outlined",
                                                    borderRadius: "15px",
                                                    textAlign: "center",
                                                    display: "inline-flex",
                                                    padding: "1rem",
                                                    margin: "0.5rem",
                                                    color: "black",
                                                    fontWeight: "bold"
                                                }}>
                                                    {tech} 
                                                </Box>
                                            )
                                        })}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
                )
            })
            setData(cleaned);
        })
    }, [expanded]);
    return(
        <Box
            backgroundColor = {alt}
            padding="1rem"
            borderRadius="9%"
            height="100vh"
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
                Portfolio
                <p style={isNonMobileScreens ? paraStyle : mobileParaStyle}>
                    &nbsp;&nbsp;&nbsp;&nbsp; Below you will find names, descriptions, and technologies used for all of my public Github repositories. Please visit the Github link in the "Links" section to view the projects in depth.
                </p>
                <Box>
                    <Typography style={isNonMobileScreens ? paraStyle : mobileParaStyle}>Legend:</Typography>
                    <br/>

                </Box>
                {data ? data: null}
            </Typography>
        </Box>
    );

}

export default Portfolio;