/**
 * Created by yuzhe on 2016/3/18.
 */
function getNewContent(){
    var request=getHTTPObject();
    if(request){
        request.open("GET","example.txt",true);
        request.onreadystatechange=function() {
            if (request.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        }
        request.send(null);
    }else {
        alert('sorry,your browser doesn\'t support XMLHttpRequest' );
    }
    alert("function done")
}
addLoadEvent(getNewContent);