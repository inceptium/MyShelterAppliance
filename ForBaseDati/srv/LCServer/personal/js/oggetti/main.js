contatore = 0;
contatorep = 0;
c = 0;

function precaricaimmagini(){
    if (document.images){
        var filediimmagini = precaricaimmagini.arguments;
        var matriceprecaricate = new Array();
        for (var i=0; i<filediimmagini.length; i++){
            matriceprecaricate[i] = new Image;
            matriceprecaricate[i].src = filediimmagini[i];
        }
    }
}

$(document).ready(function(){
    $('#pallino').append('<img id="pallinos"  src="img/SoloLedNero.png"/>')
    $.ajax({                                   
        type: "GET",
        url: "xml/web_design.xml",
        dataType: "xml",
        async:false,
        success: function(xml) {
            var stile = $(xml).find('root').attr('stile');
            var dispositivo = $(xml).find('root').attr('dispositivo');
            $(xml).find('pannello').each(function(){
                c = c+1;
                var id = $(this).attr('id');
                var etichetta = $(this).attr('etichetta');
                areaCentraleP = new areaCentrale(id);
                rightAreaP = new rightArea(id);
                pulsanteTestataP = new pulsanteTestata(id,etichetta,areaCentraleP,rightAreaP);
                pulsanteTestataP.disegna();
                downAreaP = new downArea();
                downAreaP.disegna();
                if(c==1)
                {
                    pulsanteTestataP.clicca();
                }
                setPannello1 = new setPannello(stile,dispositivo)    
                setPannello1.setStile();
                
            });
        }
    });

});
cambiaStato1 = new cambiaStato();
function avvia()
{
    cambiaStato1.avvia();
}
avvia();

