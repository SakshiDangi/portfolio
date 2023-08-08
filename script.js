let w = 30;
let h = 30;

function pixel(){
    for(var i = 0; i<h; i++){
        for(var j = 0; j<w; j++){
            let span = document.createElement('span');
            let random = Math.random() * 1;
            let randomFixed = random.toFixed(2);
            
            document.getElementById('pixel').appendChild(span);
            span.style.left = j * 10 + 'pt';
            span.style.top = i * 10 + 'pt';
            span.style.backgroundPosition = -j * 10 + 'pt ' + -i * 10 + 'pt, center' ;
            span.style.animationDelay = randomFixed + 's';
        }
    }
}
pixel();

