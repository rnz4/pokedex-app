class PokemonService {
  async getPokemons() {
    try {
      const response = await fetch(`http://localhost:8000/pokemons`);
      return await response.json();
    } catch (error) {
      console.log(`Error fetching pokemons: ${error}`);
    }
  }
}

const instance = new PokemonService();
Object.freeze(instance);

export default instance;
