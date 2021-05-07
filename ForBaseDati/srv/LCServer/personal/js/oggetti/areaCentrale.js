contatore = 0;  
var areaCentrale = function(id)
{
    var thisOggetto = this;
    this.id = id;
    this.leggiXml = function()
    {
        $.ajax({
            type: "GET",
            url: "xml/pannello.xml",
            dataType: "xml",
            async:false,
            success: function(xml) {
  
                if($('#centro'+thisOggetto.id).length==0)
                {
                    $('#centro').append('<div class="centri" id="centro'+thisOggetto.id+'"></div>')
                    var img = $(xml).find('pannello').filter("#"+thisOggetto.id+"").find('central_area').attr('img')
                    if(img!=''){
                        if(img!=' '){
                            if(img!=undefined)
                            {
                                $('#centro'+thisOggetto.id).append("<img src='"+img+"'></img>");
                            }
                        }
                    }
                  
                
                    $(xml).find('pannello').filter("#"+thisOggetto.id+"").find('central_area').find('menu').each(function(){
                        var id = $(this).attr('id');
                        var left = $(this).attr('left');
                        var top = $(this).attr('top');
                        var etichetta = $(this).attr('etichetta');
                        var icona = $(this).attr('icona');
                        var idpannello = thisOggetto.id;
                        var imgA = $(this).attr('imgA');
                    
                        menu1 = new menu(idpannello,id,etichetta,imgA,left,top)
                        menu1.disegna();
                    });
                    $(xml).find('pannello').filter("#"+thisOggetto.id+"").find('central_area').find('frame').each(function(){
                        var id = $(this).attr('id');
                        var left = $(this).attr('left');
                        var top = $(this).attr('top');
                        var width = $(this).attr('width');
                        var height = $(this).attr('height');
                        var contenuto = $(this).text();
                        frame1 = new frame(id,left,top,width,height,contenuto,thisOggetto.id)
                        frame1.disegna();

                    });
                    $(xml).find('pannello').filter("#"+thisOggetto.id+"").find('central_area').find('text_box').each(function(){
                        var id = $(this).attr('id');
                        var left = $(this).attr('left');
                        var top = $(this).attr('top');
                        var etichetta = $(this).attr('etichetta');
                        var opaco = $(this).attr('opaco');
                        var colore_sfondo = $(this).attr('colore_sfondo');
                        var bordo = $(this).attr('bordo');
                        var ide =$(this).find("elemento").attr("id");
                        var immagine_sfondo = $(this).attr('immagine_sfondo');
                        text_box1 = new text_box(id,left,top,etichetta,opaco,colore_sfondo,bordo,ide,immagine_sfondo,thisOggetto.id)
                        text_box1.disegna();
                    });
                    $(xml).find('pannello').filter("#"+thisOggetto.id+"").find('central_area').find('button').each(function(){
                        var id = $(this).attr('id');
                        var left = $(this).attr('left');
                        var top = $(this).attr('top');
                        esternoButton1 = new esternoButton(thisOggetto.id,id,left,top);
                        esternoButton1.disegna();
                    });
                    $(xml).find('pannello').filter("#"+thisOggetto.id+"").find('central_area').find('pulsanteImmagine').each(function(){
                        var id = $(this).attr('id');
                        var left = $(this).attr('left');
                        var top = $(this).attr('top');
                        var width = $(this).attr('width');
                        var height = $(this).attr('height');
                        var imgAttivo = $(this).attr('imgAttivo');
                        var imgDisattivo = $(this).attr('imgDisattivo');
                        var arrayImg = new Array();
                        arrayImg.push(imgAttivo, imgDisattivo)
                        lampadina1 = new lampadina(thisOggetto.id,id,left,top,width,height,arrayImg);
                        lampadina1.disegna();
                    });
                        
                    document.getElementById('sotto_centro').style.display = "none"       
                    $(xml).find('pannello').filter("#"+thisOggetto.id+"").find('down_area').find('menu').each(function(){
        
                        var id = $(this).attr('id');
                        var etichetta = $(this).attr('etichetta');
                        var left = $(this).attr('left');
                        menu1 = new menu(thisOggetto.id,id,etichetta,'',left,'')    
                        menu1.disegna2();
                    });
                             
                                       
                }
            }
        });
        
    }
    this.disegna = function()
    {
        //$('#centro').empty();
        if($('#centro'+thisOggetto.id).length==0)
        {
            thisOggetto.leggiXml();
        }
        $('.centri').css('display','none');
        var src1 = null;
        src1 = $('.iframe').attr('src'); 
        
        /**
        if((src1!=null))
        {
            if(src1.indexOf('+')==-1)
            {
                $('.iframe').attr('src',src1+'+');
            }
        }
        **/
        if($('.frame'+thisOggetto.id).length>0)
        {
            var src = $('.frame'+thisOggetto.id).attr('src');
            src = src.replace('+', '')
            $('.frame'+thisOggetto.id).attr('src',src);
            
        }
        document.getElementById('centro'+thisOggetto.id).style.display="block"
    }
}