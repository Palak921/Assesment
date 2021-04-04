import axios from '../../axios-jobs';
import { Component } from 'react';
import Job from './Job/Job';
import { connect } from 'react-redux';
import './Jobs.module.css';

class Jobs extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res.data);
            this.props.change(res.data)
        })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
            <div>
                <ul >
                    {this.props.data.map(data => (
                        <li key={data.id}>
                            <Job data={data.body} id={data.id}
                                clicked={() => this.props.fullJob(data.id)} />
                        </li>))}


                </ul>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return { data: state.data }
}

const mapDispatchToProps = dispatch => {
    return {
        change: (data) => dispatch({ type: 'changeData', value: data })
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Jobs);