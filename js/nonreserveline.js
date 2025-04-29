let noreservation=[];

function removeline(x){
    document.getElementById("noreserve" + x).remove();
    noreservation.splice(x,1);
    assignlineid();
}

function assignlineid(){
    let n = document.getElementsByClassName("queuebox").length;
    for(let i=0;i<n;i++){
        document.getElementsByClassName("queuebox")[i].id = "noreserve" + i;
        document.getElementById("noreserve" + i).style.left = (5+75*i) + "px" ;
        document.getElementsByClassName("clicksize removecustomer")[i].onclick = function(){removeline(i);};
        document.getElementsByClassName("clicksize settable")[i].id = "nonreservetable" + i;
    }
    //console.log(noreservation);
}

function createqueue(x){
    if(getComputedStyle(document.getElementById("idmask1")).getPropertyValue("visibility")=="hidden"){
        var queuecard = document.createElement("div");
        queuecard.className = "queuebox";
        queuecard.innerHTML = "<br>" + x;
        var totable = document.createElement("div");
        totable.className = "clicksize settable";    
        /*var queuedetail = document.createElement("div");
        queuedetail.className = "clicksize customerdetail";
        queuedetail.innerHTML = "info";*/
        var removequeue = document.createElement("div");
        removequeue.className = "clicksize removecustomer";
        queuecard.appendChild(totable);
        //queuecard.appendChild(queuedetail);
        queuecard.appendChild(removequeue);
        document.getElementById("storeline").appendChild(queuecard);
        noreservation.push(x);
        assignlineid();
    }
    else{
        document.getElementById("reservepeople").value = document.getElementById("reservepeople").value*10+x;
    }
}
