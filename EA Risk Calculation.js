/*....................................Outputs - Result & Consequences..............................................*/
/*..........................Inherent....................................*/
//Unplanned Downtime - Inherent - Field ID:RA08INH_UnpDowntime
var inhdowntime = [RA02INH_DowntimeDay]*[RA03INH_DowntimeUnit];
return inhdowntime.toFixed(2);
//(Math.round(inhdowntime)).toFixed();

//Missed Generation - Inherent - RA09INH_MissGenera
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var downtimeday = currentDocument.getItemValueDouble("RR_ra_RA02INH_DowntimeDay");
var downtimeunit = currentDocument.getItemValueDouble("RR_ra_RA03INH_DowntimeUnit");
var lowcap = currentDocument.getItemValueDouble("RR_ra_RA05INH_LowCap");
var unitload = currentDocument.getItemValueDouble("RR_ra_RA07INH_UnitLoad");
var result = 0;

if (inhsite != ""){
    if (EA.lookup.unit[inhsite]){
        var inhmissgen = downtimeunit*lowcap*24*(1-unitload/100)*EA.lookup.unit[inhsite]["value"] + downtimeday*downtimeunit*24*EA.lookup.unit[inhsite]["value"];
        return (Math.round(inhmissgen)).toFixed();
    }else{
        return result.toFixed();
    }
}else{
    return result.toFixed();
}


//Impact to Business - Inherent - Field ID:RA10INH_ImpBus
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var downtimeday = currentDocument.getItemValueDouble("RR_ra_RA02INH_DowntimeDay");
var downtimeunit = currentDocument.getItemValueDouble("RR_ra_RA03INH_DowntimeUnit");
var materdamage = currentDocument.getItemValueInteger("RR_ra_RA04INH_MaterDamage");
var lowcap = currentDocument.getItemValueDouble("RR_ra_RA05INH_LowCap");
var unitload = currentDocument.getItemValueDouble("RR_ra_RA07INH_UnitLoad");
var incops = currentDocument.getItemValueDouble("RR_ra_RA06INH_IncOps");
var result = 0;

if (inhsite != ""){
    if (EA.lookup.unit[inhsite] && EA.lookup.insurable[inhsite]){
        var inhimpbu = materdamage+incops*((downtimeday+lowcap)/365)+(lowcap*24*(1-unitload/100)*EA.lookup.unit[inhsite]["value"]+downtimeday*downtimeunit*EA.lookup.insurable[inhsite]);
         return (Math.round(inhimpbu)).toFixed();
    }else{
        return result.toFixed();
    }
}else{
    return result.toFixed();
}


//Impact to Revenue - Inherent - Field ID:RA11INH_ImpRev
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var downtimeday = currentDocument.getItemValueDouble("RR_ra_RA02INH_DowntimeDay");
var downtimeunit = currentDocument.getItemValueDouble("RR_ra_RA03INH_DowntimeUnit");
var lowcap = currentDocument.getItemValueDouble("RR_ra_RA05INH_LowCap");
var unitload = currentDocument.getItemValueDouble("RR_ra_RA07INH_UnitLoad");
var result = 0;

if (inhsite != ""){
    if (EA.lookup.unit[inhsite] && EA.lookup.insurable[inhsite]){
        var inhimprev = lowcap*24*(1-unitload/100)*EA.lookup.unit[inhsite]["value"]+downtimeday*downtimeunit*EA.lookup.insurable[inhsite];
         return (Math.round(inhimprev)).toFixed();
    }else{
        return result.toFixed();
    }
}else{
    return result.toFixed();
}



//Material Damage - Inherent - Field ID:RA12INH_MatDamage
var inhmatDamage = [RA04INH_MaterDamage];
return (Math.round(inhmatDamage)).toFixed();

//Capacity Reduction - Inherent - Field ID:RA13INH_CapRed
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var downtimeunit = currentDocument.getItemValueDouble("RR_ra_RA03INH_DowntimeUnit");
var lowcap = currentDocument.getItemValueDouble("RR_ra_RA05INH_LowCap");
var unitload = currentDocument.getItemValueDouble("RR_ra_RA07INH_UnitLoad");
var result = 0;

if (inhsite != ""){
    if (EA.lookup.unit[inhsite]){
        var inhcapred = lowcap*downtimeunit*24*(1-unitload/100)*EA.lookup.unit[inhsite]["value"];
        return (Math.round(inhcapred)).toFixed();
    }else{
        return result.toFixed();
    }
}else{
    return result.toFixed();
}


//Increased Ops Costs - Inherent - Field ID:RA14INH_OpsCost
var inhopscost = [RA06INH_IncOps]*(([RA02INH_DowntimeDay]+[RA05INH_LowCap])/365);
return (Math.round(inhopscost)).toFixed();





/*..........................Residual....................................*/

//Unplanned Downtime - Residual - Field ID:RA08RES_UnpDowntime
var resdowntime = [RA02RES_DowntimeDay]*[RA03RES_DowntimeUnit];
return resdowntime.toFixed(2);
//(Math.round(resdowntime)).toFixed();

//Missed Generation - Residual - Field ID:RA09RES_MissGenera
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var downtimeday = currentDocument.getItemValueDouble("RR_ra_RA02RES_DowntimeDay");
var downtimeunit = currentDocument.getItemValueDouble("RR_ra_RA03RES_DowntimeUnit");
var lowcap = currentDocument.getItemValueDouble("RR_ra_RA05RES_LowCap");
var unitload = currentDocument.getItemValueDouble("RR_ra_RA07RES_UnitLoad");
var result = 0;

if (inhsite != ""){
    if (EA.lookup.unit[inhsite]){
        var resmissgen = downtimeunit*lowcap*24*(1-unitload/100)*EA.lookup.unit[inhsite]["value"] + downtimeday*downtimeunit*24*EA.lookup.unit[inhsite]["value"];
        return (Math.round(resmissgen)).toFixed();
    }else{
        return result.toFixed();
    }
}else{
    return result.toFixed()
}



//Impact to Business - Residual - Field ID:RA10RES_ImpBus
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var downtimeday = currentDocument.getItemValueDouble("RR_ra_RA02RES_DowntimeDay");
var downtimeunit = currentDocument.getItemValueDouble("RR_ra_RA03RES_DowntimeUnit");
var materdamage = currentDocument.getItemValueInteger("RR_ra_RA04RES_MaterDamage");
var lowcap = currentDocument.getItemValueDouble("RR_ra_RA05RES_LowCap");
var unitload = currentDocument.getItemValueDouble("RR_ra_RA07RES_UnitLoad");
var incops = currentDocument.getItemValueDouble("RR_ra_RA06RES_IncOps");
var result = 0;

if (inhsite != ""){
    if (EA.lookup.unit[inhsite] && EA.lookup.insurable[inhsite]){
        var resimpbu = materdamage+incops*((downtimeday+lowcap)/365)+(lowcap*24*(1-unitload/100)*EA.lookup.unit[inhsite]["value"]+downtimeday*downtimeunit*EA.lookup.insurable[inhsite]);
         return (Math.round(resimpbu)).toFixed();
    }else{
        return result.toFixed();
    }
}else{
    return result.toFixed();
}


//Impact to Revenue - Residual - Field ID:RA11RES_ImpRev
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var downtimeday = currentDocument.getItemValueDouble("RR_ra_RA02RES_DowntimeDay");
var downtimeunit = currentDocument.getItemValueDouble("RR_ra_RA03RES_DowntimeUnit");
var lowcap = currentDocument.getItemValueDouble("RR_ra_RA05RES_LowCap");
var unitload = currentDocument.getItemValueDouble("RR_ra_RA07RES_UnitLoad");
var result = 0;

if (inhsite != ""){
    if (EA.lookup.unit[inhsite] && EA.lookup.insurable[inhsite]){
        var resimprev = lowcap*24*(1-unitload/100)*EA.lookup.unit[inhsite]["value"]+downtimeday*downtimeunit*EA.lookup.insurable[inhsite];
         return (Math.round(resimprev)).toFixed();
    }else{
        return result.toFixed();
    }
}else{
    return result.toFixed();
}


//Material Damage - Residual - Field ID:RA12RES_MatDamage
var resmatDamage = [RA04RES_MaterDamage];
return (Math.round(resmatDamage)).toFixed();

//Capacity Reduction - Residual - Field ID:RA13RES_CapRed
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var downtimeunit = currentDocument.getItemValueDouble("RR_ra_RA03RES_DowntimeUnit");
var lowcap = currentDocument.getItemValueDouble("RR_ra_RA05RES_LowCap");
var unitload = currentDocument.getItemValueDouble("RR_ra_RA07RES_UnitLoad");
var result = 0;

if (inhsite != ""){
    if (EA.lookup.unit[inhsite]){
        var rescapred = lowcap*downtimeunit*24*(1-unitload/100)*EA.lookup.unit[inhsite]["value"];
        return (Math.round(rescapred)).toFixed();
    }else{
        return result.toFixed();
    }
}else{
    return result.toFixed();
}



//Increased Ops Costs - Residual - Field ID:RA14RES_OpsCost
var resopscost = [RA06RES_IncOps]*(([RA02RES_DowntimeDay]+[RA05RES_LowCap])/365);
return (Math.round(resopscost)).toFixed();






/*................................,,,,,,,,,,,,,,,,,,,,....Outputs - Result & Consequences........................................................*/
/*............................Enterprise Inherent Consequence.......................................*/
//Unplanned Downtime - Enterprise Inherent Consequence - Field ID:RA16_EntInhCon
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhunpdowntime = Number(currentDocument.getItemValueString("RR_ra_RA08INH_UnpDowntime"));

if (EA.EUDD.Critical[inhsite]){
    if (inhsite == "YM"){
        return 0;
    }else if (inhsite == "Energy"){
        return 0;
    }else if (inhunpdowntime >= EA.EUDD.Critical[inhsite]){
        return 5;
    }else if (inhunpdowntime >= EA.EUDD.Major[inhsite]){
        return 4;
    }else if (inhunpdowntime >= EA.EUDD.MEDIUM[inhsite]){
        return 3;
    }else if (inhunpdowntime >= EA.EUDD.Minor[inhsite]){
        return 2;
    }else if (inhunpdowntime >= EA.EUDD.Insignificant[inhsite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Missed Generation - Enterprise Inherent Consequence - Field ID: RA17_EntInhCon
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhmissgen = Number(currentDocument.getItemValueString("RR_ra_RA09INH_MissGenera"));

if (EA.EMGM.Critical[inhsite]){
    if (inhsite == "YM"){
        return 0;
    }else if (inhsite == "Energy"){
        return 0;
    }else if (inhmissgen >= EA.EMGM.Critical[inhsite]){
        return 5;
    }else if (inhmissgen >= EA.EMGM.Major[inhsite]){
        return 4;
    }else if (inhmissgen >= EA.EMGM.MEDIUM[inhsite]){
        return 3;
    }else if (inhmissgen >= EA.EMGM.Minor[inhsite]){
        return 2;
    }else if (inhmissgen >= EA.EMGM.Insignificant[inhsite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Impact to Business - Enterprise Inherent Consequence - Field ID: RA18_EntInhCon
/*JSON*/
var inhimpbus = Number(currentDocument.getItemValueString("RR_ra_RA10INH_ImpBus"));

if (inhimpbus != "") {
    if (inhimpbus > EA.lookup.enterprise["Critical Lower Limit"]) {
        return 5;
    } else if (inhimpbus >= EA.lookup.enterprise["Major Lower Limit"]) {
        return 4;
    } else if (inhimpbus >= EA.lookup.enterprise["MEDIUM Lower Limit"]) {
        return 3;
    } else if (inhimpbus >= EA.lookup.enterprise["Minor Lower Limit"]) {
        return 2;
    } else if (inhimpbus >= EA.lookup.enterprise["Insignificant Lower Limit"]) {
        return 1;
    } else {
        return 1;
    }
} else {
    return 1;
}


//Impact to Revenue - Enterprise Inherent Consequence - Field ID: RA19_EntInhCon
/*JSON*/
var inhimprev = Number(currentDocument.getItemValueString("RR_ra_RA11INH_ImpRev"));

if (inhimprev != "") {
    if (inhimprev > EA.lookup.enterprise["Critical Lower Limit"]) {
        return 5;
    } else if (inhimprev >= EA.lookup.enterprise["Major Lower Limit"]) {
        return 4;
    } else if (inhimprev >= EA.lookup.enterprise["MEDIUM Lower Limit"]) {
        return 3;
    } else if (inhimprev >= EA.lookup.enterprise["Minor Lower Limit"]) {
        return 2;
    } else if (inhimprev >= EA.lookup.enterprise["Insignificant Lower Limit"]) {
        return 1;
    } else {
        return 1;
    }
} else {
    return 1;
}


//Material Damage - Enterprise Inherent Consequence - Field ID: RA20_EntInhCon
/*JSON*/
var inhmatdamage = Number(currentDocument.getItemValueString("RR_ra_RA12INH_MatDamage"));

if (inhmatdamage != ""){
    if (inhmatdamage > EA.lookup.enterprise["Critical Lower Limit"]){
        return 5;
    }else if (inhmatdamage >= EA.lookup.enterprise["Major Lower Limit"]){
        return 4;
    }else if (inhmatdamage >= EA.lookup.enterprise["MEDIUM Lower Limit"]){
        return 3;
    }else if (inhmatdamage >= EA.lookup.enterprise["Minor Lower Limit"]){
        return 2;
    }else if (inhmatdamage >= EA.lookup.enterprise["Insignificant Lower Limit"]){
        return 1;
    }else{
        return 1;
    }
}else {
    return 1;
}



//Capacity Reduction - Enterprise Inherent Consequence - Field ID: RA21_EntInhCon
/*JSON*/
var inhsite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhcapred = Number(currentDocument.getItemValueString("RR_ra_RA13INH_CapRed"));

if (EA.EMGM.Critical[inhsite]){
    if (inhsite == "YM"){
        return 0;
    }else if (inhsite == "Energy"){
        return 0;
    }else if (inhcapred >= EA.EMGM.Critical[inhsite]){
        return 5;
    }else if (inhcapred >= EA.EMGM.Major[inhsite]){
        return 4;
    }else if (inhcapred >= EA.EMGM.MEDIUM[inhsite]){
        return 3;
    }else if (inhcapred >= EA.EMGM.Minor[inhsite]){
        return 2;
    }else if (inhcapred >= EA.EMGM.Insignificant[inhsite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}


//Increased Ops Costs - Enterprise Inherent Consequence - Field ID: RA22_EntInhCon
/*JSON*/
var inhopscost = Number(currentDocument.getItemValueString("RR_ra_RA14INH_OpsCost"));

if (inhopscost !=""){
    if (inhopscost > EA.lookup.enterprise["Critical Lower Limit"]){
        return 5;
    }else if (inhopscost >= EA.lookup.enterprise["Major Lower Limit"]){
        return 4;
    }else if (inhopscost >= EA.lookup.enterprise["MEDIUM Lower Limit"]){
        return 3;
    }else if (inhopscost >= EA.lookup.enterprise["Minor Lower Limit"]){
        return 2;
    }else if (inhopscost >= EA.lookup.enterprise["Insignificant Lower Limit"]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}





/*............................Enterprise Residual Consequence.......................................*/
//Unplanned Downtime - Enterprise Residual Consequence - Field ID: RA16_EntResCon
/*JSON*/
var ressite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var resunpdowntime = Number(currentDocument.getItemValueString("RR_ra_RA08RES_UnpDowntime"));

if (EA.EUDD.Critical[ressite]){
    if (ressite == "YM"){
        return 0;
    }else if (ressite == "Energy"){
        return 0;
    }else if (resunpdowntime >= EA.EUDD.Critical[ressite]){
        return 5;
    }else if (resunpdowntime >= EA.EUDD.Major[ressite]){
        return 4;
    }else if (resunpdowntime >= EA.EUDD.MEDIUM[ressite]){
        return 3;
    }else if (resunpdowntime >= EA.EUDD.Minor[ressite]){
        return 2;
    }else if (resunpdowntime >= EA.EUDD.Insignificant[ressite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Missed Generation - Enterprise Residual Consequence - Field ID: RA17_EntResCon
/*JSON*/
var ressite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var resmissgen = Number(currentDocument.getItemValueString("RR_ra_RA09RES_MissGenera"));

if(EA.EMGM.Critical[ressite]){
    if (ressite == "YM"){
        return 0;
    }else if (ressite == "Energy"){
        return 0;
    }else if (resmissgen >= EA.EMGM.Critical[ressite]){
        return 5;
    }else if (resmissgen >= EA.EMGM.Major[ressite]){
        return 4;
    }else if (resmissgen >= EA.EMGM.MEDIUM[ressite]){
        return 3;
    }else if (resmissgen >= EA.EMGM.Minor[ressite]){
        return 2;
    }else if (resmissgen >= EA.EMGM.Insignificant[ressite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}




//Impact to Business - Enterprise Residual Consequence - Field ID: RA18_EntResCon
/*JSON*/
var resimpbus = Number(currentDocument.getItemValueString("RR_ra_RA10RES_ImpBus"));

if (resimpbus != "") {
    if (resimpbus >= EA.lookup.enterprise["Critical Lower Limit"]) {
        return 5;
    } else if (resimpbus >= EA.lookup.enterprise["Major Lower Limit"]) {
        return 4;
    } else if (resimpbus >= EA.lookup.enterprise["MEDIUM Lower Limit"]) {
        return 3;
    } else if (resimpbus >= EA.lookup.enterprise["Minor Lower Limit"]) {
        return 2;
    } else if (resimpbus >= EA.lookup.enterprise["Insignificant Lower Limit"]) {
        return 1;
    } else {
        return 1;
    }
} else {
    return 1;
}


//Impact to Revenue - Enterprise Residual Consequence - Field ID: RA19_EntResCon
/*JSON*/
var resimprev = Number(currentDocument.getItemValueString("RR_ra_RA11RES_ImpRev"));

if (resimprev != "") {
    if (resimprev > EA.lookup.enterprise["Critical Lower Limit"]) {
        return 5;
    } else if (resimprev >= EA.lookup.enterprise["Major Lower Limit"]) {
        return 4;
    } else if (resimprev >= EA.lookup.enterprise["MEDIUM Lower Limit"]) {
        return 3;
    } else if (resimprev >= EA.lookup.enterprise["Minor Lower Limit"]) {
        return 2;
    } else if (resimprev >= EA.lookup.enterprise["Insignificant Lower Limit"]) {
        return 1;
    } else {
        return 1;
    }
} else {
    return 1;
}


//Material Damage - Enterprise Residual Consequence - Field ID: RA20_EntResCon
/*JSON*/
var resmatdamage = Number(currentDocument.getItemValueString("RR_ra_RA12RES_MatDamage"));

if (resmatdamage != ""){
    if (resmatdamage > EA.lookup.enterprise["Critical Lower Limit"]){
        return 5;
    }else if (resmatdamage >= EA.lookup.enterprise["Major Lower Limit"]){
        return 4;
    }else if (resmatdamage >= EA.lookup.enterprise["MEDIUM Lower Limit"]){
        return 3;
    }else if (resmatdamage >= EA.lookup.enterprise["Minor Lower Limit"]){
        return 2;
    }else if (resmatdamage >= EA.lookup.enterprise["Insignificant Lower Limit"]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Capacity Reduction - Enterprise Residual Consequence - Field ID: RA21_EntResCon
/*JSON*/
var ressite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var rescapred = Number(currentDocument.getItemValueString("RR_ra_RA13RES_CapRed"));

if (EA.EMGM.Critical[ressite]){
    if (ressite == "YM"){
        return 0;
    }else if (ressite == "Energy"){
        return 0;
    }else if (rescapred >= EA.EMGM.Critical[ressite]){
        return 5;
    }else if (rescapred >= EA.EMGM.Major[ressite]){
        return 4;
    }else if (rescapred >= EA.EMGM.MEDIUM[ressite]){
        return 3;
    }else if (rescapred >= EA.EMGM.Minor[ressite]){
        return 2;
    }else if (rescapred >= EA.EMGM.Insignificant[ressite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}




//Increased Ops Costs - Enterprise Residual Consequence - Field ID: RA22_EntResCon
/*JSON*/
var resopscost = Number(currentDocument.getItemValueString("RR_ra_RA14RES_OpsCost"));

if (resopscost != 0){
    if (resopscost > EA.lookup.enterprise["Critical Lower Limit"]){
        return 5;
    }else if (resopscost >= EA.lookup.enterprise["Major Lower Limit"]){
        return 4;
    }else if (resopscost >= EA.lookup.enterprise["MEDIUM Lower Limit"]){
        return 3;
    }else if (resopscost >= EA.lookup.enterprise["Minor Lower Limit"]){
        return 2;
    }else if (resopscost >= EA.lookup.enterprise["Insignificant Lower Limit"]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}







/*............................Site Inherent Consequence.......................................*/
//Unplanned Downtime - Site Inherent Consequence - Field ID: RA16_SiteInhCon
/*JSON*/
var inhssite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhsunpdowntime = Number(currentDocument.getItemValueString("RR_ra_RA08INH_UnpDowntime"));

if (EA.SUDD.Critical[inhssite]){
    if (inhssite == "YM"){
        return 0;
    }else if (inhssite == "Energy"){
        return 0;
    }else if (inhsunpdowntime >= EA.SUDD.Critical[inhssite]){
        return 5;
    }else if (inhsunpdowntime >= EA.SUDD.Major[inhssite]){
        return 4;
    }else if (inhsunpdowntime >= EA.SUDD.MEDIUM[inhssite]){
        return 3;
    }else if (inhsunpdowntime >= EA.SUDD.Minor[inhssite]){
        return 2;
    }else if (inhsunpdowntime >= EA.SUDD.Insignificant[inhssite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}




//Missed Generation - Site Inherent Consequence - Field ID: RA17_SiteInhCon
/*JSON*/
var inhssite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhsmissgen = Number(currentDocument.getItemValueString("RR_ra_RA09INH_MissGenera"));

if (EA.SMGM.Critical[inhssite]){
    if (inhssite == "YM"){
        return 0;
    }else if (inhssite == "Energy"){
        return 0;
    }else if (inhsmissgen >= EA.SMGM.Critical[inhssite]){
        return 5;
    }else if (inhsmissgen >= EA.SMGM.Major[inhssite]){
        return 4;
    }else if (inhsmissgen >= EA.SMGM.MEDIUM[inhssite]){
        return 3;
    }else if (inhsmissgen >= EA.SMGM.Minor[inhssite]){
        return 2;
    }else if (inhsmissgen >= EA.SMGM.Insignificant[inhssite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Impact to Business - Site Inherent Consequence - Field ID: RA18_SiteInhCon
/*JSON*/
var inhssite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhsimpbus = Number(currentDocument.getItemValueString("RR_ra_RA10INH_ImpBus"));

if (EA.lookup.granular[inhssite]){
    if (inhssite == "YM"){
        return 0;
    }else if (inhssite == "Energy"){
        return 0;
    }else if (inhsimpbus >= Number(EA.lookup.granular[inhssite]["Critical"])){
        return 5;
    }else if (inhsimpbus >= Number(EA.lookup.granular[inhssite]["Major"])){
        return 4;
    }else if (inhsimpbus >= Number(EA.lookup.granular[inhssite]["MEDIUM"])){
        return 3;
    }else if (inhsimpbus >= Number(EA.lookup.granular[inhssite]["Minor"])){
        return 2;
    }else if (inhsimpbus >= Number(EA.lookup.granular[inhssite]["Insignificant"])){
        return 1;
    }else{
        return 0;
    }
}else{
    return 0;
}




//Impact to Revenue - Site Inherent Consequence - Field ID: RA19_SiteInhCon
/*JSON*/
var inhssite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhsimprev = Number(currentDocument.getItemValueString("RR_ra_RA11INH_ImpRev"));

if (EA.lookup.granular[inhssite]){
    if (inhssite == "YM"){
        return 0;
    }else if (inhssite == "Energy"){
        return 0;
    }else if (inhsimprev >= Number(EA.lookup.granular[inhssite]["Critical"])){
        return 5;
    }else if (inhsimprev >= Number(EA.lookup.granular[inhssite]["Major"])){
        return 4;
    }else if (inhsimprev >= Number(EA.lookup.granular[inhssite]["MEDIUM"])){
        return 3;
    }else if (inhsimprev >= Number(EA.lookup.granular[inhssite]["Minor"])){
        return 2;
    }else if (inhsimprev >= Number(EA.lookup.granular[inhssite]["Insignificant"])){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Material Damage - Site Inherent Consequence - Field ID: RA20_SiteInhCon
/*JSON*/
var inhssite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhsmatdamage = Number(currentDocument.getItemValueString("RR_ra_RA12INH_MatDamage"));

if (EA.lookup.granular[inhssite]){
    if (inhssite == "YM"){
        return 0;
    }else if (inhssite == "Energy"){
        return 0;
    }else if (inhsmatdamage >= Number(EA.lookup.granular[inhssite]["Critical"])){
        return 5;
    }else if (inhsmatdamage >= Number(EA.lookup.granular[inhssite]["Major"])){
        return 4;
    }else if (inhsmatdamage >= Number(EA.lookup.granular[inhssite]["MEDIUM"])){
        return 3;
    }else if (inhsmatdamage >= Number(EA.lookup.granular[inhssite]["Minor"])){
        return 2;
    }else if (inhsmatdamage >= Number(EA.lookup.granular[inhssite]["Insignificant"])){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Capacity Reduction - Site Inherent Consequence - Field ID: RA21_SiteInhCon
/*JSON*/
var inhssite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhscapred = Number(currentDocument.getItemValueString("RR_ra_RA13INH_CapRed"));

if (EA.SMGM.Critical[inhssite]){
    if (inhsite == "YM"){
        return 0;
    }else if (inhsite == "Energy"){
        return 0;
    }else if (inhscapred >= EA.SMGM.Critical[inhssite]){
        return 5;
    }else if (inhscapred >= EA.SMGM.Major[inhssite]){
        return 4;
    }else if (inhscapred >= EA.SMGM.MEDIUM[inhssite]){
        return 3;
    }else if (inhscapred >= EA.SMGM.Minor[inhssite]){
        return 2;
    }else if (inhscapred >= EA.SMGM.Insignificant[inhssite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}




//Increased Ops Costs - Site Inherent Consequence - Field ID: RA22_SiteInhCon
/*JSON*/
var inhssite = currentDocument.getItemValueString("RR_ra_RA01INH_Site");
var inhsopscost = Number(currentDocument.getItemValueString("RR_ra_RA14INH_OpsCost"));

if (EA.lookup.granular[inhssite]){
    if (inhssite == "YM"){
        return 0;
    }else if (inhssite == "Energy"){
        return 0;
    }else if (inhsopscost >= Number(EA.lookup.granular[inhssite]["Critical"])){
        return 5;
    }else if (inhsopscost >= Number(EA.lookup.granular[inhssite]["Major"])){
        return 4;
    }else if (inhsopscost >= Number(EA.lookup.granular[inhssite]["MEDIUM"])){
        return 3;
    }else if (inhsopscost >= Number(EA.lookup.granular[inhssite]["Minor"])){
        return 2;
    }else if (inhsopscost >= Number(EA.lookup.granular[inhssite]["Insignificant"])){
        return 1;
    }else{
        return 0;
    }
}else{
    return 0;
}






/*
/*............................Site Residual Consequence.......................................*/
//Unplanned Downtime - Site Residual Consequence - Field ID: RA16_SiteResCon
/*JSON*/
var resssite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var ressunpdowntime = Number(currentDocument.getItemValueString("RR_ra_RA08RES_UnpDowntime"));

if (EA.SUDD.Critical[resssite]){
    if (resssite == "YM"){
        return 0;
    }else if (resssite == "Energy"){
        return 0;
    }else if (ressunpdowntime >= EA.SUDD.Critical[resssite]){
        return 5;
    }else if (ressunpdowntime >= EA.SUDD.Major[resssite]){
        return 4;
    }else if (ressunpdowntime >= EA.SUDD.MEDIUM[resssite]){
        return 3;
    }else if (ressunpdowntime >= EA.SUDD.Minor[resssite]){
        return 2;
    }else if (ressunpdowntime >= EA.SUDD.Insignificant[resssite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}


//Missed Generation - Site Residual Consequence - Field ID: RA17_SiteResCon
/*JSON*/
var resssite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var ressmissgen = Number(currentDocument.getItemValueString("RR_ra_RA09RES_MissGenera"));

if (EA.SMGM.Critical[resssite]){
    if (inhssite == "YM"){
        return 0;
    }else if (inhssite == "Energy"){
        return 0;
    }else if (ressmissgen >= EA.SMGM.Critical[resssite]){
        return 5;
    }else if (ressmissgen >= EA.SMGM.Major[resssite]){
        return 4;
    }else if (ressmissgen >= EA.SMGM.MEDIUM[resssite]){
        return 3;
    }else if (ressmissgen >= EA.SMGM.Minor[resssite]){
        return 2;
    }else if (ressmissgen >= EA.SMGM.Insignificant[resssite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Impact to Business - Site Residual Consequence - Field ID: RA18_SiteResCon
/*JSON*/
var resssite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var ressimpbus = Number(currentDocument.getItemValueString("RR_ra_RA10RES_ImpBus"));

if (EA.lookup.granular[resssite]){
    if (resssite == "YM"){
        return 0;
    }else if (resssite == "Energy"){
        return 0;
    }else if (ressimpbus >= Number(EA.lookup.granular[resssite]["Critical"])){
        return 5;
    }else if (ressimpbus >= Number(EA.lookup.granular[resssite]["Major"])){
        return 4;
    }else if (ressimpbus >= Number(EA.lookup.granular[resssite]["MEDIUM"])){
        return 3;
    }else if (ressimpbus >= Number(EA.lookup.granular[resssite]["Minor"])){
        return 2;
    }else if (ressimpbus >= Number(EA.lookup.granular[resssite]["Insignificant"])){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}




//Impact to Revenue - Site Residual Consequence - Field ID: RA19_SiteResCon
/*JSON*/
var resssite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var ressimprev = Number(currentDocument.getItemValueString("RR_ra_RA11RES_ImpRev"));

if (EA.lookup.granular[resssite]){
    if (resssite == "YM"){
        return 0;
    }else if (resssite == "Energy"){
        return 0;
    }else if (ressimprev >= Number(EA.lookup.granular[resssite]["Critical"])){
        return 5;
    }else if (ressimprev >= Number(EA.lookup.granular[resssite]["Major"])){
        return 4;
    }else if (ressimprev >= Number(EA.lookup.granular[resssite]["MEDIUM"])){
        return 3;
    }else if (ressimprev >= Number(EA.lookup.granular[resssite]["Minor"])){
        return 2;
    }else if (ressimprev >= Number(EA.lookup.granular[resssite]["Insignificant"])){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Material Damage - Site Residual Consequence - Field ID: RA20_SiteResCon
/*JSON*/
var resssite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var ressmatdamage = Number(currentDocument.getItemValueString("RR_ra_RA12RES_MatDamage"));

if (EA.lookup.granular[resssite]){
    if (resssite == "YM"){
        return 0;
    }else if (resssite == "Energy"){
        return 0;
    }else if (ressmatdamage >= Number(EA.lookup.granular[resssite]["Critical"])){
        return 5;
    }else if (ressmatdamage >= Number(EA.lookup.granular[resssite]["Major"])){
        return 4;
    }else if (ressmatdamage >= Number(EA.lookup.granular[resssite]["MEDIUM"])){
        return 3;
    }else if (ressmatdamage >= Number(EA.lookup.granular[resssite]["Minor"])){
        return 2;
    }else if (ressmatdamage >= Number(EA.lookup.granular[resssite]["Insignificant"])){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



//Capacity Reduction - Site Residual Consequence  - Field ID: RA21_SiteResCon
/*JSON*/
var resssite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var resscapred = Number(currentDocument.getItemValueString("RR_ra_RA13RES_CapRed"));

if(EA.SMGM.Critical[resssite]){
    if (resssite == "YM"){
        return 0;
    }else if (resssite == "Energy"){
        return 0;
    }else if (resscapred >= EA.SMGM.Critical[resssite]){
        return 5;
    }else if (resscapred >= EA.SMGM.Major[resssite]){
        return 4;
    }else if (resscapred >= EA.SMGM.MEDIUM[resssite]){
        return 3;
    }else if (resscapred >= EA.SMGM.Minor[resssite]){
        return 2;
    }else if (resscapred >= EA.SMGM.Insignificant[resssite]){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}




//Increased Ops Costs - Site Residual Consequence  - Field ID: RA22_SiteResCon
/*JSON*/
var resssite = currentDocument.getItemValueString("RR_ra_RA01RES_Site");
var ressopscost = Number(currentDocument.getItemValueString("RR_ra_RA14RES_OpsCost"));

if(EA.lookup.granular[resssite]){
    if (resssite == "YM"){
        return 0;
    }else if (resssite == "Energy"){
        return 0;
    }else if (ressopscost >= Number(EA.lookup.granular[resssite]["Critical"])){
        return 5;
    }else if (ressopscost >= Number(EA.lookup.granular[resssite]["Major"])){
        return 4;
    }else if (ressopscost >= Number(EA.lookup.granular[resssite]["MEDIUM"])){
        return 3;
    }else if (ressopscost >= Number(EA.lookup.granular[resssite]["Minor"])){
        return 2;
    }else if (ressopscost >= Number(EA.lookup.granular[resssite]["Insignificant"])){
        return 1;
    }else{
        return 1;
    }
}else{
    return 1;
}



/*............................Enterprise Inherent Risk Rating.......................................*/
//Field ID: RA23_EntInhRiskRate
/*JSON*/
var inhriskArray = [];
var inhLike = currentDocument.getItemValueString("RR_ra_RA15INH_Likelihood");
var Result ="";

for (var tmpi = 16; tmpi <=22; tmpi++){
    var risk = currentDocument.getItemValueString("RR_ra_RA"+tmpi+"_EntInhCon");
    risk=(risk==""?0:Number(risk));
    inhriskArray.push(risk);
}

var riskMax = @Max(inhriskArray);

if (riskMax == 1 && inhLike == ""){
    return "<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+riskMax+"</div>";
}else if (riskMax > 1 && inhLike == ""){
    return "Please select Inherent Likelihood";
}else{
    switch(inhLike){
        case "Almost Certain - 5":
            if (riskMax == 5){
                var inhrate = 7 * 13;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 7 * 8;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 7 * 5;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 7 * 2.5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 7 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Likely - 4":
            if (riskMax == 5){
                var inhrate = 5 * 13;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 5 * 8;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 5 * 5;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 5 * 2.5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 5 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Possible - 3":
            if (riskMax == 5){
                var inhrate = 3 * 13;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 3 * 8;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 3 * 5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 3 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 3 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Unlikely - 2":
            if (riskMax == 5){
                var inhrate = 2 * 13;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 2 * 8;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 2 * 5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 2 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 2 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Rare - 1":
            if (riskMax == 5){
                var inhrate = 1.1 * 13;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 1.1 * 8;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 1.1 * 5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 1.1 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 1.1 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        default:
            Result = "";        
    }
    return Result;
}




/*............................Enterprise Residual Risk Rating.......................................*/
//Field ID: RA23_EntResRiskRate
/*JSON*/
var resriskArray = [];
var resLike = currentDocument.getItemValueString("RR_ra_RA15RES_Likelihood");
var Result ="";

for (var tmpi = 16; tmpi <=22; tmpi++){
    var risk = currentDocument.getItemValueString("RR_ra_RA"+tmpi+"_EntResCon");
    risk=(risk==""?0:Number(risk));
    resriskArray.push(risk);
}

var riskMax = @Max(resriskArray);

if (riskMax == 1 && resLike == ""){
    return "<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+riskMax+"</div>";
}else if (riskMax > 1 && resLike == ""){
    return "Please select Residual Likelihood";
}else{
    switch(resLike){
        case "Almost Certain - 5":
            if (riskMax == 5){
                var resrate = 7 * 13;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 7 * 8;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>";
            }else if (riskMax == 3){
                var inhrresrateate = 7 * 5;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 7 * 2.5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 7 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Likely - 4":
            if (riskMax == 5){
                var resrate = 5 * 13;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 5 * 8;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 3){
                var resrate = 5 * 5;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 5 * 2.5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 5 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Possible - 3":
            if (riskMax == 5){
                var resrate = 3 * 13;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 3 * 8;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 3){
                var resrate = 3 * 5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 3 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 3 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Unlikely - 2":
            if (riskMax == 5){
                var resrate = 2 * 13;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 2 * 8;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 3){
                var resrate = 2 * 5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 2 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 2 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Rare - 1":
            if (riskMax == 5){
                var resrate = 1.1 * 13;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 1.1 * 8;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 3){
                var resrate = 1.1 * 5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 1.1 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 1.1 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        default:
            Result = "";        
    }
    return Result;
}




/*............................Site Inherent Risk Rating.......................................*/
//Field ID: RA23_SiteInhRiskRate
/*JSON*/
var inhriskArray = [];
var inhLike = currentDocument.getItemValueString("RR_ra_RA15INH_Likelihood");
var Result ="";

for (var tmpi = 16; tmpi <=22; tmpi++){
    var risk = currentDocument.getItemValueString("RR_ra_RA"+tmpi+"_SiteInhCon");
    risk=(risk==""?0:Number(risk));
    inhriskArray.push(risk);
}

var riskMax = @Max(inhriskArray);


if (riskMax == 1 && inhLike == ""){
    return "<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+riskMax+"</div>";
}else if (riskMax > 1 && inhLike == ""){
    return "Please select Inherent Likelihood";
}else{
    switch(inhLike){
        case "Almost Certain - 5":
            if (riskMax == 5){
                var inhrate = 7 * 13;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 7 * 8;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 7 * 5;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 7 * 2.5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 7 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Likely - 4":
            if (riskMax == 5){
                var inhrate = 5 * 13;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 5 * 8;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 5 * 5;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 5 * 2.5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 5 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Possible - 3":
            if (riskMax == 5){
                var inhrate = 3 * 13;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 3 * 8;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 3 * 5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 3 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 3 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Unlikely - 2":
            if (riskMax == 5){
                var inhrate = 2 * 13;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 2 * 8;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 2 * 5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 2 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 2 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Rare - 1":
            if (riskMax == 5){
                var inhrate = 1.1 * 13;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var inhrate = 1.1 * 8;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 3){
                var inhrate = 1.1 * 5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else if (riskMax == 2){
                var inhrate = 1.1 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else if (riskMax == 1){
                var inhrate = 1.1 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        default:
            Result = "";        
    }
    return Result;
}





/*............................Site Residual Risk Rating.......................................*/
//Field ID: RA23_SiteResRiskRate
/*JSON*/
var resriskArray = [];
var resLike = currentDocument.getItemValueString("RR_ra_RA15RES_Likelihood");
var Result ="";

for (var tmpi = 16; tmpi <=22; tmpi++){
    var risk = currentDocument.getItemValueString("RR_ra_RA"+tmpi+"_SiteResCon");
    risk=(risk==""?0:Number(risk));
    resriskArray.push(risk);
}

var riskMax = @Max(resriskArray);

if (riskMax == 1 && resLike == ""){
    return "<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+riskMax+"</div>";
}else if (riskMax > 1 && resLike == ""){
    return "Please select Residual Likelihood";
}else{
    switch(resLike){
        case "Almost Certain - 5":
            if (riskMax == 5){
                var resrate = 7 * 13;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 7 * 8;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>";
            }else if (riskMax == 3){
                var inhrresrateate = 7 * 5;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 7 * 2.5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 7 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Likely - 4":
            if (riskMax == 5){
                var resrate = 5 * 13;
                Result = "<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 5 * 8;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 3){
                var resrate = 5 * 5;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 5 * 2.5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 5 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Possible - 3":
            if (riskMax == 5){
                var resrate = 3 * 13;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 3 * 8;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 3){
                var resrate = 3 * 5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 3 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 3 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Unlikely - 2":
            if (riskMax == 5){
                var resrate = 2 * 13;
                Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 2 * 8;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 3){
                var resrate = 2 * 5;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 2 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 2 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        case "Rare - 1":
            if (riskMax == 5){
                var resrate = 1.1 * 13;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if (riskMax == 4){
                var resrate = 1.1 * 8;
                Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if (riskMax == 3){
                var resrate = 1.1 * 5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else if (riskMax == 2){
                var resrate = 1.1 * 2.5;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else if (riskMax == 1){
                var resrate = 1.1 * 1;
                Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                Result= "No match in risk rank";
            }
            break;
        default:
            Result = "";        
    }
    return Result;
}





//Result ="<div style='background-color:red;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>"; 

//Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";

//Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";

//Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";



/*......................................................................Risk Backup...................................................................*/

/*............................Enterprise Inherent Risk Rating.......................................*/
//Field ID: RA23_EntInhRiskRate
/*JSON*/
var inhriskArray = [];
var inhLike = currentDocument.getItemValueString("RR_ra_RA15INH_Likelihood");
var Result ="";

for (var tmpi = 16; tmpi <=22; tmpi++){
    var risk = currentDocument.getItemValueString("RR_ra_RA"+tmpi+"_EntInhCon");
    risk=(risk==""?0:Number(risk));
    inhriskArray.push(risk);
}

var riskMax = @Max(inhriskArray);

if (riskMax != 0){
    if (riskMax == 1){
        Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+riskMax+"</div>";
    } else if (inhLike == "Almost Certain - 5"){
        var inhrate = riskMax * 2.3;
        if (inhrate>=9.2 && inhrate<=11.5){
         Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate.toFixed(1)+"</div>"; 
        }else if(inhrate>=5.6 && inhrate<=7.6){
         Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate.toFixed(1)+"</div>";
        }else if(inhrate>=3.4 && inhrate<=5.5){
         Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate.toFixed(1)+"</div>";
        }else if(inhrate>=1.1 && inhrate<=3.31){
         Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate.toFixed(1)+"</div>";
        }else{
            return "";
        }
     }else if (inhLike == "Likely - 4"){
        var inhrate = riskMax * 1.9;
         if (inhrate>=9.2 && inhrate<=11.5){
             Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate.toFixed(1)+"</div>"; 
            }else if(inhrate>=5.6 && inhrate<=7.6){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate.toFixed(1)+"</div>";
            }else if(inhrate>=3.4 && inhrate<=5.5){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate.toFixed(1)+"</div>";
            }else if(inhrate>=1.1 && inhrate<=3.31){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate.toFixed(1)+"</div>";
            }else{
                return "";
            }
     }else if (inhLike == "Possible - 3"){
        var inhrate = riskMax * 1.4;
         if (inhrate>=9.2 && inhrate<=11.5){
             Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate.toFixed(1)+"</div>"; 
            }else if(inhrate>=5.6 && inhrate<=7.6){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate.toFixed(1)+"</div>";
            }else if(inhrate>=3.4 && inhrate<=5.5){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate.toFixed(1)+"</div>";
            }else if(inhrate>=1.1 && inhrate<=3.31){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate.toFixed(1)+"</div>";
            }else{
                return "";
            }
     }else if (inhLike == "Unlikely - 2"){
        var inhrate = riskMax * 1.2;
         if (inhrate>=9.2 && inhrate<=11.5){
             Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate.toFixed(1)+"</div>"; 
            }else if(inhrate>=5.6 && inhrate<=7.6){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate.toFixed(1)+"</div>";
            }else if(inhrate>=3.4 && inhrate<=5.5){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate.toFixed(1)+"</div>";
            }else if(inhrate>=1.1 && inhrate<=3.31){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate.toFixed(1)+"</div>";
            }else{
                return "";
            }  
     }else if (inhLike == "Rare - 1"){
        var inhrate = riskMax * 1.1;
         if (inhrate>=9.2 && inhrate<=11.5){
             Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate.toFixed(1)+"</div>"; 
            }else if(inhrate>=5.6 && inhrate<=7.6){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate.toFixed(1)+"</div>";
            }else if(inhrate>=3.4 && inhrate<=5.5){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate.toFixed(1)+"</div>";
            }else if(inhrate>=1.1 && inhrate<=3.31){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate.toFixed(1)+"</div>";
            }else{
                return "";
            } 
     }else{
         return "";
     }
}else{
    return "";
}







/*............................Enterprise Residual Risk Rating.......................................*/
//Field ID: RA23_EntResRiskRate
/*JSON*/
var resriskArray = [];
var resLike = currentDocument.getItemValueString("RR_ra_RA15RES_Likelihood");
var Result ="";

for (var tmpi = 16; tmpi <=22; tmpi++){
    var risk = currentDocument.getItemValueString("RR_ra_RA"+tmpi+"_EntResCon");
    risk=(risk==""?0:Number(risk));
    resriskArray.push(risk);
}

var riskMax = @Max(resriskArray);

if (riskMax != 0){
    if (riskMax == 1){
        Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+riskMax+"</div>";
    } else if (resLike == "Almost Certain - 5"){
        var resrate = riskMax * 7;
        if (resrate>41 && resrate<= 91){
         Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
        }else if(resrate>18 && resrate<= 40){
         Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
        }else if(resrate>8 && resrate<= 18){
         Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
        }else if(resrate>0 && resrate<= 8){
         Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
        }else{
            return "";
        }
     }else if (resLike == "Likely - 4"){
        var resrate = riskMax * 5;
         if (resrate>41 && resrate<= 91){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
            }else if(resrate>18 && resrate<= 40){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if(resrate>8 && resrate<= 18){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if(resrate>0 && resrate<= 8){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                return "";
            }
     }else if (resLike == "Possible - 3"){
        var resrate = riskMax * 3;
         if (resrate>41 && resrate<= 91){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
            }else if(resrate>18 && resrate<= 40){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if(resrate>8 && resrate<= 18){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if(resrate>0 && resrate<= 8){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                return "";
            }
     }else if (resLike == "Unlikely - 2"){
        var resrate = riskMax * 2;
         if (resrate>41 && resrate<= 91){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
            }else if(resrate>18 && resrate<= 40){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if(resrate>8 && resrate<= 18){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if(resrate>0 && resrate<= 8){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                return "";
            }  
     }else if (resLike == "Rare - 1"){
        var resrate = riskMax * 1;
         if (resrate>41 && resrate<= 91){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
            }else if(resrate>18 && resrate<= 40){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if(resrate>8 && resrate<= 18){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if(resrate>0 && resrate<= 8){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                return "";
            } 
     }else{
         return "";
     }
}else{
    return "";
}





/*............................Site Inherent Risk Rating.......................................*/
//Field ID: RA23_SiteInhRiskRate
/*JSON*/
var inhriskArray = [];
var inhLike = currentDocument.getItemValueString("RR_ra_RA15INH_Likelihood");
var Result ="";

for (var tmpi = 16; tmpi <=22; tmpi++){
    var risk = currentDocument.getItemValueString("RR_ra_RA"+tmpi+"_SiteInhCon");
    risk=(risk==""?0:Number(risk));
    inhriskArray.push(risk);
}

var riskMax = @Max(inhriskArray);

if (riskMax != 0){
    if (riskMax == 1){
        Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+riskMax+"</div>";
    } else if (inhLike == "Almost Certain - 5"){
        var inhrate = riskMax * 2.3;
        if (inhrate>=9.2 && inhrate<=11.5){
         Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>"; 
        }else if(inhrate>=5.6 && inhrate<=7.6){
         Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
        }else if(inhrate>=3.4 && inhrate<=5.5){
         Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
        }else if(inhrate>=1.1 && inhrate<=3.31){
         Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
        }else{
            return "";
        }
     }else if (inhLike == "Likely - 4"){
        var inhrate = riskMax * 1.9;
         if (inhrate>=9.2 && inhrate<=11.5){
             Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>"; 
            }else if(inhrate>=5.6 && inhrate<=7.6){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if(inhrate>=3.4 && inhrate<=5.5){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if(inhrate>=1.1 && inhrate<=3.31){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                return "";
            }
     }else if (inhLike == "Possible - 3"){
        var inhrate = riskMax * 1.4;
         if (inhrate>=9.2 && inhrate<=11.5){
             Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>"; 
            }else if(inhrate>=5.6 && inhrate<=7.6){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if(inhrate>=3.4 && inhrate<=5.5){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if(inhrate>=1.1 && inhrate<=3.31){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                return "";
            }
     }else if (inhLike == "Unlikely - 2"){
        var inhrate = riskMax * 1.2;
         if (inhrate>=9.2 && inhrate<=11.5){
             Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>"; 
            }else if(inhrate>=5.6 && inhrate<=7.6){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if(inhrate>=3.4 && inhrate<=5.5){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if(inhrate>=1.1 && inhrate<=3.31){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                return "";
            }  
     }else if (inhLike == "Rare - 1"){
        var inhrate = riskMax * 1.1;
         if (inhrate>=9.2 && inhrate<=11.5){
             Result ="<div style='background-color:red;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+inhrate+"</div>"; 
            }else if(inhrate>=5.6 && inhrate<=7.6){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+inhrate+"</div>";
            }else if(inhrate>=3.4 && inhrate<=5.5){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+inhrate+"</div>";
            }else if(inhrate>=1.1 && inhrate<=3.31){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+inhrate+"</div>";
            }else{
                return "";
            } 
     }else{
         return "";
     }
}else{
    return "";
}


/*............................Site Residual Risk Rating.......................................*/
//Field ID: RA23_SiteResRiskRate
/*JSON*/
var resriskArray = [];
var resLike = currentDocument.getItemValueString("RR_ra_RA15RES_Likelihood");
var Result ="";

for (var tmpi = 16; tmpi <=22; tmpi++){
    var risk = currentDocument.getItemValueString("RR_ra_RA"+tmpi+"_SiteResCon");
    risk=(risk==""?0:Number(risk));
    resriskArray.push(risk);
}

var riskMax = @Max(resriskArray);

if (riskMax != 0){
    if (riskMax == 1){
        Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+riskMax+"</div>"
    } else if (resLike == "Almost Certain - 5"){
        var resrate = riskMax * 7;
        if (resrate>41 && resrate<= 91){
         Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
        }else if(resrate>18 && resrate<= 40){
         Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
        }else if(resrate>8 && resrate<= 18){
         Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
        }else if(resrate>0 && resrate<= 8){
         Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
        }else{
            return "";
        }
     }else if (resLike == "Likely - 4"){
        var resrate = riskMax * 5;
         if (resrate>41 && resrate<= 91){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
            }else if(resrate>18 && resrate<= 40){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if(resrate>8 && resrate<= 18){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if(resrate>0 && resrate<= 8){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                return "";
            }
     }else if (resLike == "Possible - 3"){
        var resrate = riskMax * 3;
         if (resrate>41 && resrate<= 91){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
            }else if(resrate>18 && resrate<= 40){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if(resrate>8 && resrate<= 18){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if(resrate>0 && resrate<= 8){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                return "";
            }
     }else if (resLike == "Unlikely - 2"){
        var resrate = riskMax * 2;
         if (resrate>41 && resrate<= 91){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
            }else if(resrate>18 && resrate<= 40){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if(resrate>8 && resrate<= 18){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if(resrate>0 && resrate<= 8){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                return "";
            }  
     }else if (resLike == "Rare - 1"){
        var resrate = riskMax * 1;
         if (resrate>41 && resrate<= 91){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"EXTREME - "+resrate+"</div>"; 
            }else if(resrate>18 && resrate<= 40){
             Result ="<div style='background-color:orange;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"HIGH - "+resrate+"</div>";
            }else if(resrate>8 && resrate<= 18){
             Result ="<div style='background-color:yellow;color:black;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"MEDIUM - "+resrate+"</div>";
            }else if(resrate>0 && resrate<= 8){
             Result ="<div style='background-color:green;color:white;padding:2px8px2px8px;position:relative;left:37%;border-radius:4px;width:140px;text-align:center;font-weight:bold;font-size:16px'>"+"LOW - "+resrate+"</div>";
            }else{
                return "";
            } 
     }else{
         return "";
     }
}else{
    return "";
}