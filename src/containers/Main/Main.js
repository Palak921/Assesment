import classes from './Main.module.css';
import { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from '../../components/UI/SearchBar/SearchBar';
import ChangeMode from '../../components/UI/ChangeMode/ChangeMode';
import Jobs from '../Jobs/Jobs';
import Toolbar from '../../components/UI/Navbar/Toolbar/Toolbar';



class Main extends Component {

      state = {
        mode: 'light'
      }


    clickHandler = () => {
        { this.props.mode  ? this.setState({ mode: 'light' }) : this.setState({ mode: 'dark' }) }
    }

    render() {
        let classCss = ['Main']
        { this.props.mode ? classCss = [classes.Main, classes.dark].join(' ') : classCss = [classes.Main] }
        return (
            <div className={classCss}>
                <Toolbar />
                <SearchBar />
                <ChangeMode clicked={()=>this.props.onClick(this.props.mode)} mode={this.state.mode} />

                <Jobs />

            </div>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onClick: (mode) => dispatch({type : mode})
    }
}

const mapStatetoProps = state => {
    return {
        mode: state.dark
    }
}



export default connect(mapStatetoProps, mapDispatchToProps)(Main);
