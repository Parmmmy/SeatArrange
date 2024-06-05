window.myRCustomer = []
window.reservedline = []
window.reservedname = []
window.reservedtime = []


function setreservationid(myRCustomer){
    for (let i=0;i<myRCustomer.length;i++){
        myRCustomer[i].id="myRCustomer"+i;
        myRCustomer[i].onclick = function(){removereservation(i);};      
    }
}
function resetreservationid(myRCustomer){
    for (let i=0;i<myRCustomer.length;i++){
        myRCustomer[i].id="myRCustomer"+i;
        myRCustomer[i].onclick = function(){removereservation(i);};      
    }
}

function setreservationinfo(){
    let name = prompt("Name:","Okyaku San");
    let time = prompt("Reservation Time:","0000");
    reservedname.push(name);
    reservedtime.push(time);
}

function setoutput(x){
    var img = document.createElement("img");
    img.src = "customer.png";
    img.width = 51;
    myRCustomer[x].appendChild(img);
    const info = document.createElement("p");
    info.style = "right:5px;top:0px;position:absolute;"
    //const node = document.createTextNode(reservedname[x] + reservedline[x] + reservedtime[x]);
    //info.appendChild(node);
    info.innerHTML = reservedname[x] + ": " + reservedline[x] + " seats at " + reservedtime[x];
    myRCustomer[x].appendChild(info);
}

function addreservedcustomer(){
    var div = document.createElement("div");
    div.className="reservedslot";
    myRCustomer.push(div);
    setreservationid(myRCustomer);
    document.getElementById("waitR").appendChild(div);
    setreservationinfo();
    setoutput(myRCustomer.length-1)
}

function removereservation(x){
    myRCustomer[x].remove();
    myRCustomer.splice(x,1);
    resetreservationid(myRCustomer);
}

function numRqueue(x){
    if(document.getElementById("reservation").checked){
        reservedline.push(x);
        addreservedcustomer();
    }
}