var menu = function(ide,id,etichetta,icona,left,top)
{
    var thisOggetto = this;
    this.idPannello = ide;
    this.id = id;
    this.etichetta = etichetta;
    this.icona = icona;
    this.left = left;
    this.top = top;
    this.leggiXmlCA = function()
    {
        var top2;
        var id2="4"+id+"";
        if(parseInt(thisOggetto.top, 10)>220){
            top2=parseInt(thisOggetto.top,10)-parseInt('200', 10)-parseInt(top,10);
        }
        
        $('#centro'+thisOggetto.idPannello).append("<div  style='position:absolute; left:"+thisOggetto.left+"px; top:"+thisOggetto.top+"px'><a id='img_"+thisOggetto.id+"' class='menu_img' href='javascript:mostraMenu("+id2+")'></a><div id='"+id2+"' class='div_menu' style='position:absolute; top:"+top2+"px;'></div></div>");
        $('.menu_img').css('background','url("'+thisOggetto.icona+'")');
        $.ajax({
            type: "GET",
            url: "xml/pannello.xml",
            dataType: "xml",
            success: function(xml) {
                $(xml).find('pannello').filter("#"+ide+"").find('central_area').find('menu').filter("#"+id+"").find('elemento').each(function(){
                    var ide = $(this).attr('id');

                    var title = $(this).attr('title');
                    var type = $(this).attr('type');
                    var posizione = 'menu';
                    var currentvalue = $(this).attr('currentvalue')
                    var label_value = $(this).attr('label_value')
                    if($('#status_'+ide+'_'+0).length){
                        contatore=contatore+1;
                        ide=ide+'_'+contatore;
                    }else{
                        ide=ide+'_'+0;
                    }
                    pulsante1 = new pulsante(ide, id, title, type, posizione, currentvalue, label_value) 
                    pulsante1.disegna('4'+id+'');
                });                     
                                       
            }
        });
    }
    this.leggiXml = function()
    {
        var id2='1'+id+''
        left = parseInt(left, 10) + 50;
        var top='620';
        var top2 ='410';
        $('#body').append("<div class='bt_pie'><a class='a_bt_pie "+thisOggetto.idPannello+"' href='javascript:mostraMenu("+id2+")' style='top:"+top+"px; left:"+left+"px; position: absolute; z-index:5' id='id2'>"+etichetta+"</a><div id='"+id2+"' class='div_menu' style='top:"+top2+"px;left:"+left+";'></div></div></div>");
        $.ajax({
            type: "GET",
            url: "xml/web_design.xml",
            dataType: "xml",
            success: function(xml) {
                $(xml).find('menu').filter("#"+id+"").find('elemento').each(function(){
                    var ide = $(this).attr('id');
                    var title = $(this).attr('title');
                    var type = $(this).attr('type');
                    var posizione = 'down_area';
                    var currentvalue = $(this).attr('currentvalue')
                    var label_value = $(this).attr('label_value')
                    if($('#status_'+ide+'_'+0).length){
                        contatore=contatore+1;
                        ide=ide+'_'+contatore;
                    }else{
                        ide=ide+'_'+0;
                    }
                    pulsante1 = new pulsante(ide,id,title,type,posizione,currentvalue,label_value)
                    pulsante1.disegna('1'+id+'')
                });                     
                                       
            }
        });
    }
    this.leggiXmlDA = function()
    {
    var id2='3'+id+''
    var top = '560';
    var top2 = '360';
    var dispositivo = 'ipad';
    switch(dispositivo)
    {
        
        case undefined:
            top = '560'
            top2= '360';
            break;
        case ' ':
            top = '560'
            top2= '360';
            break;
        case '':
            top = '560'
            top2= '360';
            break;
        case 'ipad':
            top = '560'
            top2= '360';
            break;
        case 'android_samsung':
            top = '320';
            top2 = '115';
            break;
        default:
            top = '560'
            top2= '360';
            break;
    }
     $('#div2').empty();
    
    $('#div2').append("<div class='bt_down_area "+thisOggetto.idPannello+"'><a class='a_bt_down_area' href='javascript:mostraMenu("+id2+")' style='top:"+top+"px; left:"+left+"px; position: absolute; z-index:5' id='id2'>"+etichetta+"</a><div id='"+id2+"' class='div_menu' style='top:"+top2+"px;left:"+left+";'></div></div>");

          
        $.ajax({
            type: "GET",
            url: "xml/pannello.xml",
            dataType: "xml",
            success: function(xml) {
                
                $(xml).find('pannello').filter("#"+thisOggetto.idPannello+"").find('down_area').find('menu').filter("#"+id+"").find('elemento').each(function(){
                    
                    document.getElementById('sotto_centro').style.display = "block" 
                    var idElemento = $(this).attr('id');
                    var title = $(this).attr('title');
                    var type= $(this).attr('type');
                    var posizione = 'down_area';
                    var currentvalue = $(this).attr('currentvalue');
                    var label_value= $(this).attr('label_value')
                    if($('#status_'+idElemento+'_'+0).length){
                        contatore=contatore+1;
                        idElemento=idElemento+'_'+contatore;
                    }else{
                        idElemento=idElemento+'_'+0;
                    }
                    
                    //$('#3'+id+'').append("<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+ide+"' class='img_laterale'></img><a class='a_bt_menu' style='position: absolute; z-index:5' id='status_"+ide+"'href='#'>"+title+"</a></div>");
                    pulsante1 = new pulsante(idElemento,id,title,type,posizione,currentvalue,label_value)
                    pulsante1.disegna(+id2)
                });                     
                                       
            }
        });

    }
    this.disegna2 = function()
    {
        thisOggetto.leggiXmlDA();
    }
    this.disegna = function()
    {
    
        
        if(this.top=='')
        {
            thisOggetto.leggiXml();
        }else{
             thisOggetto.leggiXmlCA();
        }
    }
}
function mostraMenu(menuCorrente) { //funzione che permette di nascondere e visualizzare i menu di central_area, down_area e menu_pie
    if (document.getElementById) {
        questoMenu = document.getElementById(menuCorrente).style
        if (questoMenu.display == "block") {
            questoMenu.display = "none"
        }
        else {
            questoMenu.display = "block"
        }
        return false
    }
    else {
        return true
    }
}