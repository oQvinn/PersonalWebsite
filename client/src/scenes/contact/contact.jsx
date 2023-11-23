import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import {useTheme} from "@mui/material";
import emailjs from 'emailjs-com';
import {useMediaQuery} from "@mui/material";

const Contact = () => {
    const theme = useTheme();
    const alt = theme.palette.background.alt;
    const primaryLight = theme.palette.primary.light;
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
    const serviceId = 'service_74rf3ec';
    const templateId = 'template_fps43vu';
    const publicKey = '_Psq8NKo-4K3hn-jf';
    const messageRows = 18;

    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then((result) => {
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }

    return(
        <Box
            backgroundColor = {alt}
            padding="1rem"
            borderRadius="9%"
            height="100%"
            display= "block"
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
                Contact Me!
                <p style={isNonMobileScreens? paraStyle : mobileParaStyle}>
                    &nbsp;&nbsp;&nbsp;&nbsp; Feel free to shoot me an email using the form below! I'll be sure to get back to you!
                </p>
            </Typography>
            <Typography>
                <form className="contact-form" onSubmit={sendEmail}>
                <FormControl style={{width: "100%"}}>
                    <TextField
                        name="from_name"
                        type="text"
                        variant="outlined"
                        label="Name"
                        required
                        
                    ></TextField>
                    <br/>
                    <TextField
                        name="from_email"
                        type="email"
                        variant="outlined"
                        label="Email"
                        required
                        
                    ></TextField>
                    <br/>
                    <TextField
                        name="email_subject"
                        type="text"
                        variant="outlined"
                        label="Subject"
                        required
                        
                    ></TextField>
                    <br/>
                    <TextField
                        name="html_message" 
                        type="text"
                        variant="outlined"
                        label="Message"
                        multiline
                        rows={messageRows}
                        required
                        
                    ></TextField>
                   <br/>
                    <Button variant="outlined" value="Send" type="submit" style={{width: "50%", alignSelf: "center"}}>Send</Button>
                </FormControl>
                </form>
            </Typography>
            
        </Box>
    );

}

export default Contact;