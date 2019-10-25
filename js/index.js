function sendURL()
{
    var newsruls = document.getElementById("url_input").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status == 201){
            // var jsonz = JSON.parse(xhttp.responseText);
            document.getElementById("fakescore").innerHTML = xhttp.responseText["fakescore"];

        }else{
            document.getElementById("fakescore").innerHTML = "Something failed";

        }
    }

    xhttp.send(JSON.stringify({"news_type":"url", "news_url":newsurls}));
}

function sendArticle()
{

    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState === 4 && xhttp.status == 201){
            // var jsonz = JSON.parse(xhttp.responseText);
            document.getElementById("fakescore").innerHTML = xhttp.responseText["fakescore"];

        }else{
            document.getElementById("fakescore").innerHTML = "Something failed";

        }
    }

    xhttp.send(JSON.stringify({"news_type":"url", "news_url":newsurls}));
}