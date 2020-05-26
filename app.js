const getAllCharacters = async () => {
	const base = 'https://www.breakingbadapi.com/api/characters'

	try {
		const response = await fetch(base)
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log(error)
	}
}

getAllCharacters()
