console.log('connected')
var pl1 = prompt('Enter First Player Name (You will be blue):');
var pl2 =prompt('Enter Second Player Name (You will be Red):');
var m1 = "Player One: It is your turn, please pick a column to drop your Blue chip!:"+pl1
var m2 = "Player Two: It is your turn, please pick a column to drop your Red chip!:"+pl2
var i=0;
var p1=1;
var p2=0;
var t;

$('p').text(m1);
var color=['rgb(255, 5, 5)','rgb(23, 8, 240)', 'rgb(150, 150, 150)']

var btns = document.querySelectorAll('button');
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener('click',drop);
}

$('#ex').on('click',function() {
    if($('a').text() === 'Reset'){
        document.body.style.backgroundColor='rgb(255, 255, 255)'
        $('p').text(m1);
        $('a').text('Exit');
        var i=0;
        while (i<btns.length){
            $('button').eq(i).css('background-color',color[2]);
            i+=1;
        }
        for(var i=0;i<btns.length;i++){
            btns[i].addEventListener('click',drop);
        }
    }else
    {
        prompt("Thanks for playing Game");
        for(var i=0;i<btns.length;i++){
            btns[i].removeEventListener('click',drop);
        }
        $('a').text('Reset');
    }
})


var table =$('table tr');
function drop() {
    console.log('In drop')
    var tempw='';
    var tempc=''
    var col =$(this).closest('td').index();
    var row=0;
    for (var i=5;i>=0;i--){
        if(table.eq(i).find('td').eq(col).find('button').css('background-color') ==='rgb(150, 150, 150)'){
            console.log("ROW: "+(i+1)+" COLOMN: "+(col+1));
            row=i;
                        if(window.p1===1){
                            table.eq(i).find('td').eq(col).find('button').css("background-color",'rgb(23, 8, 240)');
                            window.p2=1;
                            window.p1=0;
                            tempw=pl1;
                            tempc='rgb(23, 8, 240)'
                        }
                        else{
                            table.eq(i).find('td').eq(col).find('button').css("background-color",'rgb(255, 5, 5)');
                            window.p2=0;
                            window.p1=1;
                            tempw=pl2;
                            tempc='rgb(255, 5, 5)'
                        }

                   if( rowwin(tempw,tempc)||coloumnwin(tempw,tempc)){
                    for(var i=0;i<btns.length;i++){
                        btns[i].removeEventListener('click',drop);
                    }
                    $('a').text('Reset');
                    return
                     }else
                    {
                                var j=0;
                                var i=0;
                                while (i<btns.length){
                                    if( $('button').eq(i).css('background-color') === 'rgb(150, 150, 150)'){
                                        j=1;
                                    }     
                                    i++;
                                }
                              if(j===0)
                                {
                                    prompt("Game Over!");
                                    for(var i=0;i<btns.length;i++){
                                        btns[i].removeEventListener('click',changecolor);}
                                    $('a').text('Reset');
                                    return;
                                }

                                if(tempw===pl1){
                                    $('p').text(m2);
                                    return
                                }else
                                {
                                    $('p').text(m1);
                                    return
                                }
                        }
        }
    }
    alert("Choose Another Colomn");
}

function rowwin(x,c){
    for(var r=6;r>=0;r--){
        for (var col=0;col<4;col++){
            var one=table.eq(r).find('td').eq(col).find('button').css('background-color');
            var two=table.eq(r).find('td').eq(col+1).find('button').css('background-color');
            var three=table.eq(r).find('td').eq(col+2).find('button').css('background-color');
            var four=table.eq(r).find('td').eq(col+3).find('button').css('background-color');
            if(one===c && two===c && three===c && four===c){
                if(c=='rgb(23, 8, 240)'){
                    document.body.style.backgroundColor='rgb(181, 209, 255)';
                }else{
                    document.body.style.backgroundColor='rgb(237, 206, 208)';
                }
                table.eq(r).find('td').eq(col).find('button').css('background-color','rgb(0, 255, 0)');
                table.eq(r).find('td').eq(col+1).find('button').css('background-color','rgb(0, 255, 0)');
                table.eq(r).find('td').eq(col+2).find('button').css('background-color','rgb(0, 255, 0)');
                table.eq(r).find('td').eq(col+3).find('button').css('background-color','rgb(0, 255, 0)');
                $('p').text(x+"  WON! by move row no:"+(r+1)+"col no:"+(col+1)+" to "+(col+4));
                document.body.style.backgroundColor='rgb(249, 229, 0)'
                return true;
            }
        }
    }
}
function coloumnwin(x,c){
    for(var col=0;col<=6;col++){
        for (var r=2;r>=0;r--){
            var one=table.eq(r).find('td').eq(col).find('button').css('background-color');
            var two=table.eq(r+1).find('td').eq(col).find('button').css('background-color');
            var three=table.eq(r+2).find('td').eq(col).find('button').css('background-color');
            var four=table.eq(r+3).find('td').eq(col).find('button').css('background-color');
            if(one===c && two===c && three===c && four===c){
                if(c=='rgb(23, 8, 240)'){
                    document.body.style.backgroundColor='rgb(181, 209, 255)';
                }else{
                    document.body.style.backgroundColor='rgb(237, 206, 208)';
                }
                table.eq(r).find('td').eq(col).find('button').css('background-color','rgb(0, 255, 0)');
                table.eq(r+1).find('td').eq(col).find('button').css('background-color','rgb(0, 255, 0)');
                table.eq(r+2).find('td').eq(col).find('button').css('background-color','rgb(0, 255, 0)');
                table.eq(r+3).find('td').eq(col).find('button').css('background-color','rgb(0, 255, 0)');
                $('p').text(x+"  WON! by move row no:"+(r+1)+" to "+(r+4)+" col no: "+(col+1));
                return true;
            }
        }
    }
}

   



