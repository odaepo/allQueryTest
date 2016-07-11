

export var arrayEntities=[];
export var arcToEntity=[];

var i;


i=0;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=0;
arrayEntities[i]['fields']={};
//names in UO interface\
arrayEntities[i]['next']={};
arrayEntities[i]['next'][100]='i T1';
arcToEntity[100]=1;
arrayEntities[i]['next'][200]='i T2';
arcToEntity[200]=2;
arrayEntities[i]['next'][300]='i T3';
arcToEntity[300]=3;
arrayEntities[i]['next'][400]='i T4';
arcToEntity[400]=4;
arrayEntities[i]['next'][600]='i T6';
arcToEntity[600]=6;


i=1;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T1';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=1;
arrayEntities[i]['fields']={
                1:{ id:1, name:'T1.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
                2:{ id:2, name:'T1.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
                3:{ id:3, name:'T1.campo3', type:'string', values:{},  toShow:false,  contain:'' , notContain:'', showFilter:true  }
        };
//names in UO interface\
arrayEntities[i]['next']={};
arrayEntities[i]['next'][1]='to T4';
arcToEntity[1]=4;
arrayEntities[i]['next'][2]='to T5';
arcToEntity[2]=5;
arrayEntities[i]['next'][3]='to T6';
arcToEntity[3]=6;


i=2;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T2 test';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=1;
arrayEntities[i]['fields']={
    4:{ id:4, name:'T2.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    5:{ id:5, name:'T2.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    6:{ id:6, name:'T2.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};
arrayEntities[i]['next'][4]='to T7';
arcToEntity[4]=7;
arrayEntities[i]['next'][5]='to T8';
arcToEntity[5]=8;



i=3;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T3';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=1;
arrayEntities[i]['fields']={
    7:{ id:7 ,name:'T3.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    8:{ id:8 ,name:'T3.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    9:{ id:9 ,name:'T3.campo3', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};


i=4;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T4';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=1;
arrayEntities[i]['fields']={
    10:{id:10  ,name:'T4.campo1', type:'string', values:{}, toShow:false, contain:'contiene 2' , notContain:'non contiene', showFilter:true  },
    11:{id:11  ,name:'T4.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:false  },
    12:{id:12  ,name:'T4.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:false  }
};
//names in UO interface
arrayEntities[i]['next']={};
arrayEntities[i]['next'][6]='to T9';
arcToEntity[6]=9;
arrayEntities[i]['next'][7]='to T10';
arcToEntity[7]=10;


i=5;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T5';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=0;
arrayEntities[i]['fields']={
    13:{ id:13 ,name:'T5.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    14:{ id:14 ,name:'T5.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    15:{ id:15 ,name:'T5.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};
arrayEntities[i]['next'][8]='to T11';
arcToEntity[8]=11;

i=6;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T6';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=1;
arrayEntities[i]['fields']={
    16:{ id:16 ,name:'T6.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    17:{ id:17 ,name:'T6.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    18:{ id:18 ,name:'T6.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};




i=7;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T7';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=0;
arrayEntities[i]['fields']={
    19:{ id:19 ,name:'T7.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    20:{ id:20 ,name:'T7.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    21:{ id:21 ,name:'T7.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};





i=8;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T8';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=0;
arrayEntities[i]['fields']={
    22:{ id:22 ,name:'T8.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    23:{ id:23 ,name:'T8.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    24:{ id:24 ,name:'T8.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};




i=9;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T9';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=0;
arrayEntities[i]['fields']={
    25:{ id:25 ,name:'T9.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    26:{ id:26 ,name:'T9.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    27:{ id:27 ,name:'T9.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};
arrayEntities[i]['next'][9]='to T12';
arcToEntity[9]=12;


i=10;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T10';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=0;
arrayEntities[i]['fields']={
    28:{ id:28 ,name:'T10.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    29:{ id:29 ,name:'T10.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    30:{ id:30 ,name:'T10.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};




i=11;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T11';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=0;
arrayEntities[i]['fields']={
    31:{ id:31 ,name:'T11.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    32:{ id:32 ,name:'T11.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    33:{ id:33 ,name:'T11.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};




i=12;
arrayEntities[i]={};
arrayEntities[i]['id']=i;
arrayEntities[i]['name']='T12';
arrayEntities[i]['usedtime']=0; //times used in UI interface
arrayEntities[i]['names']={}; //names in UO interface
arrayEntities[i]['first']=0;
arrayEntities[i]['fields']={
    34:{ id:34 ,name:'T12.campo1', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    35:{ id:35 ,name:'T12.campo2', type:'string', values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  },
    36:{ id:36 ,name:'T12.campo3', type:'string',values:{}, toShow:false, contain:'' , notContain:'', showFilter:true  }
};
//names in UO interface\
arrayEntities[i]['next']={};
 arrayEntities[i]['next'][10]='to T1';
arcToEntity[10]=1;


module.exports = {
    arrayEntities:arrayEntities,
    arcToEntity:arcToEntity
}