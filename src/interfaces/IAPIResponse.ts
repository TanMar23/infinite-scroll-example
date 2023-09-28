export interface IAPIResponse {
    info: Info;
    results: ICharacter[];
}

export interface Info {
    count: number;
    pages: number;
    next: string;
    prev: string;
}

export interface ICharacter {
    id: number;
    name: string;
    url: string;
    image: string;
    species: string;
  }
  