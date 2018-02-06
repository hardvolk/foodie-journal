export interface Restaurant {
    id: string;
    name: string;
    image_url: string;
    phone: string;
    url: string;
    price: string;
    rating: number;
    review_count: number;
    categories: {
        title: string;
    };
    location: {
        displayaddress: string[];
    };
    hours: {
        is_open_now: boolean;
    };
    coordinates: {
        latitude: number;
        longitude: number;
    };
    gmapsurl?: string;
}
