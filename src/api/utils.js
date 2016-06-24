//utils.js

//var $ = require('jquery');

import metadataDBstructure from '../metadataDBstructure'
    //'../../metadataDBstructure';

module.exports = {
    logga: function (msg) {
       console.log(msg);
    },
    logga2: function () {

    },
    getOptionsInID: function(idElement,queryMetaData){
        if(idElement==1){
            //return option first select
            //console.log('ecco!');
            //console.log(metadataDBstructure);
            var elFiltered=metadataDBstructure.arrayEntities.filter((obj)=>{return obj.first;});
            //console.log(elFiltered);
            //console.log('filtrati');

            var arToreturn=[];
            var logArrayElements=function(element, index, array){

                var el={};
                el['key']=element['id'];
                el['value']=element['name'];
               //     console.log(el);
                arToreturn.push(el);


            };

            elFiltered.forEach(logArrayElements);

            //console.log('----- array select iniziale -----------------------------------');
            //console.log(arToreturn);
            //console.log('----- array select iniziale ------------------------------ fine ----');
            return arToreturn;


        }
        else{
            var idParent=queryMetaData[idElement].idParent;
            var entityId=queryMetaData[idParent].entityId;
        }


    },
    getValueSelectedInID: function(idElement,queryMetaData){
        return null;
    }
};
