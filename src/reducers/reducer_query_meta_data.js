import { SET_ENTITY_IN_SELECT } from '../actions/index';
import metadataDBstructure from '../metadataDBstructure'
import Util from '../api/utils';

export default function(state = null, action) {
    var stateCloned=Util.stateClone(state);
    switch(action.type) {
        case SET_ENTITY_IN_SELECT:
            //aggiorna lo stato del componente selezionato
            stateCloned[action.id].entityId=action.idEntity;
            stateCloned[action.id].fieldToShow=metadataDBstructure.arrayEntities[action.idEntity].fields;
            stateCloned[action.id].times=Util.getTimes(action.idEntity,action.id,stateCloned); //times for idEntity selected in id element in stateCloned

            //cancella i dati dei figli precedenti del componente selezionato
            var chldToDelete=Util.deleteChildren(action.id,stateCloned);

             if(action.id==1){
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
            else{
                 //set a new son
                 var IpParent=stateCloned[action.id]['idPArent'];
                 var newId=Util.getMaxId(stateCloned);
                 newId++;
                 stateCloned[newId]={};
                 stateCloned[newId].id=newId;
                 stateCloned[newId].idPArent=IpParent;
                 stateCloned[newId].order=1;
                 stateCloned[newId].entityId=null;
                 stateCloned[newId].times=0;
                 stateCloned[newId].fieldToShow={};
                 stateCloned[newId].treeWhere={};

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

            return {
                ...stateCloned,
            };
            //return stateCloned;
        break;
    }

    return stateCloned;
}