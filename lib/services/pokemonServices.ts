import axios from "axios";

export const fetchPokemons = async (): Promise<Pokemon[]> => {
    try {
        const response = await axios.get(`https://api.pokemontcg.io/v2/cards`, {
            headers: {
                'X-Api-Key': 'fd26c9bf-f1a6-4817-9460-0ec0d10718ce'
            }
        });
        return response.data.data.map((pokemon: Pokemon) => ({
            id: pokemon.id,
            name: pokemon.name,
            images: {
                small: pokemon.images.small,
                large: pokemon.images.large
            }
        }));

    } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        return [];
    }
}

