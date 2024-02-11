export type Game = {
    id: string;
    title: string;
    description: string;
    image: string;
    prev: string;
    url: string;
    tags?: string[];
    date?: string;
    rating: number;
}