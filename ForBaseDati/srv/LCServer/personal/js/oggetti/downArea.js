var downArea = function()
{
    var thisOggetto = this;
    this.leggiXml = function()
    {
        $.ajax({
            type: "GET",
            url: "xml/web_design.xml",//leggo il file xml(web_design)
            dataType: "xml",
            success: function(xml) {
                var idp = $(xml).find('pannello').attr('id') 
                $(xml).find('menu').each(function(){                       
                    var id = $(this).attr('id');
                    var avviso = $(this).attr('avviso')
                    var etichetta = $(this).attr('etichetta')
                    var icona = $(this).attr('icona')
                    var left = $(this).attr('left')
                    thisOggetto.disegnaMenu(id,etichetta,icona,left) //richiamando questa funzione creo il down_area
                }); 
                $(xml).find('button').each(function(){                       
                    var id = $(this).attr('id');
                    var left = $(this).attr('left')
                    thisOggetto.disegnaPulsante(id,left) //richiamando questa funzione creo il down_area
                });
            }
        });
        
    }
    this.disegnaMenu = function(id,etichetta,icona,left)
    {
        menu1 = new menu('',id,etichetta,icona,left,'')
        menu1.disegna();
    
    }
    this.disegnaPulsante = function(id,left)
    {
        $('#body').append("<div id='btt_"+id+"_down_area' style='position:absolute;left:"+left+"px;top:615px;z-index:7'></div>");
        $.ajax({
            type: "GET",
            url: "xml/web_design.xml",
            dataType: "xml",
            success: function(xml) {
                $(xml).find('button').filter("#"+id+"").find('elemento').each(function(){
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
                    pulsante1 = new pulsante(ide, id, title, type, posizione, currentvalue, label_value);
                    pulsante1.disegna('btt_'+id+'_down_area');
                //inserisci_elementi_button(ide,id,title,type,posizione,currentvalue,label_value)
                });                     
                                       
            }
        });
    }
    this.disegna = function()
    {
        thisOggetto.leggiXml();
    }
        
  
}