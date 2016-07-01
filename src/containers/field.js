//field.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from 'redux';

import { toggleFieldCheckBox } from '../actions/index';

class Field extends Component {

    constructor(props) {
        super(props);


        // bind manually because React class components don't auto-bind
        // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //preventDefault
        //defaultChecked
        //checked={this.state.isChecked}
        //alert('ok!');
        this.props.toggleFieldCheckBox(this.props.idElement,this.props.idField);
    }

    render(){

        var checked =0;

            if(checked){
                return (
                    <div>
                        <input type="checkbox" name="vehicle" value="Bike"  onClick={this.handleClick} checked /> {this.props.name} (idEl: {this.props.idElement}) (idField: {this.props.idField})
                    </div>)
            }
        else{
                return (
                    <div>
                        <input type="checkbox" name="vehicle" value="Bike"  onClick={this.handleClick} /> {this.props.name} (idEl: {this.props.idElement}) (idField: {this.props.idField})
                    </div>)
            }
    }
}



function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        //state: state
        queryOptions: state.queryOptions,
        queryMetaData:state.queryMetaData
    };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ toggleFieldCheckBox: toggleFieldCheckBox }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
//export default Select;
export default connect(mapStateToProps, mapDispatchToProps)(Field);