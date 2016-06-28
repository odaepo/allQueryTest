//treeElement.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Util from '../api/utils';

import Select from '../containers/select';
import Fields from '../containers/fields';


class TreeElement extends Component {
    /*
    constructor(props){
        super(props);
    }
    */

    render() {
        var idElement=this.props.idElement;
        var queryMetaData=this.props.queryMetaData;
        var queryOptions=this.props.queryOptions;

        console.log('console.log(queryMetaData); treeElements - 18');
        console.log(queryMetaData);
        console.log('console.log(queryMetaData); treeElements - 18b');
        var select;
        var optionsArray=Util.getOptionsInID(idElement,queryMetaData);
        console.log('treeElements - 22 - idElement:'+idElement);
        var valueSelected=Util.getValueSelectedInID(idElement,queryMetaData);
        console.log('treeElements - 24 - idElement:'+idElement);
        var objsChildren=Util.getChildren(idElement,queryMetaData);
        console.log('treeElements - 26 - idElement:'+idElement);

        console.log('figli  di:'+idElement);
        console.log(objsChildren);
        var elementChildren=objsChildren.map(function(ch){
            return (<TreeElement idElement={ch} key={ch} queryMetaData={queryMetaData} queryOptions={queryOptions} />);
        });
              select=<Select idElement={idElement} optiionsAr={optionsArray} valueSelected={valueSelected} queryMetaData={queryMetaData} />;
//alert(queryOptions.directionUI);

        if(queryOptions.directionUI=='horizontal'){
            return (
                <table className="elementoAlbero">
                    <tbody>
                    <tr>
                        <td>
                            <div>

                                {select}
                                 <br />
                                NOME
                                <br />
                                <Fields idElement={idElement} queryMetaData={queryMetaData} />
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
        else {
            return (
                <table className="elementoAlbero">
                    <tbody>
                    <tr>
                        <td>
                            <div>
                                {select}
                                <br />
                                NOME
                                <br />
                                <Fields />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="secondPart">
                            {elementChildren}
                        </td>
                    </tr>
                    </tbody>
                </table>
            )
        }
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of BookList
    return {
        //queryOptions: state.queryOptions,
        //queryMetaData:state.queryMetaData
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



