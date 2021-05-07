var rightArea = function(id)
{
    var thisOggetto = this;
    this.id = id;
    this.leggiXml = function()
    {
        $('#laterale').append('<div class="laterali" id="laterale'+thisOggetto.id+'"></div>')
        $.ajax({                                   
            type: "GET",
            url: "xml/pannello.xml",
            dataType: "xml",
            async:false,
            error:function(){alert('non trovo file')},
            success: function(xml) {
                $(xml).find('pannello').filter("#"+thisOggetto.id+"").find('right_area').find('elemento').each(function(){
                    var ide = $(this).attr('id');
                    var ide2 = ide;
                    var title = $(this).attr('title');
                    var status = $(this).attr('status');
                    var type = $(this).attr('type');
                    var posizione = 'laterale';
                    var currentvalue = $(this).attr('currentvalue')
                    var label_value = $(this).attr('label_value')
                    var alert2= $(this).attr('messaggio_allarme')

                    if($('#status_'+ide+'_'+0).length){
                        contatore=contatore+1;
                        ide=ide+'_'+contatore;
                    }else{
                        ide=ide+'_'+0;
                    }
                    pulsante1 = new pulsante(ide, thisOggetto.id, title, type, posizione, currentvalue, label_value,alert2,ide2);
                    pulsante1.disegna('laterale'+thisOggetto.id);
                //crea_laterale(id,title,status)

                });
            }
        });
    }
    this.disegna = function()
    {
        //$('#laterale').empty();
        if($('#laterale'+thisOggetto.id).length==0)
        {
        this.leggiXml(thisOggetto.id)
        }
        $('.laterali').css('display','none');
        document.getElementById('laterale'+thisOggetto.id).style.display="block";
      
    }
  
}