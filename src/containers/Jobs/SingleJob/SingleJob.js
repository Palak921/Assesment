import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import classes from './Singlejob.module.css';
import Toolbar from '../../../components/UI/Navbar/Toolbar/Toolbar';


class SingleJob extends Component {

    render() {
        let finalCss = [classes.root]
        this.props.mode ? finalCss = [classes.root] : finalCss = [classes.root, classes.dark].join(' ')
        return (
            <div>
                <Toolbar />
                <Card className={finalCss} >
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {this.props.id}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                          </Typography>
                        <Typography variant="body2" component="p">
                            {this.props.data}
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapStatetoProps = state => {
    return {
        // mode: state.dark,
        id: state.id,
        data: state.data
    }
}


export default connect(mapStatetoProps)(SingleJob);

