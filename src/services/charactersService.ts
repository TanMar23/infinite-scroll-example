import axios, { AxiosError } from "axios";
import { IAPIResponse } from "../types/IAPIResponse";
import { ICharacter } from "../types/ICharacter";

interface IAPIResponseCharacters extends IAPIResponse {
    info: {
        count: number,
        next: string,
        pages: number,
    }
    results: ICharacter[]
}

export type ErrorResponse = {
    data?: { [key: string]: string }
    status: number
}

export const listCharacters: (params: {
    [key: string]: string | number | boolean
  }) => Promise<[IAPIResponseCharacters | null, ErrorResponse | null]> = async (
    params = {}
) => {
    try {
        const response = await axios
        .get('https://rickandmortyapi.com/api/character', params)
        return [response.data, null]
    } catch (e) {
        const error = e as AxiosError
        const { data, status } =  error.response || {}
        return [
            null,
            { data: data as { [key: string]: string }, status: status || 500 }
          ]
        
    }
}
