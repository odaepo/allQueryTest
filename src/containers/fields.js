//fields.js
import React, { Component } from 'react';
import Field from '../containers/field';


class Fields extends Component {

    render(){
        this.props.toggleFieldCheckBox(17,1);
        var queryMetaData=this.props.queryMetaData;
        var idElement=this.props.idElement;
        var fieldsToShow=queryMetaData[idElement].fieldToShow;

        var fields=[];
        for (var f in fieldsToShow) {
            let name = fieldsToShow[f].name;
            let idField =fieldsToShow[f].id;


            var field=<Field name={name} idElement={idElement} idField={idField} toggleFieldCheckBox={this.props.toggleFieldCheckBox} />;
                fields.push(field);
        }

        return ( <div>
            Campi dell elemento id {idElement}<br />

            {fields}

        </div>)
    }
}

export default Fields;