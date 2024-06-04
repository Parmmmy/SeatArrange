window.myRCustomer = new Array();

function setreservationid(myRCustomer){
    for (let i=0;i<myRCustomer.length;i++){
        myRCustomer[i].id="myRCustomer"+i;
        myRCustomer[i].onclick = function(){removereservation(i);};      
    }
    var img = document.createElement("img");
    img.src = "customer.png";
    img.width = 51;
    myRCustomer[myRCustomer.length-1].appendChild(img);
}
function resetreservationid(myRCustomer){
    for (let i=0;i<myRCustomer.length;i++){
        myRCustomer[i].id="myRCustomer"+i;
        myRCustomer[i].onclick = function(){removereservation(i);};      
    }
}

function addreservedcustomer(){
    var div = document.createElement("div");
    div.className="reservedslot";
    myRCustomer.push(div);
    setreservationid(myRCustomer);
    document.getElementById("waitR").appendChild(div);
}

function removereservation(x){
    myRCustomer[x].remove();
    myRCustomer.splice(x,1);
    resetreservationid(myRCustomer);
}