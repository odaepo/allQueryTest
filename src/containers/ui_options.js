import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeOrientation } from '../actions/index';

class UIoptions extends Component {

    render(){
        return (
            <div
                onClick={()=>this.props.changeOrientation()}
            >Ok2! {this.props.queryOptions.directionUI} </div>
        )
    }
}



function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        queryOptions: state.queryOptions
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ changeOrientation: changeOrientation }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(UIoptions);
