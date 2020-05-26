const searchBar = document.getElementById('searchBar')

searchBar.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase()

	const filteredCharacters = bbCharacters.filter((character) => {
		return character.name.toLowerCase().includes(searchString)
	})
	displayCharacters(filteredCharacters)
})
