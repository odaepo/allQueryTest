//select.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from 'redux';

import { setEntityInSelect } from '../actions/index';


class Select extends Component {
    constructor(props){
        super(props);
        this.onChangeSelect=this.onChangeSelect.bind(this);
    }

    onChangeSelect(event){
        this.props.setEntityInSelect(this.props.idElement,event.target.value); //id, entityID
    }

    render(){
        /*
         {this.state.itemTitle === item ? "active" : "" }
         */
         var idl=this.props.valueSelected;
         var options=this.props.optiionsAr.map(function(op){
             /*
            if(op.key==idl){
                return (<option key={op.key} value={op.key} selected>{op.value}</option>);
                }
            else{
                return (<option key={op.key} value={op.key} >{op.value}</option>);
            }
            */
             return (<option key={op.key} value={op.key} >{op.value}</option>);
        });

        //<select value={this.props.valueSelected} onChange={() => this.props.setEntityInSelect(1,2)}>
        return(
                <select value={this.props.valueSelected} onChange={this.onChangeSelect}>
                    {options}
                </select>
        )
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
    return bindActionCreators({ setEntityInSelect: setEntityInSelect }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
//export default Select;
export default connect(mapStateToProps, mapDispatchToProps)(Select);

