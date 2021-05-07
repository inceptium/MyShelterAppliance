var cambiaStato = function()
{
    var thisOggetto = this;
    this.leggiXml = function()
    {
        
        $.ajax({
            type: "GET",
            url: "http://"+window.location.host.toString()+"/command=get?elements_status",
            dataType: "xml",
            error: function(xml){
                thisOggetto.leggiXml();
            },
            success: function(xml) {
                if(contatorep==0)
                {
                    $('#pallinos').attr('src','img/SoloLedNero.png');
                
                }else{

                    $('#pallinos').attr('src','img/SoloLedRosso.png');
                
                }
                if(contatorep==0)
                {
                    contatorep=1;
                }else{
                    contatorep=0;
                }
       
                $(xml).find('elemento').each(function(){
                    var testo=$(this).attr("currenttextvalue").toString();
                    var id_elementoLeto=$(this).attr("id").toString();
                    var stato_elemento=$(this).attr("status");
                    var tipo_elemento=$(this).attr("type");
                    var valore_label=$(this).attr("label_value")
                    var valore_corrente=$(this).attr("currentvalue")
                    var array = thisOggetto.cercaImmagini(id_elementoLeto);
                    if((array[0]!=null)&&(array[0]!=undefined)&&(array[0]!='')&&(array[1]!=null)&&(array[1]!=undefined)&&(array[1]!=''))
                    {
                        var imgAttivo = array[0];
                        var imgDisattivo = array[1];
                    }else{
                        imgAttivo = 'lampadinaAccesa.png';
                        imgDisattivo = 'lampadinaSpenta.png';
                    }
                    thisOggetto.cambiaStato(id_elementoLeto,stato_elemento,testo,valore_label,valore_corrente,tipo_elemento,imgAttivo,imgDisattivo)
                }); 

             controllo = window.setTimeout("avvia()", 1000);                          
            }
        });
    }
    this.cercaImmagini = function(idele)
    {
        var arrayImg = new Array();
        for(var y=0;y<arrayImmagini.length;y++)
            {
                if(arrayImmagini[y][2]==idele)
                    {
                        arrayImg.push(arrayImmagini[y][0],arrayImmagini[y][1])
                    }
            }
        return(arrayImg)
        
    }
    this.cambiaStato = function(idele,statopar,testo,valore_label,valore_corrente,tipo_elemento,imgAttivo,imgDisattivo)
    {
        
        
        for(a=0;a<contatore+1;a++)
        {
            element  = document.getElementById('status_'+idele+'_'+a);
            element2 = document.getElementById('img_'+idele+'_'+a);
            elementL = document.getElementById('lamp_img_'+idele+'_'+a);
            element3 = document.getElementById('tb_'+idele+'_'+a); 
            element4 = document.getElementById('type_'+idele+'_'+a);  
            if (element4!=null)
            {
                element4.setAttribute("value",""+valore_corrente+" "+valore_label+"") 
            }
            if (element3!=null){
                $("#tb_"+idele).append(testo.replace(/@n/g, "<br>"));
            }
            if (element!=null){
                if(element2!=null){
                    if(statopar==0)
                    {
                        if(element2.getAttribute("src")!="img/SoloLedNero.png")
                        {
                            element2.setAttribute("src", "img/SoloLedNero.png");
                            
                        }
                        if(element.getAttribute("href")!="javascript:invia_nuova_richiesta('command=set_active?',"+idele+")")
                        {
                            element.setAttribute("href", "javascript:invia_nuova_richiesta('command=set_active?',"+idele+")"); 
                        }

                    }
                    else
                    {
                        if(element2.getAttribute("src")!="img/SoloLedRosso.png")
                        {
                            element2.setAttribute("src", "img/SoloLedRosso.png");
                              
                        }
                        if(element.getAttribute("href")!="javascript:invia_nuova_richiesta('command=set_deactive?',"+idele+")")
                        {
                            element.setAttribute("href", "javascript:invia_nuova_richiesta('command=set_deactive?',"+idele+")");
                        }
                    }
                }
            }
            if (element!=null){
                if(elementL!=null){
                    if(statopar==0)
                    {
                        if(elementL.getAttribute("src")!="immagini/"+imgDisattivo)
                        {
                            elementL.setAttribute("src", "immagini/"+imgDisattivo);
                           
                        }
                        if(element.getAttribute("href")!="javascript:invia_nuova_richiesta('command=set_active?',"+idele+")")
                        {
                            element.setAttribute("href", "javascript:invia_nuova_richiesta('command=set_active?',"+idele+")");
                        }

                            
                        
                    }
                    else
                    {
                        if(elementL.getAttribute("src")!="immagini/"+imgAttivo)
                        {
                            elementL.setAttribute("src", "immagini/"+imgAttivo);
                            
                        }
                        if(element.getAttribute("href")!="javascript:invia_nuova_richiesta('command=set_deactive?',"+idele+")")
                        {
                            element.setAttribute("href", "javascript:invia_nuova_richiesta('command=set_deactive?',"+idele+")"); 
                        }
                        
                    }
                }
            }
            
        } 
        document.getElementById('rotellina').style.display = 'none';
        document.getElementById('fondonero').style.display = 'none'
      
    };
    this.avvia = function()
    {
        thisOggetto.leggiXml();
        
    }
  
};
function invia_nuova_richiesta(par,id_idele)
{

    //document.getElementById('fondonero').style.display = 'block';
    document.getElementById('rotellina').style.display = 'block';
    $.ajax({
        type: "GET",
        url: 'http://'+window.location.host.toString()+'/'+par+id_idele,
        async:false,
        error: function(xml){
                
        },
        success: function(xml) {
            var idc='status_'+id_idele+'_'+a
            animazione3 = new animazione();
            var attivo = animazione3.leggiXml(id_idele,idc);
            if(attivo)
            {
                if(par=='command=set_active?')
                {
                    animazione3.disegna(true);
                }else
                {
                    animazione3.disegna(false)
                }
                       
            }
//            var stato_elemento = 0;
//            if(par=='command=set_active?')
//            {
//                stato_elemento = 0;
//            }else
//            {
//                stato_elemento = 1;
//            }
//            var imgAttivo = 'lampadinaAccesa.png';
//            var imgDisattivo = 'lampadinaSpenta.png';
//            cambiaStatoFuori(id_idele,stato_elemento,null,null,null,null,imgAttivo,imgDisattivo)
        }
            
    });

}
//function cambiaStatoFuori(idele,statopar,testo,valore_label,valore_corrente,tipo_elemento,imgAttivo,imgDisattivo)
//{
//    for(a=0;a<contatore+1;a++)
//    {
//        element  = document.getElementById('status_'+idele+'_'+a);
//        element2 = document.getElementById('img_'+idele+'_'+a);
//        elementL = document.getElementById('lamp_img_'+idele+'_'+a);
//        element3 = document.getElementById('tb_'+idele+'_'+a); 
//        element4 = document.getElementById('type_'+idele+'_'+a);  
//        if (element4!=null)
//        {
//            element4.setAttribute("value",""+valore_corrente+" "+valore_label+"") 
//        }
//        if (element3!=null){
//            $("#tb_"+idele).append(testo.replace(/@n/g, "<br>"));
//        }
//        if (element!=null){
//            if(element2!=null){
//                if(statopar==0)
//                {
//                    if(element2.getAttribute("src")!="img/SoloLedNero.png")
//                    {
//                        element2.setAttribute("src", "img/SoloLedNero.png");
//                            
//                    }
//                    if(element.getAttribute("href")!="javascript:invia_nuova_richiesta('command=set_active?',"+idele+")")
//                    {
//                        element.setAttribute("href", "javascript:invia_nuova_richiesta('command=set_active?',"+idele+")"); 
//                    }
//
//                }
//                else
//                {
//                    if(element2.getAttribute("src")!="img/SoloLedRosso.png")
//                    {
//                        element2.setAttribute("src", "img/SoloLedRosso.png");
//                              
//                    }
//                    if(element.getAttribute("href")!="javascript:invia_nuova_richiesta('command=set_deactive?',"+idele+")")
//                    {
//                        element.setAttribute("href", "javascript:invia_nuova_richiesta('command=set_deactive?',"+idele+")");
//                    }
//                }
//            }
//        }
//        if (element!=null){
//            if(elementL!=null){
//                if(statopar==0)
//                {
//                    if(elementL.getAttribute("src")!="immagini/"+imgDisattivo)
//                    {
//                        elementL.setAttribute("src", "immagini/"+imgDisattivo);
//                           
//                    }
//                    if(element.getAttribute("href")!="javascript:invia_nuova_richiesta('command=set_active?',"+idele+")")
//                    {
//                        element.setAttribute("href", "javascript:invia_nuova_richiesta('command=set_active?',"+idele+")");
//                    }
//
//                            
//                        
//                }
//                else
//                {
//                    if(elementL.getAttribute("src")!="immagini/"+imgAttivo)
//                    {
//                        elementL.setAttribute("src", "immagini/"+imgAttivo);
//                            
//                    }
//                    if(element.getAttribute("href")!="javascript:invia_nuova_richiesta('command=set_deactive?',"+idele+")")
//                    {
//                        element.setAttribute("href", "javascript:invia_nuova_richiesta('command=set_deactive?',"+idele+")"); 
//                    }
//                        
//                }
//            }
//        }
//            
//    } 
//}


