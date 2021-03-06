const charactersList = document.getElementById('charactersList')
let bbCharacters = []

const getAllCharacters = async () => {
	const base = 'https://www.breakingbadapi.com/api/characters'

	try {
		const response = await fetch(base)
		if (!response.ok) {
			throw new Error(response.status)
		}
		bbCharacters = await response.json()
		displayCharacters(bbCharacters)
	} catch (error) {
		console.log('Something is wrong here!')
		console.log(error)
	}
}

const displayCharacters = (characters) => {
	const htmlString = characters
		.map((character) => {
			return `
            <li class="character">
                <img src="${character.img}" alt="image of characer" />
                <h2>${character.name}</h2>
                <p>${character.birthday}</p>
                ${character.occupation
					.map((job) => {
						return `
                    <p>${job}</p>
                    `
					})
					.join('')}
            </li>
            `
		})
		.join('')
	console.log(characters)
	charactersList.innerHTML = htmlString
}

getAllCharacters()
