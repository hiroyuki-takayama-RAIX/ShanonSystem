var head = document.getElementsByTagName("head")[0];
var idName;
var idValue;
var sep = ":::::";
for (i=0 ; i<head.childNodes.length ; i++) {
    if (head.childNodes[i].nodeType == "8"){
        var comValue = head.childNodes[i].nodeValue;
        if (comValue.indexOf(sep) != -1) {
            idName = comValue.slice(0,comValue.indexOf(sep));
            idValue = comValue.slice(comValue.indexOf(sep)+sep.length,comValue.length);
            if (!idValue.match(/\S/g)) {
                var style = document.createElement('style');
                let disp_none = document.createTextNode('<!--#' + idName + '{display:none;}-->');
                style.type = 'text/css';
                style.appendChild(disp_none);
                document.head.appendChild(style);
            }
        }
    }
}