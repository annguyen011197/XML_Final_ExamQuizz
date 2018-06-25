import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import BookMarkIcon from '@material-ui/icons/Bookmark';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import HomeIcon from '@material-ui/icons/Home';
import LayersIcon from '@material-ui/icons/Layers';
const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
});

class NestedList extends React.Component {
  state = { 
      open1: false,
      open2: false,
      open3: false
  };

  handleClick = (params) => {
    let name = "open" + params
    this.setState({ 
        [name]: !this.state[name]
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <List
          component="nav"
        >
        <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText inset primary="Home" />
            </ListItem>
        <ListSubheader component="div">English Exams</ListSubheader>
          <ListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Exam 1" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText inset primary="Exam 2" />
          </ListItem><ListSubheader component="div">Vocabulary Lessons</ListSubheader>
        
          <ListItem button onClick={() => this.handleClick(1)}>
            <ListItemIcon>
              <BookMarkIcon />
            </ListItemIcon>
            <ListItemText inset primary="Phrasal Verbs" />
            {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <LayersIcon />
                </ListItemIcon>
                <ListItemText inset primary="Exercise 1" />
              </ListItem>
              <ListItem button className={classes.nested}>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText inset primary="Exercise 2" />
            </ListItem>
            </List>
          </Collapse>

          <ListItem button onClick={() => this.handleClick(2)}>
          <ListItemIcon>
            <BookMarkIcon />
          </ListItemIcon>
          <ListItemText inset primary="Pronouns" />
          {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText inset primary="Exercise 1" />
            </ListItem>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText inset primary="Exercise 2" />
          </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={() => this.handleClick(3)}>
        <ListItemIcon>
          <BookMarkIcon />
        </ListItemIcon>
        <ListItemText inset primary="Relative Pronouns" />
        {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
            <ListItemText inset primary="Exercise 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText inset primary="Exercise 2" />
        </ListItem>
        </List>
      </Collapse>
        </List>
      </div>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);