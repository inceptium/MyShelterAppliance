animazione = function()
{
    var thisOggetto = this;
    this.idPulsante = '';
    this.idPulsanteClick = '';
    this.left = '';
    this.top = '';
    this.width = '';
    this.height = '';
    this.animazioneAttiva = '';
    this.animazioneDisattiva = '';
    this.leggiXml = function(idPulsante,idPulsanteClick)
    {
        thisOggetto.idPulsante = idPulsante;
        thisOggetto.idPulsanteClick = idPulsanteClick
        var attivo = false;
        $.ajax({
            type: "GET",
            url: "xml/pannello.xml",
            dataType: "xml",
            async:false,
            success: function(xml) {
                $(xml).find('pannello').find('animazione').filter("#"+thisOggetto.idPulsante+"_A").each(function(){
                    attivo = true;
                    thisOggetto.animazioneAttiva = $(this).attr('animazioneAttiva');
                    thisOggetto.animazioneDisattiva = $(this).attr('animazioneDisattiva')
                    thisOggetto.left = $(this).attr('left');
                    thisOggetto.top = $(this).attr('top');
                    thisOggetto.width = $(this).attr('width');
                    thisOggetto.height = $(this).attr('height');
                });                     
                                       
            }
        });
        return attivo;
    }
    this.disegna = function(attivoDisattivo)
    {
            thisOggetto.clicca(attivoDisattivo)

    }
    this.clicca = function(attivoDisattivo)
    {
        $('#'+thisOggetto.idPulsante+'_A').remove();
        $('#centro').append('<div id="'+thisOggetto.idPulsante+'_A" style="position:absolute;left:'+thisOggetto.left+'px;top:'+thisOggetto.top+'px;width:'+thisOggetto.width+'px;height:'+thisOggetto.height+'px"></div>')
        if(attivoDisattivo)
            {
                $('#'+thisOggetto.idPulsante+'_A').append('<img style="width:'+thisOggetto.width+';height;'+thisOggetto.height+'" src="'+thisOggetto.animazioneDisattiva+'"/>')
            }else
                {
                   $('#'+thisOggetto.idPulsante+'_A').append('<img style="width:'+thisOggetto.width+';height;'+thisOggetto.height+'" src="'+thisOggetto.animazioneAttiva+'"/>') 
                }
       window.setTimeout(function(){$('#'+thisOggetto.idPulsante+'_A').remove()}, 4000)
    }
}