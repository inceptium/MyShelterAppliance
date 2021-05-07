var pulsante = function(ide, id, title, type, posizione, currentvalue, label_value,alert2,ide2)
{
  var thisOggetto = this;
  this.stringa = '';
  this.ide = ide;
  this.id = id;
  this.title = title;
  this.type = type;
  this.posizione = posizione;
  this.currentvalue = currentvalue;
  this.label_value = label_value;
  this.alert2 = alert2;
  this.ide2 = ide2;
  switch (this.posizione) 
    {
        case 'down_area':
            switch (this.type)
            {
                case '3':
                    this.stringa = "<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_menu pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '8':
                    this.stringa = "<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_menu pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '6':
                    this.stringa = "<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_menu pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '7':
                    this.stringa = "<div class='tipo7' id='status_"+this.ide+"><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><center>"+this.title+"<br><input  id='type_"+this.ide+"' type=text value ='"+this.currentvalue+" "+this.label_value+"'></center></div>"
                    break;
                    
                case '5':
                    this.stringa = "<div class='tipo5' id='status_"+this.ide+"><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img> </div>"
                    break; 
                default:
                    this.stringa = "<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_laterale pls' href='#'   style='position: absolute; z-index:5' id='status_"+ide+"' >"+title+"</a></div>";
                    break; 
            }
            break; 
        case 'button':
            switch (this.type)
            {
                case '3':
                    this.stringa = "<div class='bt_button'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_button pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '8':
                    this.stringa = "<div class='bt_button'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_button pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '6':
                    this.stringa = "<div class='bt_button'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_button pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '7':
                    this.stringa = "<div class='tipo7' id='status_"+this.ide+"><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><center>"+this.title+"<br><input type=text id='type_"+this.ide+"' value ='"+this.currentvalue+" "+this.label_value+"'></center></div>"
                    break;
                    
                case '5':
                    this.stringa = "<div class='tipo5' id='status_"+this.ide+"><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img> </div>"
                    break; 
                default:
                    this.stringa = "<div class='bt_button'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_laterale pls' href='#'   style='position: absolute; z-index:5' id='status_"+this.ide+"' >"+this.title+"</a></div>";
                    break;
            }
            break;    
        case 'menu':
            switch (this.type)
            {
                case '3':
                    this.stringa = "<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_menu pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '8':
                    this.stringa = "<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_menu pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '6':
                    this.stringa = "<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_menu pls' style='position: absolute; z-index:5' id='status_"+this.ide+"'href='#'>"+this.title+"</a></div>"
                    break;
                case '7':
                    this.stringa = "<div class='bt_menu2'><div class='tipo7' id='status_"+this.ide+"><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><center>"+this.title+"<br><input id='type_"+ide+"' type=text value ='"+this.currentvalue+" "+this.label_value+"'></center></div></div>"
                    break;
                    
                case '5':
                    this.stringa = "<div class='tipo5' id='status_"+this.ide+"'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img> </div>"
                    break; 
                default:
                    this.stringa = "<div class='bt_menu'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_laterale pls' href='#'   style='position: absolute; z-index:5' id='status_"+this.ide+"' >"+this.title+"</a></div>";
                    break;
            }
            break;
        case 'laterale':
            switch (this.type)
            {
                case '3':
                    this.stringa = "<center><div class='bt_laterale'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_laterale pls'  href='#' style='position: absolute; z-index:5' id='status_"+this.ide+"' >"+this.title+"</a></div></center>" 
                    break;
                case '8':
                    this.stringa = "<center><div class='bt_laterale'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_laterale pls' href='#'   style='position: absolute; z-index:5' id='status_"+this.ide+"' >"+this.title+"</a></div></center>"  
                    break;
                case '6':
                    this.stringa = "<center><div class='bt_laterale'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_laterale pls' href='#'  style='position: absolute; z-index:5' id='status_"+this.ide+"' >"+this.title+"</a></div></center>" 
                    break;
                case '7':
                    this.stringa = "<center><div class='bt_laterale'><div class='tipo7' id='status_"+this.ide+"'><center>"+this.title+"<br><input id='type_"+this.ide+"' type=text value ='"+this.currentvalue+" "+this.label_value+"'></center></div></div></center>"
                    break
                    
                case '5':
                    this.stringa = "<div class='tipo5' id='status_"+this.ide+"><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img> </div>"
                    break; 
                default:
                    this.stringa = "<center><div class='bt_laterale'><img src='img/SoloLedNero.png' id='img_"+this.ide+"' class='img_laterale'></img><a class='a_bt_laterale pls' href='#'   style='position: absolute; z-index:5' id='status_"+this.ide+"' >"+this.title+"</a></div></center>";
                    break;
                    
            }
            break;
    }
  this.disegna = function(dove)
  {
      $('#'+dove).append(this.stringa);
  }
}