var frame = function(id,left,top,width,height,contenuto,idPannello)
{
    var thisOggetto = this;
    this.id = id;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.contenuto = contenuto;
    this.idPannello = idPannello;
    this.disegna = function()
    {
        $('#centro'+thisOggetto.idPannello).append("<div id='frame_"+thisOggetto.id+"' class='frame' style='position:absolute; left:"+thisOggetto.left+"px; top:"+thisOggetto.top+"px;opacity:1;width:"+thisOggetto.width+"px;height:"+thisOggetto.height+"px'><iframe class='frame"+thisOggetto.idPannello+" iframe' id='iframe"+thisOggetto.id+"' style='width:"+thisOggetto.width+"px;height:"+thisOggetto.height+"px; display:block'src='"+thisOggetto.contenuto+"'></iframe></div>");
    }
}