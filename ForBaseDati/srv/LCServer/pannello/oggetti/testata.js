var testata = function()
{
    var thisOggetto = this;
    this.immagineOmino = new Image();
    this.immagineLogoRosso = new Image();
    this.immagineLogoNero = new Image();
    this.immagineLogoNero.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAAAyCAIAAADeCYlaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0IxOEVGMjgwMDExMUUyOENBMEIwODY3NDE2OUFFNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0IxOEVGMzgwMDExMUUyOENBMEIwODY3NDE2OUFFNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDQjE4RUYwODAwMTExRTI4Q0EwQjA4Njc0MTY5QUU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDQjE4RUYxODAwMTExRTI4Q0EwQjA4Njc0MTY5QUU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cpUtvwAAG0RJREFUeNrsXQlg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';
    this.immagineLogoRosso.src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQcAAAAyCAIAAADeCYlaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQ0IxOEVGNjgwMDExMUUyOENBMEIwODY3NDE2OUFFNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQ0IxOEVGNzgwMDExMUUyOENBMEIwODY3NDE2OUFFNiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjBDQjE4RUY0ODAwMTExRTI4Q0EwQjA4Njc0MTY5QUU2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjBDQjE4RUY1ODAwMTExRTI4Q0EwQjA4Njc0MTY5QUU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nmlKZwAAG1pJREFUeNrsXQlA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';
    this.immagineHeadNero = new Image();
    this.immagineAggiorna = new Image();
    this.canvas = document.getElementById('header');
    this.contesto = this.canvas.getContext('2d');
    
    this.caricaImmagini=function(){
        
//        if(thisOggetto.immagineLogoRossosrc == null){
//            thisOggetto.immagineLogoRosso.src = 'images/head2.png';
            thisOggetto.immagineLogoRosso.onload = function()
            {
                thisOggetto.contesto.drawImage(thisOggetto.immagineLogoRosso,0,0)
                //localStorage.logoRosso = thisOggetto.canvas.toDataURL("image/png");
            }
//        }else{
//            thisOggetto.immagineLogoRosso.src = thisOggetto.immagineLogoRossosrc;
//        }
     
//        if(thisOggetto.immagineLogoNerosrc == null ){
//            thisOggetto.immagineLogoNero.src = 'images/head.png';
            thisOggetto.immagineLogoNero.onload = function()
            {
                thisOggetto.contesto.drawImage(thisOggetto.immagineLogoNero,0,0)
                //localStorage.logoNero = thisOggetto.canvas.toDataURL("image/png");
            }
//        }else{
//            thisOggetto.immagineLogoNero.src = thisOggetto.immagineLogoNerosrc;
//            thisOggetto.contesto.drawImage(thisOggetto.immagineLogoNero,0,0)
//        }
        window.setTimeout(function(){
            thisOggetto.logo(false,"");
        }, 50)  
      
        
    }
    this.logoImpostazioni = function()
    {
        thisOggetto.immagineLogoRosso.src = 'images/head2(1).png';
        thisOggetto.immagineLogoRosso.onload = function()
        {
            thisOggetto.contesto.drawImage(thisOggetto.immagineLogoRosso,0,0)
            localStorage.logoRosso = thisOggetto.canvas.toDataURL("image/png");
        }
    }
    this.logo = function(rossoNero,dove)
    {
        if(rossoNero){

            thisOggetto.contesto.drawImage(thisOggetto.immagineLogoRosso,0,0)

        }else{
            thisOggetto.contesto.drawImage(thisOggetto.immagineLogoNero,0,0)

        }
        thisOggetto.contesto.stroke();
        thisOggetto.contesto.save();
    }

    this.eventi = function()
    {
       
        if ('ontouchstart' in document.documentElement) {
            
            thisOggetto.canvas.addEventListener('touchstart', thisOggetto.touchs,false);
            thisOggetto.canvas.addEventListener('touchend', thisOggetto.clicca,false);
            thisOggetto.canvas.addEventListener('touchmove',thisOggetto.touchm ,false);
        }else{
            thisOggetto.canvas.addEventListener('click', thisOggetto.clicca,false);
        }
    }
    this.touchm = function(event)
    {

        event.preventDefault();
        var touch = event.changedTouches;
        var relativeX = (touch[0].pageX - thisOggetto.canvas.offsetLeft);
        var relativeY = (touch[0].pageY - thisOggetto.canvas.offsetTop);
        if(relativeX<45)
        {
             
            thisOggetto.contesto.strokeStyle = "#333";
            thisOggetto.contesto.strokeRect(0,0,45,50);     
            thisOggetto.contesto.strokeRect(0,0,45,50);
            thisOggetto.contesto.strokeRect(0,0,45,50);
            thisOggetto.contesto.strokeRect(0,0,45,50);
        }
        if(relativeX>223)
        {
            thisOggetto.contesto.strokeStyle = "#333";
            thisOggetto.contesto.strokeRect(222,0,40,50);
            thisOggetto.contesto.strokeRect(222,0,40,50);
            thisOggetto.contesto.strokeRect(222,0,40,50);
            thisOggetto.contesto.strokeRect(222,0,40,50);
        }
           
   
    }
    this.touchs = function(event)
    {
        event.preventDefault();
        var touch = event.changedTouches;
        var relativeX = (touch[0].pageX - thisOggetto.canvas.offsetLeft);
        var relativeY = (touch[0].pageY - thisOggetto.canvas.offsetTop);
        if(relativeX<45)
        {
             
            thisOggetto.contesto.strokeStyle = "white";
            thisOggetto.contesto.strokeRect(0,0,45,50);   
        }
        if(relativeX>223)
        {
            thisOggetto.contesto.strokeStyle = "white";
            thisOggetto.contesto.strokeRect(222,0,40,50);
        }
    }
    this.clicca = function(event)
    {
        if ('ontouchstart' in document.documentElement) {
            event.preventDefault();
            var touch = event.changedTouches;
            var relativeX = (touch[0].pageX - thisOggetto.canvas.offsetLeft);
            var relativeY = (touch[0].pageY - thisOggetto.canvas.offsetTop);
            
            if(relativeX<45)
            {
             
                thisOggetto.apriLogin() 
                thisOggetto.contesto.strokeStyle = "#333";
                thisOggetto.contesto.strokeRect(0,0,45,50);  
                thisOggetto.contesto.strokeRect(0,0,45,50);  
                thisOggetto.contesto.strokeRect(0,0,45,50);  
                thisOggetto.contesto.strokeRect(0,0,45,50); 
            }
            if(relativeX>223)
            {
                
                thisOggetto.aggiorna()
                thisOggetto.contesto.strokeStyle = "#333";
                thisOggetto.contesto.strokeRect(222,0,40,50);
                thisOggetto.contesto.strokeRect(222,0,40,50);
                thisOggetto.contesto.strokeRect(222,0,40,50);
                thisOggetto.contesto.strokeRect(222,0,40,50);
            }
           
        }else{
            relativeX = (event.clientX - thisOggetto.canvas.offsetLeft);
            relativeY = (event.clientY - thisOggetto.canvas.offsetTop);
            if(relativeX<45)
            {
                
                thisOggetto.apriLogin()       
            }
            if(relativeX>223)
            {
                
                thisOggetto.aggiorna()
            }
            

        }
    }
    this.apriLogin = function()
    {
        var password1 = new password();
        password1.setPassword(); 
    }
    this.aggiorna = function()
    {
        var password = localStorage.password;
        var setIcone = localStorage.setIcone;
        var colore = localStorage.temaColore;
        var imm = localStorage.immagine;
        localStorage.clear();
        localStorage.immagine = imm;
        localStorage.setIcone = setIcone;
        localStorage.password = password;
        localStorage.temaColore = colore;
        location.reload()   
    }

}