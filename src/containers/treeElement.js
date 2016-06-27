//treeElement.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Util from '../api/utils';

import Select from '../containers/select';

class TreeElement extends Component {
    constructor(props){
        super(props);
    }

    render() {
        var idElement=this.props.idElement;
        var queryMetaData=this.props.queryMetaData;

        var select;
        Util.logga('okk!');
        var optionsArray=Util.getOptionsInID(idElement,queryMetaData);
        var valueSelected=Util.getValueSelectedInID(idElement,queryMetaData);
        var objsChildren=Util.getChildren(idElement,queryMetaData);


        var elementChildren=objsChildren.map(function(ch){
            //
            console.log('-----------------------!!!!!!!!!!!!!!!!!!!!!!!!!!--------- ---------------id elemento:'+ch);
            return (<TreeElement idElement={ch} key={ch} />);
        });


        console.log('------2----------selezionato--------');
        console.log(queryMetaData);
        console.log(objsChildren);
        console.log('-------2---------selezionato--------');

//var TodoAPI = require('TodoAPI');
//  TodoAPI.setTodos(this.state.todos);
        console.log('----------------quii----------');
        console.log(optionsArray);
        console.log('--------------------------');
        //var valueSelected=2;
             select=<Select idElement={idElement} optiionsAr={optionsArray} valueSelected={valueSelected} />;
        return (
        <table className="elementoAlbero">
            <tbody>
            <tr>
                <td>
                    <div>
                        {select}
                        [id:  {this.props.idElement}]
                        [selected: {valueSelected}]
                        <br />
                    </div>
                </td>
                <td className="secondPart">
                    {elementChildren}
                </td>
            </tr>
            </tbody>
        </table>
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
    //return bindActionCreators({changeOrientation: changeOrientation}, dispatch);
}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(TreeElement);



