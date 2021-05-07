var stato = function()
{
    this.disegnaStato = function()
    {
        $('#').append('<img id="pallinoNero"  src="img/SoloLedNero.png"/>"')
    }
    this.cambiaStato = function()
    {
        if($('#pallinoNero')!=null)
        {
            $('#pallinoNero').remove();
            $('#').append('<img id="pallinoRosso" src="img/SoloLedRosso.png"/>');
        }else
        {
            $('#pallinoRosso').remove();
            $('#').append('<img id="pallinoNero" src="img/SoloLedNero.png"/>'); 
        }
    }
}