export interface IMovie {
    movieId: number,
    description: string,
    title: string,
    genre: Genre,
    image: string,
    year: number
}

export type Genre = {
    genreId: number,
    genreName: string
}