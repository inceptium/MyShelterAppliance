var setPannello = function(stile,dispositivo)
{
    var thisOggetto = this;
    this.stile = stile;
    this.dispositivo = dispositivo;
    this.setStile = function()
    {
        switch(thisOggetto.stile)
        {
            case '':
                break;
            case ' ':
                break;
            case undefined:
                break;
            case 'light_gray':
                break;
            case 'apple_black':
                document.getElementById('centro').style.background = 'url(img/sfondo2.jpg) repeat';
                document.getElementById('testa2').style.background = 'url(img/sfondo2.jpg) repeat';
                document.getElementById('pie').style.background = 'url(img/sfondo2.jpg) repeat';
                document.getElementById('laterale').style.background = 'url(img/sfondo2.jpg) repeat';
                document.getElementById('container').style.background = 'white';
                $('.a_bt_testata').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(134,134,134,1)),to(rgba(175,175,175,1)))');
                $('.bt_laterale').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(134,134,134,1)),to(rgba(175,175,175,1)))');
                $('.a_bt_laterale').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(134,134,134,1)),to(rgba(175,175,175,1)))');
                $('.a_bt_pie').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(134,134,134,1)),to(rgba(175,175,175,1)))');
                $('.a_bt_down_area').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(134,134,134,1)),to(rgba(175,175,175,1)))');
                $('.a_bt_button').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(134,134,134,1)),to(rgba(175,175,175,1)))');
                $('.bt_button').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(134,134,134,1)),to(rgba(175,175,175,1)))');
                $('.a_bt_testata').css('color','white');
                $('.bt_laterale').css('color','white');
                $('.a_bt_laterale').css('color','white');
                $('.a_bt_pie').css('color','white');
                $('.a_bt_button').css('color','white');
                $('.bt_button').css('color','white');
                $('.a_bt_down_area').css('color','white');
                break;  
            case 'viola':
                document.getElementById('centro').style.background = 'url(img/viola.gif) repeat';
                document.getElementById('testa2').style.background = 'url(img/viola.gif) repeat';
                document.getElementById('pie').style.background = 'url(img/viola.gif) repeat';
                document.getElementById('laterale').style.background = 'url(img/viola.gif) repeat';
                document.getElementById('container').style.background = 'white';
                break; 
            case 'natalizio':
                document.getElementById('centro').style.background = 'url(img/natalizia.jpg) repeat';
                document.getElementById('testa2').style.background = 'url(img/natalizia.jpg) repeat';
                document.getElementById('pie').style.background = 'url(img/natalizia.jpg) repeat';
                document.getElementById('laterale').style.background = 'url(img/natalizia.jpg) repeat';
                document.getElementById('container').style.background = 'white';
                $('.a_bt_testata').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(200,0,0,1)),to(rgba(255,33,33,1)))');
                $('.bt_laterale').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(200,0,0,1)),to(rgba(255,33,33,1)))');
                $('.a_bt_laterale').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(200,0,0,1)),to(rgba(255,33,33,1)))');
                $('.a_bt_pie').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(200,0,0,1)),to(rgba(255,33,33,1)))');
                $('.a_bt_down_area').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(200,0,0,1)),to(rgba(255,33,33,1)))');
                $('.a_bt_button').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(200,0,0,1)),to(rgba(255,33,33,1)))');
                $('.bt_button').css('background','-webkit-gradient(linear,0% 0%,0% 100%,from(rgba(200,0,0,1)),to(rgba(255,33,33,1)))');
                $('.a_bt_testata').css('color','white');
                $('.bt_laterale').css('color','white');
                $('.a_bt_laterale').css('color','white');
                $('.a_bt_pie').css('color','white');
                $('.a_bt_button').css('color','white');
                $('.bt_button').css('color','white');
                $('.a_bt_down_area').css('color','white');
                break; 
            default:
                break;
            
        }
    }
    this.setDispositivo = function()
    {
        switch(thisOggetto.dispositivo)
        {
            case '':
                break;
            case ' ':
                break;
            case undefined:
                break;
            case 'ipad':
                break;
            case 'android_samsung':
                //480x800
                document.getElementById('testa2').style.width = '580 px';
                document.getElementById('testa2').style.height = '50 px';
                document.getElementById('centro').style.top = '60 px';
                document.getElementById('centro').style.width = '595 px';
                document.getElementById('centro').style.height = '310 px';
                document.getElementById('pie').style.height = '50 px';
                document.getElementById('pie').style.width = '600 px';
                document.getElementById('pie').style.top = '380 px';
                document.getElementById('laterale').style.height = '430 px';
                document.getElementById('laterale').style.width = '190 px';
                document.getElementById('laterale').style.left = '610 px';
                document.getElementById('laterale').style.top = '0 px';
                document.getElementById('sotto_centro').style.height = '50 px';
                document.getElementById('sotto_centro').style.width = '570 px';
                document.getElementById('sotto_centro').style.top = '310 px';
                break;
            default:
                break;
        }
    }
}