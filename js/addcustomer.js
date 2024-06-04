window.line=[]
var C

window.myCustomer = new Array();
var number

function readqueue(line){
    number = "&nbsp&nbsp&nbsp&nbsp&nbsp&thinsp;"
    for (let i=0;i<line.length;i++){
        number += line[i] + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&thinsp;"
    }
}

function setid(myCustomer){
    for (let i=0;i<myCustomer.length;i++){
        //myCustomer[i].id="myCustomer"+i;
        myCustomer[i].onclick = function(){removecustomer(i);};
    }
}

function addcustomer(){
    var img = document.createElement("img");
    img.src = "customer.png";
    img.width = 51;
    myCustomer.push(img);
    document.getElementById("wait").appendChild(img);
    setid(myCustomer);
    readqueue(line);
    document.getElementById("queuing0").innerHTML = "queuing: " + line.length;
    document.getElementById("queuing").innerHTML = number;
}

function removecustomer(x){
    myCustomer[x].remove();
    myCustomer.splice(x,1);
    line.splice(x,1);
    setid(myCustomer);
    readqueue(line);
    document.getElementById("queuing0").innerHTML = "queuing: " + line.length;
    document.getElementById("queuing").innerHTML = number;
}

function queue(){
    if (document.getElementById("addcustomer").value != 0) {
        line.push(document.getElementById("addcustomer").value);
        addcustomer();
    }
}

function numqueue(x){
    if(document.getElementById("reservation").checked){
        addreservedcustomer();
    }
    else{
        line.push(x);
        addcustomer();
    }

}