import React, { useState } from 'react'
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './SearchBar.module.css';


const SearchBar = () => {

    const [myOptions, setMyOptions] = useState([])

    const getDataFromAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts',)
            .then((res) => {
                for (var i = 0; i < res.data.length; i++) {
                    myOptions.push(res.data[i].title)
                }
                setMyOptions(myOptions)
            })
            .catch(err => {
                console.log(err);
            })
        // this.props.onSearch(myOptions);

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


export default SearchBar;
