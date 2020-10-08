import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import "../../../assets/css/style.css";

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          {/* <h2 className={classes.title}>Hubungi kami</h2> */}
          <h4 className={classes.description}>
            Anda juga bisa menghubungi kami melalui informasi di bawah ini.
          </h4>
          <div className="row col-12">
            <div className="media contact-info col-4">
                <span className="contact-info__icon"><img src="home.png"/></span>
                <div className="media-body">
                <h3>Malang, Indonesia</h3>
                <p>Jl. Soekarno Hatta</p>
                </div>
            </div>
            <div className="media contact-info col-4">
                <span className="contact-info__icon"><img src="phone-contact.png"/></span>
                <div className="media-body">
                <h3>0341 - 123456</h3>
                <p>Senin - Jumat, 07.00-16.00 WIB</p>
                </div>
            </div>
            <div className="media contact-info col-4">
                <span className="contact-info__icon"><img src="messages-silhouette.png"/></span>
                <div className="media-body">
                <h3>motor.co@gmail.com</h3>
                <p>Hubungi kami kapan saja</p>
                </div>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
