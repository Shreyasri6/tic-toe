var winner = false;
var count = 0;
var result = "";


// for horizontal
var x = setInterval(function(){
    if($('#btn1').hasClass('clicked') && $('#btn2').hasClass('clicked') && $('#btn3').hasClass('clicked')){
        winner = true;
        result = "red";
    }
    if($('#btn1').hasClass('dblclicked') && $('#btn2').hasClass('dblclicked') && $('#btn3').hasClass('dblclicked')){
        winner = true;
        result = "green";
    }
    if($('#btn4').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn6').hasClass('clicked')){
        winner = true;
        result = "red";
    }
    if($('#btn7').hasClass('clicked') && $('#btn8').hasClass('clicked') && $('#btn9').hasClass('clicked')){
        winner = true;
        result = "red";
    }
    if($('#btn4').hasClass('dblclicked') && $('#btn5').hasClass('dblclicked') && $('#btn6').hasClass('dblclicked')){
        winner = true;
        result = "green";
    }
    if($('#btn7').hasClass('dblclicked') && $('#btn8').hasClass('dblclicked') && $('#btn9').hasClass('dblclicked')){
        winner = true;
        result = "green";
    }
    if(winner){
        document.write(`<h1>The winner is ${result}</h1>`)
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
    }
},100);
 
// for vertical
var y = setInterval(function(){
    if($('#btn1').hasClass('clicked') && $('#btn4').hasClass('clicked') && $('#btn7').hasClass('clicked')){
        winner = true;
        result="red";
    }
    if($('#btn1').hasClass('dblclicked') && $('#btn4').hasClass('dblclicked') && $('#btn7').hasClass('dblclicked')){
        winner = true;
        result="green";
    }
    if($('#btn2').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn8').hasClass('clicked')){
        winner = true;
        result="red";
    }
    if($('#btn2').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn8').hasClass('clicked')){
        winner = true;
        result="red";
    }
    if($('#btn3').hasClass('dblclicked') && $('#btn6').hasClass('dblclicked') && $('#btn9').hasClass('dblclicked')){
        winner = true;
        result="green";
    }
    if($('#btn3').hasClass('dblclicked') && $('#btn6').hasClass('dblclicked') && $('#btn9').hasClass('dblclicked')){
        winner = true;
        result="green";
    }
    if(winner){
        document.write(`<h1>The winner is ${result}</h1>`)
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
    }
},100);
 

// for diagonal
var z = setInterval(function(){
    if($('#btn1').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn9').hasClass('clicked')){
        winner = true;
        result="red";
    }
    if($('#btn1').hasClass('dblclicked') && $('#btn5').hasClass('dblclicked') && $('#btn9').hasClass('dblclicked')){
        winner = true;
        result="green";
    }
    if($('#btn3').hasClass('clicked') && $('#btn5').hasClass('clicked') && $('#btn7').hasClass('clicked')){
        winner = true;
        result="red";
    }
    if($('#btn3').hasClass('dblclicked') && $('#btn5').hasClass('dblclicked') && $('#btn7').hasClass('dblclicked')){
        winner = true;
        result="green";
    }
    if(winner){
        document.write(`<h1>The winner is ${result}</h1>`)
        clearInterval(x);
        clearInterval(y);
        clearInterval(z);
    }
},100);
 






$('#btn1').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn1').hasClass('dblclicked')){
            $('#btn1').addClass('clicked');
        }
    }
    $('#btn1').attr('disabled','true');
    count++;
})
 
$('#btn2').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn2').hasClass('dblclicked')){
            $('#btn2').addClass('clicked');
        }
    }
    $('#btn2').attr('disabled','true');
    count++;
})
 
$('#btn3').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn3').hasClass('dblclicked')){
            $('#btn3').addClass('clicked');
        }
    }
    $('#btn3').attr('disabled','true');
    count++;
})
$('#btn4').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn4').hasClass('dblclicked')){
            $('#btn4').addClass('clicked');
        }
    }
    $('#btn4').attr('disabled','true');
    count++;
})
$('#btn5').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn5').hasClass('dblclicked')){
            $('#btn5').addClass('clicked');
        }
    }
    $('#btn5').attr('disabled','true');
    count++;
})
$('#btn6').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn6').hasClass('dblclicked')){
            $('#btn6').addClass('clicked');
        }
    }
    $('#btn6').attr('disabled','true');
    count++;
})
$('#btn7').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn7').hasClass('dblclicked')){
            $('#btn7').addClass('clicked');
        }
    }
    $('#btn7').attr('disabled','true');
    count++;
})
$('#btn8').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn8').hasClass('dblclicked')){
            $('#btn8').addClass('clicked');
        }
    }
    $('#btn8').attr('disabled','true');
    count++;
})
$('#btn9').click(function(e){
    if(count%2 == 0){
        if(!$(this).hasClass('clicked')){
            $(this).addClass('dblclicked');
        }
    }
    else{
        if(!$('#btn9').hasClass('dblclicked')){
            $('#btn9').addClass('clicked');
        }
    }
    $('#btn9').attr('disabled','true');
    count++;
})
