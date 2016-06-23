//select.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Select extends Component {
    constructor(props){
        super(props);
    }

    onChangeSelect(){
        console.log('pippo');
    }

    render(){
        console.log('--------------------------');
        console.log(this.props);
        console.log(this.props.valueSelected);
        console.log('-----------------------2---');

        var options=this.props.optiionsAr.map(function(op){

            var selectedValue='';
            if(op.seleccted==1){
                selectedValue='selected'

            }
            else{

            }
            return (<option key={op.key} value={op.key}>{op.value}</option>);

        });
        return(
                <select value={this.props.valueSelected} onChange={this.onChangeSelect}>
                    {options}
                </select>
        )
    }
}






// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default Select;
