let pokeCounts = document.querySelectorAll('.poke-group-count');

for(let i=0; i<pokeCounts.length; i++) {
	let pokeCount = pokeCounts[i];
	let pokeGroup = pokeCount.closest('.poke-group');
	let pokeCountDone = pokeGroup.querySelectorAll('.poke-group-item.done').length;
	let pokeCountNumber = pokeGroup.querySelectorAll('.poke-group-item').length;
	pokeCount.textContent = pokeCountDone + '/' + pokeCountNumber;
}