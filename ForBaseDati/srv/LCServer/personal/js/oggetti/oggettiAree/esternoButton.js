var esternoButton = function(idpar,id,left,top)
{
    var thisOggetto = this;
    this.id = id;
    this.left = left;
    this.top = top;
    this.idPannello = idpar;
    this.leggiXml = function()
    {
        $.ajax({
            type: "GET",
            url: "xml/pannello.xml",
            dataType: "xml",
            success: function(xml) {
                $(xml).find('pannello').filter("#"+idpar+"").find('central_area').find('button').filter("#"+id+"").find('elemento').each(function(){
                    var ide = $(this).attr('id');
                    var title = $(this).attr('title');
                    var type = $(this).attr('type');
                    var posizione = 'button';
                    var currentvalue = $(this).attr('currentvalue')
                    var label_value = $(this).attr('label_value')
                    if($('#status_'+ide+'_'+0).length){
                        contatore=contatore+1;
                        ide=ide+'_'+contatore;
                    }else{
                        ide=ide+'_'+0;
                    }
                    pulsante1 = new pulsante(ide, id, title, type, posizione, currentvalue, label_value)
                    pulsante1.disegna('btt_'+thisOggetto.id);
                
                });                     
                                       
            }
        });
    }
    this.crea = function()
    {
        $('#centro'+thisOggetto.idPannello).append("<div id='btt_"+thisOggetto.id+"' style='position:absolute;left:"+thisOggetto.left+"px;top:"+thisOggetto.top+"px;z-index:7'></div>")
    }
    this.disegna = function()
    {
        thisOggetto.crea();
        thisOggetto.leggiXml();
    }
}