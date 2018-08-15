import React from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux';
//import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField, requestRobots} from '../actions'


let mapStateToProps = state =>  {

    return{

        searchField: state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}

let mapDispatchToProps = (dispatch) =>  {

    return {
        onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots:  () =>  dispatch(requestRobots())
    }
}

class App extends React.Component {
   
    componentDidMount(){
        this.props.onRequestRobots();
       
    }

   

    render(){
       
        let {searchField, onSearchChange, robots,isPending} = this.props;
        let filteredRobots = robots.filter((robot)=> {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return isPending?

          <h1>   loading</h1> :
            
            ( 

                <div className="tc">
            <h1 >  Robo Friends </h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>  
            <ErrorBoundary >
            <CardList robots= {filteredRobots} />
            </ErrorBoundary >
            </Scroll>
            </div>
            )
            }
            }
export default connect(mapStateToProps, mapDispatchToProps)(App);