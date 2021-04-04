import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchBar.module.css';
import axios from 'axios';


const SearchBar = () => {

    const [myOptions, setMyOptions] = useState([])

    const getDataFromAPI = () => {
        console.log("Options Fetched from API")

        axios.get('https://jsonplaceholder.typicode.com/posts',)
            .then((res) => {
                console.log(res.data)
                for (var i = 0; i < res.data.length; i++) {
                    myOptions.push(res.data[i].title)
                }
                setMyOptions(myOptions)
            })
            .catch(err => {
                console.log(err);
            })

        let searchData = {
            ...this.props.search,
            search: myOptions
        }
    }

    return (
        <div className='SearchBar'>
            <h3>Welcome to GithubJobs !</h3>
            <Autocomplete
                style={{ width: '50%', textAlign: 'center', marginLeft: '30%', backgroundColor: 'rgb(182, 195, 230)' }}
                freeSolo
                autoComplete
                autoHighlight
                options={myOptions}
                renderInput={(params) => (
                    <TextField {...params}
                        onChange={getDataFromAPI}
                        variant="outlined"
                        label="Search Box"
                    />
                )}
            />
        </div>
    );
}

const mapStatetoProps = state => {
    return {
        search: state.search
    }
}

export default SearchBar;
