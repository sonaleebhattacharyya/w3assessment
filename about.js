console.log("hello world");

let imgTag = document.querySelector('img')

let compliments = ['You are the best', 'You are navigating this page like a pro','you really love ducks, huh? Good for you!', 'I love your hat!']

function handleMouseover(evt){
	const randomIndex = Math.floor(Math.random() * compliments.length)
	let randomCompliment = compliments[randomIndex]
	return alert(randomCompliment)
}


function handleSubmit(evt) {
	evt.preventDefault();
	alert('form was submitted successfully');
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);
imgTag.addEventListener('mouseover',handleMouseover)