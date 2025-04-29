function movein(){
    if(document.getElementById("idschedule").className == "schedule moveout"){
        document.getElementById('idschedule').className="schedule movein"
        document.getElementById('idscheduleholder').className="scheduleholder movein"
        document.getElementById('idmask1').className="mask1 off"
    }
}

function moveout(){
    document.getElementById('idschedule').className="schedule moveout"
    document.getElementById('idscheduleholder').className="scheduleholder moveout"
    document.getElementById('idmask1').className="mask1 on"

}

