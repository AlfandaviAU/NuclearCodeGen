function classic(){
    var x = document.getElementById("serch").value;
    if (isNumeric(x) == true){
        var y = "https://nhentai.net/g/"+x;
        window.open(y, "_blank");
        window.open("index.html");
    } else {    
        x = x.split(" ");
        var z = new Array();
        for (var i = 0; i < x.length; i++){
            if(x[i]!=" "){
                z.push(x[i]);
            }
        }
        var res = "https://nhentai.net/search/?q=";
        for (var j=0; j < z.length; j++){
            if (j==0){
                var temp;
                temp = res + z[j];
                res = temp;
            } else{
                var temp;
                temp = res +"+"+ z[j];
                res = temp;
            }
        }
        window.open(res, "_blank");
        window.open("index.html");
    }
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
