var wrikeTracker = wrikeTracker || {
    getXmlHttp: function(){
        if (window.XMLHttpRequest)
            return new XMLHttpRequest();

        return new ActiveXObject("Microsoft.XMLHTTP");
    },
    track: function(name, value, accountId){
        if(value==undefined)
            value = "";

        if(accountId==undefined || accountId==null){
            accountId = "";
        }


        var xmlhttp = this.getXmlHttp();
        xmlhttp.open("GET", "/servlet/ajaxstatevent?accountId="+accountId+"&name="+encodeURIComponent(name)+"&value="+encodeURIComponent(value)+"&nocache="+new Date().getTime(), true);
        xmlhttp.send();
    }
}