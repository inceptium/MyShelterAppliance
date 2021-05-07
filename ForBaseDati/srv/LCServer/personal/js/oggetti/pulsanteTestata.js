var pulsanteTestata = function(id,etichetta,areaCentrale,rightArea)
{
    var thisOggetto = this;
    this.id = id;
    this.etichetta = etichetta;
    this.areaCentrale = areaCentrale;
    this.rightArea = rightArea;
    this.stringa = "<div class='bt_testata'><a class='a_bt_testata' style='position: absolute; z-index:5' id='"+id+"'>"+etichetta+"<div class='v' id='"+id+"v'></div></div></a>";
    this.disegna = function()
    {
         
        $('#testa').append(this.stringa);
        $('#'+id).click(function(){
//            $('#rotellina').css('display','block')
//            $('#fondonero').css('display','block')
            thisOggetto.clicca();
//            $(document).ready(function(){
//            $('#rotellina').css('display','none');$('#fondonero').css('display','none');
//            });

        })
        
    }
    this.clicca = function()
    {
       
        $('.v').empty();
        $('#'+thisOggetto.id+'v').append('<img src="immagini/ombra.png" style="width:30px"/>');
        thisOggetto.areaCentrale.disegna();
        thisOggetto.rightArea.disegna();
        
    }
}