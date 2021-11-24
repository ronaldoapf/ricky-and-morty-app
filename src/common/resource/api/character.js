import api from '.';

const baseURL = "/character";

const CharacterAPI = {
  getCharacter() {
    return api.get(baseURL);
  }
}

export default CharacterAPI;