var td = new Array(),
    flag = false,
    hit = 0,

    score = 0,

    countDown = 60,
    interId = null,
    timeId = null;

var table = document.getElementById('table');
var content = document.getElementById('content');
var container = document.getElementById('container');
var hammer = document.getElementById('hammer');

var tds = document.querySelectorAll('td');


for (var i = 1; i <= tds.length; i++) {

    tds[i - 1].setAttribute('id', 'td[' + i + "]")

}


for (var i = 1; i <= tds.length; i++) {


    tds[i - 1].addEventListener('mouseup', function() {

        table.style.cursor = 'url("images/cursor.png"), auto';
        console.log(this.getAttribute('id'))

        up(this.getAttribute('id'));
    })


    tds[i - 1].addEventListener('mousedown', function() {
        console.log('d')
        table.style.cursor = 'url("images/cursor-down.png"), auto'
    })
    tds[i - 1].addEventListener('mousemove', function() {
        console.log('d')
        table.style.cursor = 'url("images/cursor.png"), auto'
    })



}


function up(id) {
    console.log('l')



    if (document.getElementById(id).innerHTML != "") {
        hit += 1;
        score += 0.1

        document.form1.score.value = Math.round(score * 100);
        document.form1.hit.value = hit;

        document.getElementById(id).innerHTML = ""
    } else {


        score -= 0.1;

        document.form1.score.value = Math.round(score * 100);
        document.form1.hit.value = hit;

    }
}

function GameOver() {
    console.log('GAME OVER')
    timeStop();
    flag = false;
    clearMouse();
    alert("Game Over！\n HIT：" + hit + "\n SCORE：" + Math.round(score * 100));
}


function timeStop() {
    clearInterval(interId);
    clearTimeout(timeId);
}


function clearMouse() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("td[" + i + "]").innerHTML = "";
    }
}

function timeshow() {
    document.form1.remtime.value = countDown;
    if (countDown === 0) {
        GameOver();
    } else {
        countDown = countDown - 1;
        timeId = setTimeout('timeshow()', 1000);
    }
}

function show() {
    if (flag) {
        var current = Random(1, 11)
        var num = Random(1, 6)

        document.getElementById("td[" + current + "]").innerHTML = '<img src="images/' + num + '.png" />';

        setTimeout("document.getElementById('td[" + current + "]').innerHTML =''", 1000)
    }
}

function GameStart() {
    console.log('this is start')
    flag = true;

    interId = setInterval("show()", 1000);

    score = 0;
    hit = 0;

    countDown = 60
    document.form1.hit.value = hit;
    document.form1.score.value = score;
    timeshow();
}


function Random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}