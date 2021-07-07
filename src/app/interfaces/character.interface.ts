import { Location } from './location.interface';
export interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {},
  location: Location,
  image: string,
  episode: string[], // ???????????????????????
  url: string,
  created: string
}
