import { SET_ENTITY_IN_SELECT } from '../actions/index';
import metadataDBstructure from '../metadataDBstructure'
import Util from '../api/utils';

export default function(state = null, action) {
    switch(action.type) {
        case SET_ENTITY_IN_SELECT:
            console.log('--- reducer_query_meta_data -- line: 8 ----');
            console.log(action.id);
            console.log(action.idEntity);
            console.log(state);
            console.log(metadataDBstructure);
            console.log('--- reducer_query_meta_data -- line: 13 ----');

            //aggiorna lo stato del componente selezionato
            state[action.id].entityId=action.idEntity;
            state[action.id].fieldToShow=metadataDBstructure.arrayEntities[action.idEntity].fields;
            state[action.id].times=Util.getTimes(action.idEntity,action.id,state); //times for idEntity selected in id element in state


            //cancella i dati dei figli precedenti del componente selezionato
            var chldToDelete=Util.getChildren(action.id,state);
            console.log('--- reducer_query_meta_data -- line: 23 ----');
            console.log(chldToDelete);
            chldToDelete.forEach((element, index, array)=>{
                delete state[element];
            });
             console.log('--- reducer_query_meta_data -- line: 25 ----');
            console.log(state);
            console.log('--- reducer_query_meta_data -- line: 30 ----');

            if(action.id==1){
                console.log('SET_ENTITY_IN_SELECT: id componente '+action.id);
                var newId=Util.getMaxId(state);
                newId++;
                state[newId]={};
                state[newId].id=newId;
                state[newId].idPArent=action.id;
                state[newId].order=1;
                state[newId].entityId=null;
                state[newId].times=0;
                state[newId].fieldToShow={};
                state[newId].treeWhere={};
             }
            console.log(action.id);
            console.log(action.idEntity);
            console.log(state);



            /*
            return {
                ...state,
                completed: nextCompleted,
                completedAt: nextCompleted ? moment().unix() : undefined
            };
            */
            return state;
        break;
    }

    return state;
}