//add time option

function createOption(value, text){
    var option = document.createElement('option');
    option.text=text;
    option.value=value;
    return option;
}

var hourSelect = document.getElementById("idhour");
var minuteSelect = document.getElementById("idminute")

for(var i=11;i<=20;i++){
    if(i===14){
        hourSelect.add(createOption("","--"));
        i = i+2;
    } 
    else{
        hourSelect.add(createOption(i,i));
    } 
}

for(var i=0;i<=3;i++){
    if(i===0){
        minuteSelect.add(createOption(i*15,"00"));
    }
    else{
        minuteSelect.add(createOption(i*15,i*15));
    }
}

document.getElementById("reservepeople").addEventListener('input',function(){this.value=this.value.replace(/[^1-9]/g,'');});

let reservation=[];

function clearinput(){
    document.getElementById("reservepeople").value = "";
    document.getElementById("reservename").value = "";
    document.getElementById("reservetel").value = "";
    document.getElementById("reservepeople").style.backgroundColor="white";
    document.getElementById("idhour").style.backgroundColor="white";
    document.getElementById("reservename").style.backgroundColor="white";
}

function removereservebutton(x){
    //console.log(x);
    //x.remove();
    reservation.splice(x,1);
    document.getElementById("reserve"+x).remove();
    document.getElementById("toreserveseat"+x).remove();
    //console.log(document.getElementById("reserve"+x).id);
    assignreserveID(document.getElementById("reservelist").getElementsByClassName("reserveframe"));
    //console.log(document.getElementById("reservelist").getElementsByTagName('div'));
}

function showorder(x){
    if(document.getElementById("mode").value=="by time"){
        for(let i=0;i<x.length;i++){
            var order=0;
            for(let j=0;j<x.length;j++){
                if(reservation[i].reservehour*100+reservation[i].reserveminute>reservation[j].reservehour*100+reservation[j].reserveminute){
                    order+=1;
                }
                else if(reservation[i].reservehour*100+reservation[i].reserveminute==reservation[j].reservehour*100+reservation[j].reserveminute){
                    if(i>j){
                        order+=1;
                    }
                }
            }
            x[i].style.transform = "translateY("+order*35+"px)";
            document.getElementsByClassName("plantable")[i].style.transform = "translateY("+order*35+"px)";
        }
    }
    /*
    else if(document.getElementById("mode").value=="by table"){

    }
    */
    else{
        for(let i=0;i<x.length;i++){
            x[i].style.transform = "translateY("+i*35+"px)";
            document.getElementsByClassName("plantable")[i].style.transform = "translateY("+i*35+"px)";
        }
    }
}

document.getElementById("mode").onchange = function(){showorder(document.getElementById("reservelist").getElementsByClassName("reserveframe"));};

function assignreserveID(x){
    for(let i=0;i<x.length;i++){
        x[i].id="reserve"+i;
        document.getElementsByClassName("plantable")[i].id="toreserveseat"+i;
        x[i].getElementsByTagName('button')[0].onclick=function(){removereservebutton(i);};
        /*
        document.getElementsByClassName("toreserveseat")[i].onclick
        */
    }
    showorder(x);

}

function createreservelist(){
    let removereserve = document.createElement("button");
    removereserve.className = "removereserve";
    let frame = document.createElement("div");
    frame.className = "reserveframe";
    frame.innerHTML = document.getElementById("idhour").value + ":" +document.getElementById("idminute").options[document.getElementById("idminute").selectedIndex].text + " " + document.getElementById("reservename").value + " (" + document.getElementById("reservepeople").value + ")";
    let slider = 101 + ((document.getElementById("idhour").value-11)*125) + (document.getElementById("idminute").value*125/60);
    frame.style.left = slider + "px";
    frame.appendChild(removereserve);
    document.getElementById("reservelist").appendChild(frame);

    let toreservetable = document.createElement("div");
    toreservetable.className = "plantable";
    document.getElementById("reservelist").appendChild(toreservetable);

    assignreserveID(document.getElementById("reservelist").getElementsByClassName("reserveframe"));
}

function addreservation(){
    if(document.getElementById("idhour").value != "" && document.getElementById("reservename").value != "" && document.getElementById("reservepeople").value != ""){
        var customer = {};
        customer.no = document.getElementById("reservepeople").value;
        customer.reservehour = document.getElementById("idhour").value;
        customer.reserveminute = document.getElementById("idminute").value;
        customer.name = document.getElementById("reservename").value;
        customer.tel = document.getElementById("reservetel").value;
        reservation.push(customer);
        createreservelist();
        clearinput();
        //console.log(document.getElementById("reserve"+0).onclick);
    }
    else{
        if(document.getElementById("reservepeople").value == ""){
            document.getElementById("reservepeople").style.backgroundColor="rgb(220, 79, 79)";
        }
        else{
            document.getElementById("reservepeople").style.backgroundColor="white";
        }
        if(document.getElementById("idhour").value == ""){
            document.getElementById("idhour").style.backgroundColor="rgb(220, 79, 79)";
        }
        else{
            document.getElementById("idhour").style.backgroundColor="white";
        }
        if(document.getElementById("reservename").value == ""){
            document.getElementById("reservename").style.backgroundColor="rgb(220, 79, 79)";
        }
        else{
            document.getElementById("reservename").style.backgroundColor="white";
        }
    }
    
}