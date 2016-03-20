/**
 * Created by yuzhe on 2016/3/20.
 */
function styleElementSiblings(tag,theClass){
    var tagName=document.getElementsByTagName(tag);
    var elem;
    for (var i=0;i<tagName.length;i++){
        elem=getNextElement(tagName[i].nextSibling);
        addClass(elem,theClass);
    }
}
function getNextElement(node){
    if(node.nodeType==1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling)
    }
    return null;
}
function addClass(target,value){
    if(!target.className){
        target.className=value;
    }
    else {
        target.className+=" "+value;
    }
}
addLoadEvent(function(){
    styleElementSiblings("h1","intro");
});