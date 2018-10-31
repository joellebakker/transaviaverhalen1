//Boven aan de js pagina 
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/


//function progress() {
//    var prg = document.querySelector('#progress');
//    var percent = document.querySelector('#percentCount');
//    var counter = 5;
//    var progress = 25;
//    var id = setInterval(frame, 50);
//
//    function frame() {
//        if (progress == 500 && counter == 100) {
//            clearInterval(id);
//        } else {
//            progress += 5;
//            counter += 1;
//            prg.style.width = progress + 'px';
//            precent.inner = counter + '%';
//        }
//    }
//
//}
//progress();


var button = document.querySelector('.tekstDownloaden')
var downloaden = document.querySelector('div')

button.addEventListener('click', function () {
    downloaden.classList.add('startDownload');
})
