export interface Movie {
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
    characters: Cast;
}

export interface Cast {
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

export interface Characters {
    id: string;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: Url[];
    thumbnail: Thumbnail;
    series: Movie;
}
