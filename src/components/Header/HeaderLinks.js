/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Route, NavLink, HashRouter,Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

import LandingPage from "views/LandingPage/LandingPage.js";
import Konsultasi from "views/Konsultasi/Konsultasi.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    // <HashRouter>
    //     <div>
    //       <ul className={classes.list}>
    //         <li><NavLink to="/">Beranda</NavLink></li>
    //         <li><NavLink to="/Konsultasi">Konsultasi</NavLink></li>
    //         <li><NavLink to="/History">History</NavLink></li>
    //         <li><NavLink to="/Kontak">Kontak</NavLink></li>
    //       </ul>
    //       <div className={classes.listItem}>
    //         <Route exact path="/" component={LandingPage}/>
    //         <Route path="/Konsultasi" component={Konsultasi}/>
    //         <Route path="/History" component={History}/>
    //         <Route path="/Kontak" component={Kontak}/>
    //       </div>
    //     </div>
    //   </HashRouter>
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          {/* <Button
            to="/"
            color="transparent"
            //target="_blank"
            className={classes.navLink}
          >
            Beranda
          </Button> */}
          <Link to="/">Beranda</Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          {/* <Button
            to="/Konsultasi"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Konsultasi
          </Button> */}
          <Link to="/Konsultasi">Konsultasi</Link>
          <Route path="/Konsultasi" component={Konsultasi} />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            History
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button
            href=""
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Kontak
          </Button>
        </ListItem>
      </List>
  );
}
