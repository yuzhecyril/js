/**
 * Created by yuzhe on 2016/3/20.
 */
function positionMessage(id,zc,zcx,zcy){
    var elem=document.getElementById(id);
    elem.style.position=zc;
    elem.style.left=zcx;
    elem.style.top=zcy;
    moveElement(id,200,150,10);
}
function moveElement(elementID,final_x,final_y,interval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos == final_x && ypos == final_y) {
        return true;
    }
    if (xpos < final_x) {
        xpos++;
    }
    if (xpos > final_x) {
        xpos--;
    }
    if (ypos < final_y) {
        ypos++;
    }
    if (ypos > final_y) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
    movement = setTimeout(repeat,interval);
}
addLoadEvent(function(){
    positionMessage("zz","absolute","50px","100px");
});