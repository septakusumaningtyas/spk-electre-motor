import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import { Link } from "react-router-dom";
// @material-ui/icons

// core components
import Parallax from "components/Parallax/Parallax.js";

// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    setTimeout(function() {
      setCardAnimation("");
    }, 700);
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
        {/* <div>
            <img src="scooter.png" />
        </div> */}
        <Header
            color="transparent"
            routes={dashboardRoutes}
            brand="Motor.Co"
            rightLinks={<HeaderLinks />}
            fixed
            changeColorOnScroll={{
            height: 400,
            color: "white",
            }}
            {...rest}
        />
        <Parallax filter image={require("assets/img/scooter1.png")}>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[cardAnimaton]}>
                    <form className={classes.form}>
                    <p className={classes.divider}>Login</p>
                    <CardBody>
                        <CustomInput
                        labelText="Username..."
                        id="first"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "text",
                            endAdornment: (
                            <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                            </InputAdornment>
                            )
                        }}
                        />
                        <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            type: "password",
                            endAdornment: (
                            <InputAdornment position="end">
                                <Icon className={classes.inputIconsColor}>
                                lock_outline
                                </Icon>
                            </InputAdornment>
                            ),
                            autoComplete: "off"
                        }}
                        />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                        <Button simple color="primary" size="lg">
                        Login
                        </Button>
                        <Button simple color="primary" size="lg">
                        Register
                        </Button>
                    </CardFooter>
                    </form>
                </Card>
                </GridItem>
            </GridContainer>
            </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
            {/* <ProductSection />
            <TeamSection />
            <WorkSection /> */}
            </div>
        </div>
      </div>
    );
}
