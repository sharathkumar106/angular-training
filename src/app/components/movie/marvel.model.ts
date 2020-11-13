export interface MarvelMovies {
    id: string;
    title: string;
    description: string;
    resourceURI: string;
    urls: Url[];
    startYear: string;
    endYear: string;
    rating: string;
    modified: string;
    thumbnail: Thumbnail;
    characters: Characters;
}

export interface Characters {
    available: string;
    returned: string;
    collectionURI: string;
}

export interface Thumbnail {
    path: string;
    extension: string;
}

export interface Url {
    type: string;
    url: string;
}
