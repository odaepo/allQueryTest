import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { changeOrientation } from '../actions/index';

class UIoptions extends Component {

    constructor(props){
        super(props);
        this.sendData=this.sendData.bind(this);
    }


    sendData(e) {
        //e.preventDefault();

        var input = this.refs.allstate;

        var toSend={};
        toSend['queryMetaData']=this.props.queryMetaData;
        toSend['queryOptions']= this.props.queryOptions;

        var inputValue = JSON.stringify(toSend);
        input = this.refs.allstate.value=inputValue;
        console.log('ecco!');
        //JSON.stringify(x);
        }

    render(){
        return (
            <div>


                <form name="myform" action="handle-data.php" onSubmit={()=>this.sendData()}  method="POST">
                     <input type='hidden' ref="allstate" name='query' value="test" />
                    <input onClick={()=>this.sendData()} type="submit" value="Submit"/>
                </form>


                [ <div
                    onClick={()=>this.props.changeOrientation()}
                > {this.props.queryOptions.directionUI} </div> ]  [
                <div
                    onClick={()=>this.sendData()}> send-data
                    </div> ]
            </div>

        )
    }
}



function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        queryOptions: state.queryOptions,
        queryMetaData:state.queryMetaData
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
