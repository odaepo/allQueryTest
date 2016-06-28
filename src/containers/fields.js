//fields.js
import React, { Component } from 'react';
import Field from '../containers/field';


class Fields extends Component {

    render(){
        var queryMetaData=this.props.queryMetaData;
        var idElement=this.props.idElement;
        var fieldsToShow=queryMetaData[idElement].fieldToShow;

        var fields=[];
        for (var f in fieldsToShow) {
            let name = fieldsToShow[f].name;
            var field=<Field name={name} />;
                fields.push(field);
        }

        return ( <div>
            Campi dell elemento id {idElement}<br />

            {fields}

        </div>)
    }
}

export default Fields;