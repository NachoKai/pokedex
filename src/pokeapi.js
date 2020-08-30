const BASE_URL = "https://api.jikan.moe/v3";

const getResource = async resourceUrl => {
	const response = await fetch(resourceUrl);
	if (!response.ok) {
		throw new Error("API Error");
	}

	return response.json();
};

const jikan = {
	searchAnime: searchTerm => getResource(`${BASE_URL}/search/anime?q=${encodeURIComponent(searchTerm)}`),
	getAnimeById: id => getResource(`${BASE_URL}/anime/${id}`),
};

export default jikan;
