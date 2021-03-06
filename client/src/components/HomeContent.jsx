import React, { Component } from "react";
import { withStyles, Typography, Button, SvgIcon } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
const styles = {
    root: {
        flexGrow: 1,
        paddingTop: 30
    },
    flex: {
        flex: 1
    },
    title: {
        marginTop: 50
    },
    button: {
        margin: "auto",
        marginTop: 30,
        padding: 10
    },
    video: {
        margin: "auto",
        marginTop: 0
    }
};

class HomeContent extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div >
                <Grid container >
                    <Button color="primary" className={classes.button}>
                        Learning Now
                    </Button>
                </Grid>

                <Grid container>
                    <ReactPlayer
                        className={classes.video}
                        url="https://www.nis.edu.vn/upload/files/video-nis.mp4"
                        playing
                        loop
                    />
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(HomeContent);
