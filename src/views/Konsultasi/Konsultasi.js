import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
// import ProductSection from "./Sections/ProductSection.js";
// import TeamSection from "./Sections/TeamSection.js";
// import WorkSection from "./Sections/WorkSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Konsultasi(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        image="assets/img/scooter.png"
        brand="Motor.Co"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/scooter2.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              {/* <img src="assets/img/scooter.png" alt="logo"> */}
              <h1 className={classes.title}>Konsultasi</h1>
              <h4>
                Solusi untuk konsultasi mengenai motor
              </h4>
              <h4>yang ingin anda beli.</h4>
              <br />
              <Button
                color="danger"
                size="lg"
                to="/Konsultasi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Konsultasi
              </Button>
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
      <Footer />
    </div>
  );
}
