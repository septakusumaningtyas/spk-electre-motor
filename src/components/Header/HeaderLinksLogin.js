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

import "../../assets/css/style.css";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <div className="grup-link">
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
          <Link className="menu-link" to="/">Beranda</Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className="menu-link" to="/Konsultasi">Konsultasi</Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className="menu-link" to="/History">History</Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className="menu-link" to="/Kontak">Kontak</Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <a>Halo, reffanpandu</a>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link className="menu-link" to="/">Logout</Link>
        </ListItem>
      </List>
    </div>
  );
}
