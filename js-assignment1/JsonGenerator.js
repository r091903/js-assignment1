var fs = require('fs');
//part1----------------------------------------------------------
var files=["inputData/india2011.csv","inputData/indiaST2011.csv","inputData/indiaSC2011.csv"];
var arr=[];
var he_array=[];
var sum=[];
for (var file = 0; file < files.length; file++) {
  getClub(files[file]);
}
obj_lit={key:"literate"};
obj_illit={key:"illiterate"};
for (var i = 0; i < he_array.length; i++) {
  if(he_array[i].search("illiterate")>=0){
    if(he_array[i].search("females")>=0){
      obj_illit["females"]=sum[i];
    }
    else {
      obj_illit["males"]=sum[i];
    }
  }
  else{
    if(he_array[i].search("females")>=0){
      obj_lit["females"]=sum[i];
    }
    else {
      obj_lit["males"]=sum[i];
    }
  }
}
var str=JSON.stringify(obj_lit);
arr.push(str);
str=JSON.stringify(obj_illit);
arr.push(str);
fs.writeFile("outPutFiles/clubMaleFemale.json","["+arr+"]",function(err){
  if(err){
    return console.error(err);
  }
});


function getClub(file) {
  var dat1=fs.readFileSync(file);
  var j=0;
  var filter_line=[];
  line=dat1.toString().split("\n");
  for (var i = 1; i < line.length; i++) {
    d="Total";e="All ages";
    c1=line[i].search(d);
    c2=line[i].search(e);
    if(c1>=0 && c2>=0){
      filter_line[j]=line[i];
      j++;
    }
  }
  firstline=line[0];
  firstline=firstline.replace("Illiterate - Males","males_illiterate");
  firstline=firstline.replace("Illiterate - Females","females_illiterate");
  firstline=firstline.replace("Literate - Males","males_literate");
  firstline=firstline.replace("Literate - Females","females_literate");
  header=firstline.split(",");
  objs={};
  var males_illiterate=0;
  var males_literate=0;
  var females_illiterate=0;
  var females_literate=0;
  for (var i = 0; i < header.length; i++) {
    if(header[i]==="males_illiterate"){
        males_illiterate=i;
    }
    if(header[i]==="males_literate"){
        males_literate=i;
    }
    if(header[i]==="females_illiterate"){
        females_illiterate=i;
    }
    if(header[i]==="females_literate"){
        females_literate=i;
    }
  }
  var se=[];
  se.push(males_literate);
  se.push(males_illiterate);
  se.push(females_literate);
  se.push(females_illiterate);
  for (var i = 0; i < filter_line.length; i++) {
    cur=filter_line[i].split(",");
    for(k in se){
      if((he_array.indexOf(header[se[k]]))>=0){
        ind=he_array.indexOf(header[se[k]]);
        sum[ind]=sum[ind]+Number(cur[se[k]]);
      }
      else{
        he_array.push(header[se[k]]);
        ind=he_array.indexOf(header[se[k]]);
        sum[ind]=Number(cur[se[k]]);
      }
    }
  }
}

//part2-----------------------------------------------

//var files=["india2011.csv","indiaST2011.csv","indiaSC2011.csv"];
var arr=[];
var he_array=[];
var sum=[];
for (var file = 0; file < files.length; file++) {
  getNorthEastClub(files[file]);
}
obj_lit={key:"literate"};
obj_illit={key:"illiterate"};
for (var i = 0; i < he_array.length; i++) {
  if(he_array[i].search("illiterate")>=0){
    if(he_array[i].search("females")>=0){
      obj_illit["females"]=sum[i];
    }
    else {
      obj_illit["males"]=sum[i];
    }
  }
  else{
    if(he_array[i].search("females")>=0){
      obj_lit["females"]=sum[i];
    }
    else {
      obj_lit["males"]=sum[i];
    }
  }
}
var str=JSON.stringify(obj_lit);
arr.push(str);
str=JSON.stringify(obj_illit);
arr.push(str);
fs.writeFile("outPutFiles/northeast.json","["+arr+"]",function(err){
  if(err){
    return console.error(err);
  }
});


function getNorthEastClub(file) {
  var dat1=fs.readFileSync(file);
  var j=0;
  var count=0;
  var filter_line=[];
  line=dat1.toString().split("\n");
  state=["ASSAM","ARUNACHAL PRADESH","MANIPUR","MEGHALAYA","MIZORAM","TRIPURA","NAGALAND"];
  for (var i = 1; i < line.length; i++) {
    d="Total";e="All ages";
    c1=line[i].search(d);
    c2=line[i].search(e);
    if(c1>=0 && c2>=0){
      count=0;
      for (var k = 0; k < state.length; k++) {
        if(line[i].search(state[k])>=0){
          count++;
        }
      }
      if(count>0){
        filter_line[j]=line[i];
        j++;
      }
    }
  }

  firstline=line[0];
  firstline=firstline.replace("Illiterate - Males","males_illiterate");
  firstline=firstline.replace("Illiterate - Females","females_illiterate");
  firstline=firstline.replace("Literate - Males","males_literate");
  firstline=firstline.replace("Literate - Females","females_literate");
  header=firstline.split(",");
  objs={};
  var males_illiterate=0;
  var males_literate=0;
  var females_illiterate=0;
  var females_literate=0;
  for (var i = 0; i < header.length; i++) {
    if(header[i]==="males_illiterate"){
        males_illiterate=i;
    }
    if(header[i]==="males_literate"){
        males_literate=i;
    }
    if(header[i]==="females_illiterate"){
        females_illiterate=i;
    }
    if(header[i]==="females_literate"){
        females_literate=i;
    }
  }
  var se=[];
  se.push(males_literate);
  se.push(males_illiterate);
  se.push(females_literate);
  se.push(females_illiterate);

  for (var i = 0; i < filter_line.length; i++) {
    cur=filter_line[i].split(",");
    for(k in se){
      if((he_array.indexOf(header[se[k]]))>=0){
        ind=he_array.indexOf(header[se[k]]);
        sum[ind]=sum[ind]+Number(cur[se[k]]);
      }
      else{
        he_array.push(header[se[k]]);
        ind=he_array.indexOf(header[se[k]]);
        sum[ind]=Number(cur[se[k]]);
      }
    }
  }
}
//part3-----------------------------------------

var state=[];
var arr=[];
//var files=["india2011.csv","indiaST2011.csv","indiaSC2011.csv"];
for (var file = 0; file < files.length; file++) {
  getStateWise(files[file]);
}
var str=JSON.stringify(state);
arr.push(str);

fs.writeFile("outPutFiles/StateWise.json",arr,function(err){
  if(err){
    return console.error(err);
  }
});

function getStateWise(file){
  var dat1=fs.readFileSync(file);
  var j=0;
  var filter_line=[];
  line=dat1.toString().split("\n");
  for (var i = 1; i < line.length; i++) {
    d="Total";e="All ages";
    c1=line[i].search(d);
    c2=line[i].search(e);
    if(c1>=0 && c2>=0){
      filter_line[j]=line[i];
      j++;
    }
  }
  firstline=line[0];
  firstline=firstline.replace("Area Name","area");
  firstline=firstline.replace("Literate - Persons","literatep");
  firstline=firstline.replace("Illiterate - Persons","illiterate");
  header=firstline.split(",");
  var literate=0;
  var illiterate=0;
  var area=0;
  for (var i = 0; i < header.length; i++) {
    if(header[i]==="area"){
        area=i;
    }
    if(header[i]==="literatep"){
        literate=i;
    }
    if(header[i]==="illiterate"){
        illiterate=i;
    }
  }
  objs={};
  var index;
  var count=0;
  for (var i = 0; i < filter_line.length; i++) {
    cur=filter_line[i].split(",");
    for (var j = 0; j < state.length; j++) {
      if(state[j]["area"]===cur[area]){
        state[j]["illiterate"]+=Number(cur[illiterate]);
        state[j]["literate"]+=Number(cur[literate]);
        count++;
      }
    }
    if(count>0){

    }
    else{
      objs.area=cur[area];
      objs.illiterate=Number(cur[illiterate]);
      objs.literate=Number(cur[literate]);
      state.push(objs);
      objs={};
    }
  }
}
