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
    getMaxId: function(state){
        var maxid=1;
        for (var el in state) {
            let app=state[el].id;
            if(maxid<app){maxid=app;}
        }
        return maxid;
    },
    getTimes: function(idEntity,id,state){
             //times for idEntity selected in id element in state
        return 1;
    },
    getChildren: function(idElement,queryMetaData){
        console.log('--- utils.js ---- getChildren -- line 27 ---');
        var arToreturn=[];

        console.log('--- utils.js ---- getChildren -- line 31 ---');
        console.log(queryMetaData);
        console.log('--- utils.js ---- getChildren -- line 33 ---');
        for (var el in queryMetaData) {
            let app=queryMetaData[el].idPArent;

            console.log('--- utils.js ---- getChildren -- line 37 ---');
            console.log(el);
            console.log('--- utils.js ---- getChildren -- line 39 ---');
            if(idElement==app){
                arToreturn.push(queryMetaData[el].id);
            }
        }
        console.log(arToreturn);
return arToreturn;
        /*

        var objs=queryMetaData.filter((obj)=>{
            return (obj.idPArent==idElement);
        });




        var arToreturn=[];
        var findChild=function(element, index, array){
            if( element['idPArent'] == idElement ){

            }
            var el={};
            el['key']=element['id'];
            el['value']=element['name'];
            //     console.log(el);



        };

        queryMetaData.forEach(findChild);

            */



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


    },
    getValueSelectedInID: function(idElement,queryMetaData){
        return null;
    }
};
