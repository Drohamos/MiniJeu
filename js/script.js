$(document).ready(function () {

    //    var imgHero = document.getElementById('imgHeroVaisseau');
    var imgHero = $("#imgHeroVaisseau").attr('src');
    var posX = document.getElementById("imgHeroVaisseau").offsetLeft;
    var posY = document.getElementById("imgHeroVaisseau").offsetTop;
    var positionHero = posX + " " + posY;
    var imgHeroPos = document.getElementById('imgHeroVaisseau');
    imgHeroPos.style.left = 0 + 'px';
    imgHeroPos.style.right = 0 + 'px';
    imgHeroPos.style.top = 0 + 'px';

    var tirHero = document.getElementById('tirHero');
    var widthWindow = $(window).width();
    var heightWindow = $(window).height();

    console.log(widthWindow, heightWindow);

    //    var calcul5P = widthWindow - widthWindow*0.07;
    //    console.log(calcul5P);

    // RECUPERATION DE LA POSITION DU HERO

    function updateHero() {
        posX = document.getElementById("imgHeroVaisseau").offsetLeft;
        posY = document.getElementById("imgHeroVaisseau").offsetTop;
        positionHero = posX + " " + posY;
        console.log(positionHero);
    }

    console.log(positionHero);
	

    // RECUPERATION DE LA TAILLE D'ECRAN

    function tailleEcran() {

        widthWindow = $(window).width();
        heightWindow = $(window).height();
        console.log(widthWindow);

    }


    var stormTroopers = {};

	// SPAWN DES STORMTROOPERS
	function spawnTrooper() {
        var idTrooper = Date.now();

        stormTroopers[stormTroopers.length] = idTrooper;

		$('#tailleGlobalJeu').prepend('<img class="stormTrooper" id="' + idTrooper + '" src="img/stormTrooper.png" />');

        JSON.stringify(stormTroopers);

        setTimeout(spawnTrooper, Math.floor((Math.random() * 2000) + 500));
	}

	spawnTrooper();
	
	

    // bloquer le depacement du Hero





    // Click sur les fleches directionnelle 

    $(document).keydown(function (touche) {
        var appui = touche.which || touche.keyCode;

        // FLECHE GAUCHE
        if (appui == 37) {

            if (posX < 30) {} else {

                imgHeroPos.style.left = parseInt(imgHeroPos.style.left, 10) - 30 + 'px';
                updateHero();
            }



        }

        // FLECHE DROITE
        else if (appui == 39) {
            tailleEcran();

            if (posX <= widthWindow - 150) {
                imgHeroPos.style.left = parseInt(imgHeroPos.style.left, 10) + 30 + 'px';
                updateHero();

            }
        }

        // FLECHE HAUT
        else if (appui == 38) {
            tailleEcran();
            updateHero();
            if (posY >= (-heightWindow + 250)) {
                imgHeroPos.style.top = parseInt(imgHeroPos.style.top, 10) - 30 + 'px';
            }
        }

        // FLECHE BAS
        else if (appui == 40) {

            tailleEcran()
            updateHero();
            if (posY < 0) {
                imgHeroPos.style.top = parseInt(imgHeroPos.style.top, 10) + 30 + 'px';
            }




        }

        // CLICK ESPACE TIR
        else if (appui == 32) {
            tirHero.style.opacity = "1";
            tirHero.style.top = parseInt(imgHeroPos.style.top, 10) - 100 + "px";
            tirHero.style.left = parseInt(imgHeroPos.style.left, 10) - 100 + "px";
            $('#tirHero').stop().animate({
                top: "-=1000px"
            }, 'slow');

        }



        //        
        //        switch (appui){
        //                
        //                // FLECHE GAUCHE 
        //                case 37 && 32 :
        //                  
        //                    imgHeroPos.style.left =  parseInt(imgHeroPos.style.left, 10) - 30 +'px';
        //                    tirHero.style.opacity= "1";
        //                    tirHero.style.top  = parseInt(imgHeroPos.style.top, 10) - 100 + "px";
        //                    tirHero.style.left  = parseInt(imgHeroPos.style.left, 10) - 100 + "px";
        //                    $('#tirHero').stop().animate({top: "-=1000px"}, 'slow');
        //                break;
        //                
        //                // FLECHE GAUCHE
        //                case 37:
        //                    imgHeroPos.style.left =  parseInt(imgHeroPos.style.left, 10) - 30 +'px';
        //                console.log('ok');
        //                break;
        //                
        //                
        //                
        //                
        //                // FLECHE HAUT
        //                case 38:
        //                    imgHeroPos.style.top = parseInt(imgHeroPos.style.top, 10) - 30 +'px';
        //                break;
        //                
        //                
        //                // FLECHE DROIT
        //                case 39:
        //                  imgHeroPos.style.left = parseInt(imgHeroPos.style.left, 10) + 30 +'px';
        //                break;
        //                
        //                
        //                // FLECHE BAS
        //                case 40:
        //                    imgHeroPos.style.top = parseInt(imgHeroPos.style.top, 10) + 30 +'px';
        //                break;
        //                
        //                
        ////                // TIR
        ////                 case 32:
        ////                    
        ////                    tirHero.style.opacity= "1";
        ////                    tirHero.style.top  = parseInt(imgHeroPos.style.top, 10) - 100 + "px";
        ////                    tirHero.style.left  = parseInt(imgHeroPos.style.left, 10) - 100 + "px";
        ////                    $('#tirHero').stop().animate({top: "-=1000px"}, 'slow');
        ////                    
        ////                     console.log('click espace');
        ////                 
        ////                break;
        //                
        //            default:
        //                break;
        //                
        //                
        //                
        //                
        //                
        //                
        //        };
        //        







        //        if(appui == 37){
        ////            console.log('click fleche gauche');
        //            $("#imgHeroVaisseau").stop().animate({left : "-80px"});
        ////            positionHero = posX + " " + posY;
        ////            console.log(positionHero);
        //        };
        //        
        //         if(appui == 38){
        //            console.log('click fleche haut');
        //             $("#imgHeroVaisseau").stop().css({top : "-80px"});
        //            
        //        };
        //        
        //         if(appui == 39){
        //            console.log('click fleche droite');
        //             $("#imgHeroVaisseau").stop().css({right : "-80px"});
        //        };
        //        
        //        
        //        if(appui == 40){
        //            console.log('click fleche bas');
        //            $("#imgHeroVaisseau").stop().css({bottom : "80px"});
        //        };
        //        
        //        
        //       if(appui == 32){
        //            console.log('click espace');
        //             
        //        };
        //        
        //    



    });









});