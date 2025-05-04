var currenthour = 11;
var currentminute = 0;

runtime()

function plusminute(){
    currentminute++;
    if(currentminute==60){
        currentminute = 0;
        currenthour+=1;
    }
    if(currentminute<10){
        document.getElementById("mocktime").innerHTML = currenthour+":0"+currentminute;
    }
    else{
        document.getElementById("mocktime").innerHTML = currenthour+":"+currentminute;
    }
}

function runtime(){
    setInterval(plusminute, 1000);
}

var actualtablemax = [2,2,2,2,2,2,2,2,2,2];
var tablemax = actualtablemax.slice();
var actualtabledisplay = [0,2,0,2,1,1,1,1,1,1];
var tabledisplay = actualtabledisplay.slice();
let actualcounter = [1,1,1,1,1,1,1];
let counter = actualcounter.slice();
let countermax = [7,6,5,4,3,2,1];

function createcounter(x,y){
    for(let i=x;i<=y;i++){
        document.getElementById("counter"+(i)).style.backgroundColor="black";
        document.getElementById("counter"+(i)).onclick=function(){clearcounter(x,y);};
        actualcounter[i-1]=0;
        if(i!=7 && i!=y){
            document.getElementById("connect"+(i)).style.visibility="visible";
            document.getElementById("connect"+(i)).onclick=function(){clearcounter(x,y);};
        }
    } 
}

function clearcounter(x,y){
    for(let i=x;i<=y;i++){
        document.getElementById("counter"+(i)).style.backgroundColor="white";
        document.getElementById("counter"+(i)).onclick="";
        actualcounter[i-1]=1;
        if(i!=7 && i!=y){
            document.getElementById("connect"+(i)).style.visibility="hidden";
            document.getElementById("connect"+(i)).onclick="";
        }
    } 
}

function createtable(x,y){
    if(y<=2){
        if(x==1){
            document.getElementById("table12").style.visibility="visible";
            document.getElementById("table12").onclick=function(){this.style.backgroundColor="white";actualtablemax[0]=2;actualtablemax[1]=2;};
            document.getElementById("table12").style.backgroundColor="black";
            document.getElementById("table123").style.visibility="hidden";
            actualtablemax[0]=0;
            actualtablemax[1]=0;
            actualtabledisplay[0]=0;
            actualtabledisplay[1]=2;
            if(actualtabledisplay[2]==3){
                if(actualtablemax[3]==0){
                    actualtablemax[2]=2;
                    actualtabledisplay[2]=1;
                    document.getElementById("table3").style.visibility="visible";
                }
                else{
                    actualtabledisplay[2]=0;
                    document.getElementById("table34").style.visibility="visible";
                }
            }
        }
        else if(x==3 || x==4){
            document.getElementById("table34").style.visibility="hidden";
            document.getElementById("table4").style.visibility="visible";
            document.getElementById("table3").style.visibility="visible";
            document.getElementById("table"+x).style.backgroundColor="black";
            document.getElementById("table"+x).onclick=function(){this.style.backgroundColor="white";actualtablemax[x-1]=2;};
            if(actualtabledisplay[2]==3){
                if(actualtablemax[2]==0){
                    document.getElementById("table3").style.visibility="hidden";
                }
                else if(actualtablemax[2]==2){
                    document.getElementById("table12").style.visibility="visible";
                    document.getElementById("table123").style.visibility="hidden";
                    document.getElementById("table3").style.visibility="visible";
                    actualtabledisplay[2]=1;
                }
            }
            actualtablemax[x-1]=0;
            actualtabledisplay[3]=1;
        }
        else if(x==5 || x==6){
            document.getElementById("table56").style.visibility="hidden";
            document.getElementById("table5").style.visibility="visible";
            document.getElementById("table6").style.visibility="visible";
            document.getElementById("table"+x).style.backgroundColor="black";
            document.getElementById("table"+x).onclick=function(){this.style.backgroundColor="white";actualtablemax[x-1]=2;};
            actualtablemax[x-1]=0;
            actualtabledisplay[4]=1;
            actualtabledisplay[5]=1;
        }
        else if(x==7 || x==8){
            document.getElementById("table78").style.visibility="hidden";
            document.getElementById("table7").style.visibility="visible";
            document.getElementById("table8").style.visibility="visible";
            document.getElementById("table"+x).style.backgroundColor="black";
            document.getElementById("table"+x).onclick=function(){this.style.backgroundColor="white";actualtablemax[x-1]=2;};
            actualtablemax[x-1]=0;
            actualtabledisplay[6]=1;
            actualtabledisplay[7]=1;
        }
        else if(x==9 || x==10){
            document.getElementById("table1020").style.visibility="hidden";
            document.getElementById("table10").style.visibility="visible";
            document.getElementById("table20").style.visibility="visible";
            document.getElementById("table10201").style.visibility="hidden";
            if(x==9){
                document.getElementById("table10").style.backgroundColor="black";
                document.getElementById("table10").onclick=function(){this.style.backgroundColor="white";actualtablemax[8]=2;};
            }
            else if(x==10){
                document.getElementById("table20").style.backgroundColor="black";
                document.getElementById("table20").onclick=function(){this.style.backgroundColor="white";actualtablemax[9]=2;};
            }
            actualtablemax[x-1]=0;
            actualtabledisplay[8]=1;
            actualtabledisplay[9]=1;
        }
    }
    else if(y<=4){
        if(x==1){
            document.getElementById("table12").style.visibility="visible";
            document.getElementById("table12").style.backgroundColor="black";
            document.getElementById("table12").onclick=function(){this.style.backgroundColor="white";actualtablemax[0]=2;actualtablemax[1]=2;};
            document.getElementById("table123").style.visibility="hidden";
            actualtablemax[0]=0;
            actualtablemax[1]=0;
            actualtabledisplay[0]=0;
            actualtabledisplay[1]=2;
            if(actualtabledisplay[2]==3){
                if(actualtablemax[3]==0){
                    actualtablemax[2]=1;
                    actualtabledisplay[2]=1;
                    document.getElementById("table3").style.visibility="visible";
                }
                else{
                    actualtabledisplay[2]=0;
                    document.getElementById("table34").style.visibility="visible";
                    document.getElementById("table4").style.visibility="hidden";
                }
            }
        }
        else if(x==3){
            document.getElementById("table34").style.visibility="visible";
            document.getElementById("table3").style.visibility="hidden";
            document.getElementById("table4").style.visibility="hidden";
            document.getElementById("table34").style.backgroundColor="black";
            document.getElementById("table34").onclick=function(){this.style.backgroundColor="white";actualtablemax[2]=2;actualtablemax[3]=2;};
            actualtablemax[2]=0;
            actualtablemax[3]=0;
            actualtabledisplay[2]=0;
            actualtabledisplay[3]=2;
        }
        else if(x==5){
            document.getElementById("table56").style.visibility="visible";
            document.getElementById("table5").style.visibility="hidden";
            document.getElementById("table6").style.visibility="hidden";
            document.getElementById("table56").style.backgroundColor="black";
            document.getElementById("table56").onclick=function(){this.style.backgroundColor="white";actualtablemax[4]=2;actualtablemax[5]=2;};
            actualtablemax[4]=0;
            actualtablemax[5]=0;
            actualtabledisplay[4]=0;
            actualtabledisplay[5]=2;
        }
        else if(x==7){
            document.getElementById("table78").style.visibility="visible";
            document.getElementById("table7").style.visibility="hidden";
            document.getElementById("table8").style.visibility="hidden";
            document.getElementById("table78").style.backgroundColor="black";
            document.getElementById("table78").onclick=function(){this.style.backgroundColor="white";actualtablemax[6]=2;actualtablemax[7]=2;};
            actualtablemax[6]=0;
            actualtablemax[7]=0;
            actualtabledisplay[6]=0;
            actualtabledisplay[7]=2;
        }
        else if(x==9){
            document.getElementById("table1020").style.visibility="visible";
            document.getElementById("table10").style.visibility="hidden";
            document.getElementById("table20").style.visibility="hidden";
            document.getElementById("table10201").style.visibility="hidden";
            document.getElementById("table1020").style.backgroundColor="black";
            document.getElementById("table1020").onclick=function(){this.style.backgroundColor="white";actualtablemax[8]=2;actualtablemax[9]=2;};
            actualtablemax[8]=0;
            actualtablemax[9]=0;
            actualtabledisplay[8]=0;
            actualtabledisplay[9]=2;
        }
    }
    else if(y==5){
        if(x==1){
            document.getElementById("table12").style.visibility="hidden";
            document.getElementById("table34").style.visibility="hidden";
            document.getElementById("table3").style.visibility="hidden";
            document.getElementById("table4").style.visibility="visible";
            document.getElementById("table123").style.visibility="visible";
            document.getElementById("table123").style.backgroundColor="black";
            document.getElementById("table123").onclick=function(){this.style.backgroundColor="white";actualtablemax[0]=2;actualtablemax[1]=2;actualtablemax[2]=2;};
            actualtablemax[0]=0;
            actualtablemax[1]=0;
            actualtablemax[2]=0;
            actualtabledisplay[0]=0;
            actualtabledisplay[1]=0;
            actualtabledisplay[2]=3;
        }
        else if(x==9){
            document.getElementById("table1020").style.visibility="hidden";
            document.getElementById("table10").style.visibility="hidden";
            document.getElementById("table20").style.visibility="hidden";
            document.getElementById("table10201").style.visibility="visible";
            document.getElementById("table10201").style.backgroundColor="black";
            document.getElementById("table10201").onclick=function(){this.style.backgroundColor="white";actualtablemax[8]=2;actualtablemax[9]=2;};
            actualtablemax[8]=0;
            actualtablemax[9]=0;
            actualtabledisplay[8]=0;
            actualtabledisplay[9]=2;
        }
    }
    else if(y==6){
        if(x==1){
            document.getElementById("table12").style.visibility="hidden";
            document.getElementById("table34").style.visibility="hidden";
            document.getElementById("table3").style.visibility="hidden";
            document.getElementById("table4").style.visibility="visible";
            document.getElementById("table123").style.visibility="visible";
            document.getElementById("table123").style.backgroundColor="black";
            document.getElementById("table123").onclick=function(){this.style.backgroundColor="white";actualtablemax[0]=2;actualtablemax[1]=2;actualtablemax[2]=2;};
            actualtablemax[0]=0;
            actualtablemax[1]=0;
            actualtablemax[2]=0;
            actualtabledisplay[0]=0;
            actualtabledisplay[1]=0;
            actualtabledisplay[2]=3;
        }
    }
}

function checkcounter(x){
    countermax[6]=counter[6];
    for(let i=0;i<counter.length-1;i++){
        if(counter[i]==1){
            countermax[i]=1;
            for(let j=i+1;j<counter.length;j++){
                if(counter[j]==1){
                    countermax[i]+=1;
                }
                else{
                    break;
                }
            }
        }
        else{countermax[i]=0};
    }
    //console.log(countermax);
    for(let i=0;i<counter.length;i++){
        if(x<=countermax[i]){
            for(j=x;j>0;j--){
                counter[i+j-1]=0;
                //document.getElementById("counter"+(i+j)).style.backgroundColor="black";
                //document.getElementById("counter"+(i+j)).onclick=function(){clearcounter(i+1,i+x);};
                if(j!=x){
                    //document.getElementById("connect"+(i+j)).style.visibility="visible";
                    //document.getElementById("connect"+(i+j)).onclick=function(){clearcounter(i+1,i+x);};
                }
            }
            return "C"+(i+1);
        }
    }
    return "";
}
/*
console.log(checkcounter(3));
console.log(checkcounter(3));
console.log(checkcounter(1));
console.log(checkcounter(2));
*/

function checktable(x){
    if(x==1){
        if(tabledisplay[2]==1 && tablemax[2]!=0){
            tablemax[2]=0;
            return "T"+3;
        }
        let k=checkcounter(x);
        if(k!=""){
            return k;
        }
        for(let i=4;i<10;i++){
            if(tablemax[i]==2){
                tablemax[i]=0;
                if(tabledisplay[i]==0){
                    tabledisplay[i]=1;
                    tabledisplay[i+1]=1;
                }
                return "T"+(i+1);
            }
        }
        if(tablemax[2]==2){
            tablemax[2]=0;
            tabledisplay[2]=1;
            tabledisplay[3]=1;
            return "T"+3;
        }
        if(tablemax[3]==2){
            tablemax[3]=0;
            return "T"+4;
        }
        
    }
    else if(x==2){
        for(let i=4;i<10;i++){
            if(tablemax[i]==2){
                tablemax[i]=0;
                if(tabledisplay[i]==0){
                    tabledisplay[i]=1;
                    tabledisplay[i+1]=1;
                }
                return "T"+(i+1);
            }
        }
        if(tabledisplay[2]==3 && tablemax[3]==2){
            return "T"+4;
        }
        let k=checkcounter(x);
        if(k!=""){
            return k;
        }
        if(tablemax[3]==2){
            tablemax[3]=0;
            if(tablemax[2]==2){
                tablemax[2]=1;
            }
            tabledisplay[2]=1;
            tabledisplay[3]=1;
            return "T"+4;
        }
        let checklarge = false;
        for(let i=0;i<noreservation.length;i++){
            if(noreservation.length[i]>=3){
                checklarge = true;
            }
        }
        if(!checklarge){
            if(tablemax[0]==2){
                tablemax[0]=0;
                tablemax[1]=0;
                tabledisplay[0]=0;
                tabledisplay[1]=2;
                if(tabledisplay[2]==3){
                    if(tablemax[3]==0){
                        tabledisplay[2]=1;
                        tablemax[2]=1;
                    }
                    else{tabledisplay[2]=0;}
                }
                return "T"+1;
            }
        }
    }
    else if(x==3 || x==4){
        if(tablemax[0]==2){
            tablemax[0]=0;
            tablemax[1]=0;
            tabledisplay[0]=0;
            tabledisplay[1]=2;
            if(tabledisplay[2]==3){
                if(tablemax[3]==0){
                    tabledisplay[2]=1;
                    tablemax[2]=1;
                }
                else{tabledisplay[2]=0;}
            }
            return "T"+1;
        }
        if(tablemax[2]+tablemax[3]>2){
            tablemax[2]=0;
            tablemax[3]=0;
            tabledisplay[2]=0;
            tabledisplay[3]=2;
            return "T"+3;
        }
        if(tablemax[8]==2 && tablemax[9]==2){
            tablemax[8]=0;
            tablemax[9]=0;
            tabledisplay[8]=0;
            tabledisplay[9]=2;
            return "T"+9;
        }
        if(tablemax[4]==2 && tablemax[5]==2){
            tablemax[4]=0;
            tablemax[5]=0;
            tabledisplay[4]=0;
            tabledisplay[5]=2;
            return "T"+5;
        }
        let k=checkcounter(x);
        if(k!=""){
            return k;
        }
        if(tablemax[6]==2 && tablemax[7]==2){
            tablemax[6]=0;
            tablemax[7]=0;
            tabledisplay[6]=0;
            tabledisplay[7]=2;
            return "T"+7;
        }
    }
    else if(x==5){
        if(tablemax[8]==2 && tablemax[9]==2){
            tablemax[8]=0;
            tablemax[9]=0;
            tabledisplay[8]=0;
            tabledisplay[9]=2;
            return "T"+9;
        }
        if(tablemax[0]+tablemax[1]+tablemax[2]>4){
            tablemax[0]=0;
            tablemax[1]=0;
            tablemax[2]=0;
            tabledisplay[0]=0;
            tabledisplay[1]=0;
            tabledisplay[2]=3;
            return "T"+1;
        }
        let k=checkcounter(x);
        if(k!=""){
            return k;
        }
    }
    else if(x==6){
        if(tablemax[0]+tablemax[1]+tablemax[2]>4){
            tablemax[0]=0;
            tablemax[1]=0;
            tablemax[2]=0;
            tabledisplay[0]=0;
            tabledisplay[1]=0;
            tabledisplay[2]=3;
            return "T"+1;
        }
        let k=checkcounter(x);
        if(k!=""){
            return k;
        }
    }
    /*
    else if(x==7){
        
    }
    else if(x==8){
        
    }
    */
   return "";
}

assigntable();

function assigntable(){
    setInterval(checkline, 100);
}

function totable(x,n){
    let a = returnnumber(x);
    let b = returntext(x);
    if(b == "C"){
        createcounter(a,a+n-1);
    }
    else if(b == "T"){
        createtable(a,n);
    }
}

function checkline(){
    if(noreservation.length!=0 || reservation.length!=0){
        tablemax = actualtablemax.slice();
        tabledisplay = actualtabledisplay.slice();
        counter = actualcounter.slice();

        for(let i=0;i<reservation.length;i++){
            if(currenthour*60+currentminute-reservation[i].reservehour*60-reservation[i].reserveminute>-60){
                document.getElementById("toreserveseat"+i).innerHTML = checktable(reservation[i].no);
            }
        }

        for(let i=0;i<noreservation.length;i++){
            document.getElementById("nonreservetable"+i).innerHTML = checktable(noreservation[i]);
            if (document.getElementById("nonreservetable"+i).innerHTML!=""){
                document.getElementById("nonreservetable"+i).onclick=function(){totable(document.getElementById("nonreservetable"+i).innerHTML,noreservation[i]);removeline(i);};
            }
        }
        //console.log(tablemax);
    }
}

function returnnumber(x){
    let a = Number(x.substring(1));
    return a;
}

function returntext(x){
    let a = x[0];
    return a;
}

