//field.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from 'redux';

import { toggleFieldCheckBox } from '../actions/index';
import { setContain } from '../actions/index';
import { setNotContain } from '../actions/index';


class Field extends Component {

    constructor(props) {
        super(props);


        // bind manually because React class components don't auto-bind
        // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
        this.handleClick = this.handleClick.bind(this);
        this.setNotContainHandle=this.setNotContainHandle.bind(this);
        this.setContainHandle=this.setContainHandle.bind(this);
    }

    handleClick(){
        //preventDefault
        //defaultChecked
        //checked={this.state.isChecked}
        //alert('ok!');
        this.props.toggleFieldCheckBox(this.props.idElement,this.props.idField);
    }

    setNotContainHandle(event){
        var txt=event.target.value;
        this.props.setNotContain(this.props.idElement,this.props.idField,txt);

    }

    setContainHandle(event){
        var txt=event.target.value;
        this.props.setContain(this.props.idElement,this.props.idField,txt);
    }

    render(){

        var checked =this.props.queryMetaData[this.props.idElement].fieldToShow[this.props.idField].toShow;


        if(this.props.queryMetaData[this.props.idElement].fieldToShow[this.props.idField].showFilter){
            var filterTxt=<div>
                <input type="text" onChange={this.setContainHandle}
                       value={this.props.queryMetaData[this.props.idElement].fieldToShow[this.props.idField].contain}/> - !
                <input type="text" onChange={this.setNotContainHandle}
                       value={this.props.queryMetaData[this.props.idElement].fieldToShow[this.props.idField].notContain}/>
            </div>;
        }




        if(checked){
                return (
                    <div>
                        <input type="checkbox" name="vehicle" value="Bike"  onClick={this.handleClick} checked /> {this.props.name} (idEl: {this.props.idElement}) (idField: {this.props.idField})
                        {filterTxt}
                    </div>)
            }
        else{

                return (
                    <div>
                        <input type="checkbox" name="vehicle" value="Bike"  onClick={this.handleClick} /> {this.props.name} (idEl: {this.props.idElement}) (idField: {this.props.idField})
                        {filterTxt}
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
    return bindActionCreators(
        {
            toggleFieldCheckBox: toggleFieldCheckBox,
            setContain: setContain,
            setNotContain: setNotContain,

        }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
//export default Select;
export default connect(mapStateToProps, mapDispatchToProps)(Field);