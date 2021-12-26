var _url = "https://icanhazdadjoke.com/";
var joke = document.getElementById("joke");

function getJoke(){
	fetch(_url,{
		method : 'GET',
		headers : {
			'Accept' : 'application/json'
		}
	})
	.then(response => response.json())
	.then(data => {
		joke.innerHTML = data.joke;
	})
}