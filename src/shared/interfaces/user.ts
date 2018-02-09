export interface User {
    name: string;
    email: string;
    password: string;
<<<<<<< HEAD
    journeys?: {
        0?: boolean[];
        1?: boolean[];
        2?: boolean[];
        3?: boolean[];
        4?: boolean[];
    };
=======
    currentJourney?: string;
    journey1?: boolean[];
    journey2?: boolean[];
    journey3?: boolean[];
    journey4?: boolean[];
    journey5?: boolean[];
>>>>>>> 9ebe9cad59cd97c4761231b85c53cfb604784c3d
}
