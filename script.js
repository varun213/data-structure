var text;
var news = new XMLHttpRequest();

news.open ('GET', 'data.json' , true);
news.responseType = 'text';
news.send(null);

news.onload = function() {
    if (news.status === 200){
    text = JSON.parse(news.responseText);
    console.log(text);
    display(0);
    }
}
// this is javascript file 
// time is 5:54
