import React, { Component } from "react";
import {
  Hidden,
  Drawer,
  withStyles,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Divider,
  Avatar,
  ListItemIcon
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  Create,
  ViewList
} from '@material-ui/icons';
import { Link } from 'react-router-dom'
import util from '../assets/jss/info'
import info from "../assets/jss/info";

let drawerwidth = 200
let style = theme => ({
  drawer: {
    width: drawerwidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    }
  },
  logo: {
    width: '100%'
  },
  avatar: {
    width: 80,
    height: 80,
    alignSelf: 'center'
  },
  avatarContainer: {
    justifyContent: 'center'
  },
  usernameContainer: {
    textAlign: 'center'
  }
})
class DrawerMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: false,
      category: false
    }
  }
  renderDrawer() {
    const { classes, theme } = this.props;
    return (
      <List>
        <ListItem>
          <img src={`${info.mediaURL}/logo.webp`}
            className={classes.logo}
            href='/'
          />
        </ListItem>
      </List>
    )
  }
  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <Hidden mdUp>
          <Drawer
            open={this.props.drawerOpen}
            onClose={this.props.drawerOnClose}
            variant="temporary"
            ModalProps={{
              keepMounted: true
            }}
            classes={{
              paper: classes.drawer
            }}
          >
            {this.renderDrawer()}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            open={false}
            variant="permanent"
            ModalProps={{
              keepMounted: true
            }}
            classes={{
              paper: classes.drawer
            }}
          >
            {this.renderDrawer()}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}


export default withStyles(style, { withTheme: true })(DrawerMenu)