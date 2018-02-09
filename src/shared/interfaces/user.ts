export interface User {
    name: string;
    email: string;
    password: string;
    currentJourney?: string;
    journeys?: {
        0?: boolean[];
        1?: boolean[];
        2?: boolean[];
        3?: boolean[];
        4?: boolean[];
    };
}
