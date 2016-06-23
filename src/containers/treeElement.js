//treeElement.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import Select from '../containers/select';


class TreeElement extends Component {
    constructor(props){
        super(props);
    }

    render() {
        var select;
        var test='ok';

        var optionsArray= [
        {key:1, value:'uno', seleccted:0},
        {key:2, value:'due', seleccted:1},
        {key:3, value:'tre', seleccted:0 }
        ];

        var valueSelected=2;


        console.log('--------------------------');
        console.log(optionsArray);
        console.log('--------------------------');

        if(this.props.idParent==0){
            test='inizio';
            select=<Select optiionsAr={optionsArray} valueSelected={valueSelected} />;
        }
        select=<Select optiionsAr={optionsArray} valueSelected={valueSelected} />;



        return (
            <div>
                {test}
                {select}
                idpadre: {this.props.idParent}
            <br />

            </div>

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
    //return bindActionCreators({changeOrientation: changeOrientation}, dispatch);
}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(TreeElement);



