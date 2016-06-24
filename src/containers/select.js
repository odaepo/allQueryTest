//select.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { store } from 'redux';

import { setEntityInSelect } from '../actions/index';


class Select extends Component {
    constructor(props){
        super(props);
        //this.onChangeSelect=this.onChangeSelect().bind(this);
    }

    onChangeSelect(){


        //let { dispatch } = this.props;
        //let action=setEntityInSelect(1,2);
        //this.props.setEntityInSelect(1,2);
        //dispatch(action);
        //console.log('pippo--ac');

        //this.props.setEntityInSelect(1,2);
        //{ dispatch } = store
        //onClick={() => this.props.selectBook(book)}
        //{term:event.target.value}
        console.log('pippo--ac');
    }

    render(){
        console.log('--------------------------');

        console.log(this.props.valueSelected);
        console.log('-----------------------2---');

        var options=this.props.optiionsAr.map(function(op){
            return (<option key={op.key} value={op.key}>{op.value}</option>);
        });

        return(
                <select value={this.props.valueSelected} onChange={() => this.props.setEntityInSelect(1,2)}>
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

