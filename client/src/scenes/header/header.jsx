import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Message,
  DarkMode,
  LightMode,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMain, setMode } from "state";
import FlexBetween from "components/FlexBetween";


const Header = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <Typography color="primary">
        <Box
          component="img"
            sx={{
              height: isNonMobileScreens ? "4rem" : "4rem",
              width: isNonMobileScreens ? "4rem" : "4rem",
              marginRight: isNonMobileScreens ? "1rem" : "0rem",
              border: 1,
              borderWidth: "0.25rem"
            }}
          alt="Quinn's Avatar"
          src="assets/flavicon.jpg"
          borderRadius="15%"      
        ></Box>
      </Typography>
      
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize={isNonMobileScreens ? "2rem" : "1.25rem"}
          color="primary"
          onClick={() => dispatch(setMain("greet"))}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Quinn Wegner
        </Typography>
       
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} color="primary"/>
            ) : (
              <LightMode sx={{fontSize: "25px" }} color="primary"/>
            )}
          </IconButton>
          <IconButton onClick={() => dispatch(setMain("contact"))}>
            <Message sx={{ fontSize: "25px" }} color="primary"/>
          </IconButton>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="25%"
          minWidth="25%"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} color= "primary"/>
              ) : (
                <LightMode sx={{ fontSize: "25px" }} color= "primary"/>
              )}
            </IconButton>

            <IconButton onClick={() => dispatch(setMain("contact"))}>
              <Message sx={{ fontSize: "25px" }} color="primary"/>
            </IconButton>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Header;
