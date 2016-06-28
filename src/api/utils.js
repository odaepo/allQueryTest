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
    getMaxId: function (state) {
        var maxid = 1;
        for (var el in state) {
            let app = state[el].id;
            if (maxid < app) {
                maxid = app;
            }
        }
        return maxid;
    },
    getTimes: function (idEntity, id, state) {
        //times for idEntity selected in id element in state
        return 1;
    },
    deleteChildren:function (idElement, queryMetaData) {
         var arToreturn = [];
       for (var el in queryMetaData) {
             let app = queryMetaData[el].idPArent;
            if (idElement == app) {
                this.deleteChildren(queryMetaData[el].id,queryMetaData);
                delete queryMetaData[el];
            }
        }
    },
    getChildren: function (idElement, queryMetaData) {
        var arToreturn = [];
        for (var el in queryMetaData) {
            let app = queryMetaData[el].idPArent;
            if (idElement == app) {
                arToreturn.push(queryMetaData[el].id);
            }
        }
        return arToreturn;
    },
    stateClone: function (obj) {
            //var clonedArray = JSON.parse(JSON.stringify(nodesArray))
            var copy;

            // Handle the 3 simple types, and null or undefined
            if (null == obj || "object" != typeof obj) return obj;

            // Handle Date
            if (obj instanceof Date) {
                copy = new Date();
                copy.setTime(obj.getTime());
                return copy;
            }

            // Handle Array
            if (obj instanceof Array) {
                copy = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    copy[i] = this.stateClone(obj[i]);
                }
                return copy;
            }

            // Handle Object
            if (obj instanceof Object) {
                copy = {};
                for (var attr in obj) {
                    if (obj.hasOwnProperty(attr)) copy[attr] = this.stateClone(obj[attr]);
                }
                return copy;
            }

            throw new Error("Unable to copy obj! Its type isn't supported.");


    },
    getOptionsInID: function (idElement, queryMetaData) {
        console.log('!!!!!!!!!!!!!!!!!!!!');
        console.log(queryMetaData);
        console.log(idElement);
        console.log('!!!!!!!!!!!!!!!!!!!!');

        if (idElement == 1) {
             var elFiltered = metadataDBstructure.arrayEntities.filter((obj)=> {
                return obj.first;
            });
            var arToreturn = [];


            var el = {};
            el['key'] = 0;
            el['value'] =' ';
            arToreturn.push(el);


            var logArrayElements = function (element, index, array) {
                var el = {};
                el['key'] = element['id'];
                el['value'] = element['name'];
                arToreturn.push(el);
            };
            elFiltered.forEach(logArrayElements);
            return arToreturn;
        }//if (idElement == 1) {
        else {
            var idParent=queryMetaData[idElement]['idPArent'];
            var idPaerentEntity=queryMetaData[idParent]['entityId'];


            var toEntityArray=metadataDBstructure.arrayEntities[idPaerentEntity]['next'];

            var arToreturn = [];

            var el = {};
            el['key'] = 0;
            el['value'] =' ';
            arToreturn.push(el);

            for (var key in toEntityArray) {
                var el = {};
                el['key'] =  key;
                el['value'] = toEntityArray[key];
                arToreturn.push(el);
            }

             return arToreturn;
        }


    },
    getValueSelectedInID: function (idElement, queryMetaData) {
        var entityId=queryMetaData[idElement]['entityId'];
        if (!entityId)return 0;
        else return entityId;
    }
};
