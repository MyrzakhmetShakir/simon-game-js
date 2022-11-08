
var h1 = document.querySelector('h1');
var h4 = document.querySelector('h4');
var main = document.querySelector('#container');
var figures = document.querySelectorAll('.color');

var arr =[]; var rr = []; var start; var level = 1;



function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * figures.length);
  arr.push(randomNumber); console.log(arr);
  return randomNumber;}



function clickBeepFigures() {
  var oneFigure = figures[getRandomNumber()];
  oneFigure.classList.add('react'); new Audio('files/mixkit-relaxing-bell-chime-3109.wav').play();
  setTimeout(function () {oneFigure.classList.remove('react');}, 300);}



document.addEventListener('keydown', function a(event){
  if(event.key == 'a') {
     start = event.key;
     main.classList.remove('dark');
     h1.innerHTML = 'Starting..';
     main.style.backgroundColor = '#E8F9FD';
     setTimeout(function () {h1.innerHTML = 'Level ' + level;
                            main.style.backgroundColor = '#FEFBE7';}, 1000)

       setTimeout(clickBeepFigures, 2000);


     document.removeEventListener('keydown', a);
}



  else {main.style.backgroundColor = 'red';
  setTimeout(function () {main.style.backgroundColor = '#FEFBE7'}, 100);
  new Audio('files/mixkit-wrong-answer-bass-buzzer-948.wav').play();

}
});

document.addEventListener('click', function mouse() {
  if(start == 'a') { document.removeEventListener('click', mouse);}
  else {main.style.backgroundColor = 'red';
  setTimeout(function () {main.style.backgroundColor = '#FEFBE7'}, 100);
  new Audio('files/mixkit-wrong-answer-bass-buzzer-948.wav').play();}
});



function isTrue(arr, rr) {
  var iisTrue = [];
  for(var i = 0; i<arr.length; i++) {
  if(arr[i] == rr[i]){ iisTrue.push('yes');}
  else if(rr[i] == undefined) {iisTrue.push('not yet');}
  else if(arr[i] != rr[i]) {return false;}  }
  return true;
}

function isEqual(arr, rr) { return arr.length == rr.length; }


for(var i = 0; i < figures.length; i++) {  let elem = figures[i];

  elem.addEventListener('click', function next() {

   if(start == 'a') {


     rr.push(elem.dataset.letter); console.log(rr);
     elem.classList.add('react');
     setTimeout(function () {elem.classList.remove('react');}, 200);

     if(isTrue(arr, rr) == true) { new Audio('files/mixkit-bell-sound-with-delay-585.wav').play();

       if(isEqual(arr, rr) == true) {level = level + 1;
      h1.innerHTML = 'Correct'; rr.length = 0; new Audio('files/mixkit-choir-harp-bless-657.wav').play();
      main.style.backgroundColor = '#79DAE8'; setTimeout(function() {main.style.backgroundColor = '#FEFBE7'}, 500);

      setTimeout(function () {h1.innerHTML = 'Level ' + level;

                  setTimeout(clickBeepFigures, 2000); console.log(arr);     }, 2000);
      }
     else {}

   }

     else {main.style.backgroundColor = 'red';
     new Audio('files/mixkit-wrong-answer-bass-buzzer-948.wav').play();
     arr.length = 0; h1.innerHTML = 'GAME OVER';
     h4.innerHTML ='remember, you have to press all previous level buttons and after new random button, refresh to start again';
      }



   }

else {elem.removeEventListener('click', next);}


  });
}
