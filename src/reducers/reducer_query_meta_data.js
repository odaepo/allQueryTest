import { SET_ENTITY_IN_SELECT } from '../actions/index';
import { TOGGLE_FIELD_CHECKBOX } from '../actions/index';
import { SET_CONTAIN_IN_FIELD } from '../actions/index';
import { SET_NOT_CONTAIN_IN_FIELD } from '../actions/index';


import {arrayEntities,arcToEntity} from '../metadataDBstructure'



import Util from '../api/utils';

export default function(state = null, action) {
    var stateCloned=Util.stateClone(state);
    switch(action.type) {
        case SET_ENTITY_IN_SELECT:
            //aggiorna lo stato del componente selezionato
            Util.logga('uno');
            if(action.idEntity==0) {
                stateCloned[action.id].entityId=null;
                stateCloned[action.id].fieldToShow={};
                stateCloned[action.id].times=1;
            }
            else{
                Util.logga('uno1');
                var idEntity=arcToEntity[action.arcId];
                Util.logga('uno2');
                stateCloned[action.id].entityId=idEntity;
                stateCloned[action.id].arcId=action.arcId;
                Util.logga('uno3');
                stateCloned[action.id].fieldToShow=arrayEntities[idEntity].fields;
                Util.logga('uno4');
                stateCloned[action.id].times=Util.getTimes(idEntity,action.id,stateCloned); //times for idEntity selected in id element in stateCloned
                Util.logga('uno');
            }
            Util.logga('due');
            //cancella i dati dei figli precedenti del componente selezionato
            var chldToDelete=Util.deleteChildren(action.id,stateCloned);

             if(action.id==1){
                if(action.idEntity!=0){
                    var idEntity=arcToEntity[action.idEntity];

                    var newId=Util.getMaxId(stateCloned);
                    newId++;
                    stateCloned[newId]={};
                    stateCloned[newId].id=newId;
                    stateCloned[newId].idPArent=action.id;
                    stateCloned[newId].order=1;
                    stateCloned[newId].entityId=null;
                    stateCloned[newId].times=0;
                    stateCloned[newId].fieldToShow={};
                    stateCloned[newId].treeWhere={};
                }
             }
            else{
                 if(action.idEntity!=0) {
                     //set a new son
                     var IpParent = stateCloned[action.id]['idPArent'];
                     var newId = Util.getMaxId(stateCloned);
                     newId++;
                     stateCloned[newId] = {};
                     stateCloned[newId].id = newId;
                     stateCloned[newId].idPArent = IpParent;
                     stateCloned[newId].order = 1;
                     stateCloned[newId].entityId = null;
                     stateCloned[newId].times = 0;
                     stateCloned[newId].fieldToShow = {};
                     stateCloned[newId].treeWhere = {};

                     var newId = Util.getMaxId(stateCloned);
                     newId++;
                     stateCloned[newId] = {};
                     stateCloned[newId].id = newId;
                     stateCloned[newId].idPArent = action.id;
                     stateCloned[newId].order = 1;
                     stateCloned[newId].entityId = null;
                     stateCloned[newId].times = 0;
                     stateCloned[newId].fieldToShow = {};
                     stateCloned[newId].treeWhere = {};
                 }

             }

            return {
                ...stateCloned,
            };
            //return stateCloned;
        break;




        case SET_CONTAIN_IN_FIELD:
            stateCloned[action.idElement].fieldToShow[action.idField].contain=action.txt;
            return {
                ...stateCloned,
            };

            break;

        case SET_NOT_CONTAIN_IN_FIELD:
            stateCloned[action.idElement].fieldToShow[action.idField].notContain=action.txt;
            return {
                ...stateCloned,
            };

            break;


        case TOGGLE_FIELD_CHECKBOX:
            //prendi l'array di oggetti:
            //stateCloned[action.idElement].fieldToShow (   2:{ id:23 ,name:'T8.campo2', type:'string', values:{}, toShow:false  },
            //prendi l'oggetto che ha la coppia id =action.idField
            //inverti il valote toShow  (es. id:23 -> toshow:...


            stateCloned[action.idElement].fieldToShow[action.idField].toShow=!(stateCloned[action.idElement].fieldToShow[action.idField].toShow);

            return {
                ...stateCloned,
            };
            //return stateCloned;
            break;

    }

    return stateCloned;
}