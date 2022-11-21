let GMT = document.getElementById('gmt');
const url = 'https://worldtimeapi.org/api/ip';
fetch(url)
	.then(response => response.json())
	.then(data =>{
  console.log(data);
  console.log(data.abbreviation)
  GMT.innerText+=data.abbreviation;
  console.log(GMT);
 })
	.catch(err => console.error(err));

