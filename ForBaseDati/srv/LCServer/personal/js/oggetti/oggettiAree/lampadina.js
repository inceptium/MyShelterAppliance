arrayImmagini = new Array();
var lampadina = function(idpar,id,left,top,width,height,arrayImg)
{
    var thisOggetto = this;
    this.id = id;
    this.idPannello =idpar;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    if((width==null)||(width==undefined)||(width==''))
    {
        thisOggetto.width = '20';
    }
    if((height==null)||(height==undefined)||(height==''))
    {
        thisOggetto.height = '';
    }
    this.leggiXml = function()
    {
        
        $.ajax({
            type: "GET",
            url: "xml/pannello.xml",
            dataType: "xml",
            success: function(xml) {
                $(xml).find('pannello').filter("#"+idpar+"").find('central_area').find('pulsanteImmagine').filter("#"+id+"").find('elemento').each(function(){
                    var ide = $(this).attr('id');
                    var title = $(this).attr('title');
                    var type = $(this).attr('type');
                    var posizione = 'button';
                    var currentvalue = $(this).attr('currentvalue')
                    var label_value = $(this).attr('label_value')
                    arrayImg.push(ide);
                    arrayImmagini.push(arrayImg)
                    if($('#status_'+ide+'_'+0).length){
                        contatore=contatore+1;
                        ide=ide+'_'+contatore;
                    }else{
                        ide=ide+'_'+0;
                    }
                    thisOggetto.disegnaLampadina(ide, id, title, type, posizione, currentvalue, label_value)
                    
                
                });                     
                                       
            }
        });
        
    }
    this.disegnaLampadina = function(ide, id, title, type, posizione, currentvalue, label_value)
    {
        $('#lm_'+thisOggetto.id).append('<a id="status_'+ide+'"><img id="lamp_img_'+ide+'" src="immagini/luceSpenta.png" style="width:'+thisOggetto.width+'px;height:'+thisOggetto.height+'px"/></a>')
    }
    this.crea = function()
    {
        $('#centro'+thisOggetto.idPannello).append("<div id='lm_"+thisOggetto.id+"' style='position:absolute;left:"+thisOggetto.left+"px;top:"+thisOggetto.top+"px;z-index:7'></div>")
    }
    this.disegna = function()
    {
       
        thisOggetto.crea();
        thisOggetto.leggiXml();
    }
}