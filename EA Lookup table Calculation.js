var EA={lookup:{unit:{},insurable:{},enterprise:{},granular:{}}};
var mgtDb:NotesDatabase=session.getDatabase('',xpGetDbPath('smformmgt.nsf'),false);
var view1:NotesView=null;
var doc:NotesDocument=null;
/*lookup*/
view1=mgtDb.getView('(EA. Unit Value By All)');
doc=view1.getFirstDocument();
while(doc!=null){
    var item={};
    item.value=Number(doc.getItemValueString('COL_1'));
    item.capacity=Number(doc.getItemValueString('COL_2'));
    item.units=Number(doc.getItemValueString('COL_3'));
    EA.lookup.unit[@Trim(doc.getItemValueString('COL_0'))]=item;
    doc=view1.getNextDocument(doc);
}
view1=mgtDb.getView('(EA. Site Insurable By All)');
doc=view1.getFirstDocument();
while(doc!=null){
    EA.lookup.insurable[@Trim(doc.getItemValueString('COL_0'))]=Number(doc.getItemValueString('COL_1'));
    doc=view1.getNextDocument(doc);
}
view1=mgtDb.getView('(EA. Impact to Business Enterprise By All)');
doc=view1.getFirstDocument();
while(doc!=null){
    EA.lookup.enterprise[@Trim(doc.getItemValueString('COL_0'))]=Number(doc.getItemValueString('COL_1'));
    doc=view1.getNextDocument(doc);
}
view1=mgtDb.getView('(EA. Impact to Business Site Granular By All)');
doc=view1.getFirstDocument();
while(doc!=null){
    var item={};
    item.Critical=Number(doc.getItemValueString('COL_1'));
    item.Major=(item.Critical*3/5).toFixed(0);
    item.Moderate=(item.Major/3).toFixed(0);
    item.Minor=(item.Moderate/2).toFixed(0);
    item.Insignificant=0;
    EA.lookup.granular[@Trim(doc.getItemValueString('COL_0'))]=item;
    doc=view1.getNextDocument(doc);
}
/*{EUDD} Enterprise Unplanned Downtime Days*/
EA.EUDD={};
/*{EMGM} Enterprise Missed Generation MWh*/
EA.EMGM={};
for(var key in EA.lookup.enterprise){
    var limit=EA.lookup.enterprise[key];
    if(key.indexOf(' ')!=-1){key=key.substring(0,key.indexOf(' '));}
    EA.EUDD[key]={};
    EA.EMGM[key]={};
    for(var site in EA.lookup.insurable){
        var v=EA.lookup.insurable[site];
        var v1=v==0?0:(limit/v);
        var v2=EA.lookup.unit[site].value;
        EA.EUDD[key][site]=Number(v1.toFixed(0));
        EA.EMGM[key][site]=Number((v1*v2*24).toFixed(0));
    }
}
/*{SUDD} Site Unplanned Downtime Days*/
EA.SUDD={};
/*{SMGM} Site Missed Generation MWh*/
EA.SMGM={};
for(var site in EA.lookup.granular){
    var item=EA.lookup.granular[site];
    for(var level in item){
        if(typeof(EA.SUDD[level])=='undefined'){EA.SUDD[level]={};}
        if(typeof(EA.SMGM[level])=='undefined'){EA.SMGM[level]={};}
        var limit=item[level];
        var v=EA.lookup.insurable[site];
        if(typeof(v)=='undefined'){v=0;}
        var v1=v==0?0:(limit/v);
        var v2=EA.lookup.unit[site].value;
        EA.SUDD[level][site]=Number(v1.toFixed(0));
        EA.SMGM[level][site]=Number((v1*v2*24).toFixed(0));
    }
}