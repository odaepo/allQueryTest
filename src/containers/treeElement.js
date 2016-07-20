//treeElement.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Util from '../api/utils';

import Select from '../containers/select';
import Fields from '../containers/fields';

import { toggleFieldCheckBox } from '../actions/index';


class TreeElement extends Component {
    /*
    constructor(props){
        super(props);
    }
    */

    render() {
        toggleFieldCheckBox(5,5);
        var idElement=this.props.idElement;
        var queryMetaData=this.props.queryMetaData;
        var queryOptions=this.props.queryOptions;
        var tableName=this.props.queryMetaData[idElement]['tableName'];

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


        if(this.props.queryOptions.directionUI=='horizontal'){
            var elementChildren=objsChildren.map(function(ch){
                return (
                <tr>
                    <td>
                 <TreeElementContainer idElement={ch} key={ch} />
                    </td>
                </tr>
                );
            });
        }
       else{
            var elementChildren=objsChildren.map(function(ch){
                return (
                <td>

                        <TreeElementContainer idElement={ch} key={ch} />

                </td>
                );
            });
        }

               select=<Select idElement={idElement} optiionsAr={optionsArray} valueSelected={valueSelected} queryMetaData={queryMetaData} />;
//alert(queryOptions.directionUI);

        if(this.props.queryOptions.directionUI=='horizontal'){
            return (
                <table className="elementoAlbero horizontal">
                    <tbody>
                    <tr>
                        <td>
                            <div>

                                {select}
                                 <br />
                                <div>
                                    NOME {tableName}
                                    <br />
                                    <Fields idElement={idElement} queryMetaData={queryMetaData} toggleFieldCheckBox={toggleFieldCheckBox} />
                                </div>

                            </div>
                        </td>

                        <td className="secondPart">


                            <table>
                                <tbody>
                                {elementChildren}
                                </tbody>
                            </table>


                        </td>
                    </tr>
                    </tbody>
                </table>
            )
        }
        else {
            return (
                <table className="elementoAlbero vertical">
                    <tbody>
                    <tr>
                        <td>
                            <div>
                                {select}
                                <br />
                                NOME {}
                                <br />
                                <Fields idElement={idElement} queryMetaData={queryMetaData} toggleFieldCheckBox={toggleFieldCheckBox} />
                             </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="secondPart">
                            <table>
                                <tbody>
                                <tr>
                                {elementChildren}
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    </tbody>
                </table>
            )
        }
    }
}



const TreeElementContainer = connect(
    mapStateToProps
)(TreeElement);


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
    return bindActionCreators({toggleFieldCheckBox: toggleFieldCheckBox}, dispatch);

}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(TreeElementContainer);



