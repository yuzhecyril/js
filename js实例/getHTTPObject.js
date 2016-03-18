/**
 * Created by yuzhe on 2016/3/18.
 */
function getHTTPObject(){
    if(typeof XMLHttpRequest=="undefined")
        XMLHttpRequest=function(){
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            }catch (e){}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }catch (e){}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            }catch (e){}
            return false;
        }
    return new XMLHttpRequest();

}