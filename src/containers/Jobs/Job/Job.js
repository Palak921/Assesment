import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import classes from './Job.module.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


class Job extends Component {

    clickSingleJob = (id) => {
        const path = '/jobs' + id
        this.props.history.push(path);
        this.props.fullJob(id)
    }

    render() {
        console.log(this.props.mode);
        let finalCss = [classes.root]
        //  !this.props.mode ? finalCss = [classes.root] : finalCss = [classes.root, classes.dark].join(' ') 
        return (
            <Card className={finalCss} onClick={() => this.clickSingleJob(this.props.id)} >
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {this.props.id}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        Job : {this.props.id}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.props.data}
                        <br />
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

const mapStatetoProps = state => {
    return {
        mode: state.dark,
        changeid: state.id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fullJob: (id) => dispatch({ type: 'fulljob', value: id })
    }
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(Job));

