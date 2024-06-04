var tablename=[0,0,0,0,0,0,0,0]

function filltable(){
    //console.log(document.getElementById("reservation").checked)
    for (let i=0;i<tablename.length;i++){
        if(tablename[i] == 0 && line.length!=0){
            console.log(i+"it work!");
            tablename[i] = line[0];
            document.getElementById("table"+i).innerHTML=tablename[i];
            document.getElementById("table"+i).style.background='#FF7F7F';
            removecustomer(0);
        }
    }
}

function kick(x){
    tablename[x]=0;
    document.getElementById("table"+x).innerHTML=" ";
    document.getElementById("table"+x).style.background=null;
}