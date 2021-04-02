import axios from 'axios';
import { Component } from 'react';

componentDidMount(){
    axios.get('https://jobs.github.com/api')
        .then(res => {
            console.log(res)
        })
        .catch(res => {
            console.log(res)
        })
}
class Fetch extends Component {
    fetch = () => {
        return dispatch => {


        }
    }
    render() {
        return (<button onClick={this.fetch}>Hello</button>)
    }

}
export default Fetch;