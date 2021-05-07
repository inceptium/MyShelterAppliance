var text_box = function(id,left,top,etichetta,opaco,colore_sfondo,bordo,ide,immagine_sfondo,idPannello)
{
  var thisOggetto = this;
  this.id = id;
  this.left = left;
  this.top = top;
  this.etichetta = etichetta;
  this.opaco = opaco;
  this.colore_sfondo = colore_sfondo;
  this.bordo = bordo;
  this.ide = ide;
  this.immagine_sfondo = immagine_sfondo;
  this.idPannello = idPannello;
  this.disegna = function()
  {
      $('#centro'+thisOggetto.idPannello).append("<div id='tb_"+thisOggetto.ide+"' class='div_text_box' style='position:absolute; left:"+thisOggetto.left+"px; top:"+thisOggetto.top+"px; opacity:"+thisOggetto.opaco+"; background-color:"+thisOggetto.colore_sfondo+"; border:"+thisOggetto.bordo+"; background-image:url("+thisOggetto.immagine_sfondo+");'></div>")
  }
}