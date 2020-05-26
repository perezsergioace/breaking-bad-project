const getAllCharacters = async () => {
	const base = 'https://www.breakingbadapi.com/api/characters'

	try {
		const response = await fetch(base)
		if (!response.ok) {
			throw new Error(response.status)
		}
		const data = await response.json()
		console.log(data)
	} catch (error) {
		console.log('Something is wrong here!')
		console.log(error)
	}
}

// getAllCharacters()
