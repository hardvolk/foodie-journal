// tslint:disable:max-line-length
export interface Journey {
    name: string;
    description: string;
    dish: any[];
    dishrest: any[];
}
export const journeys: Journey[] = [
    {
        name: 'American',
        description: 'The cuisine of the United States reflects its history. The European colonization of the Americas yielded the introduction of a number of ingredients and cooking styles to the latter. The various styles continued expanding well into the 19th and 20th centuries, proportional to the influx of immigrants from many different nations; such influx developed a rich diversity in food preparation throughout the country.',
        dish: ['Cheeseburger', 'Hot Dog', 'Philly Cheese Steak', 'Chicago-style Pizza', 'Apple Pie',
            'Barbecue Ribs', 'Buffalo Wings', 'Macaroni and Cheese', 'Grilled Cheese', 'Meatloaf'],
        dishrest: ['burger-station-san-pedro-garza-garcía', 'jochoman-monterrey', 'steak-escape-monterrey',
            'mozzarella-monterrey', 'el-nuevo-nopal-monterrey-2', 'h-d-morris-y-sons-monterrey',
            'buffalo-wild-wings-monterrey', 'cueva-carvajal-monterrey', 'reina-monterrey',
            'mrs-white-zona-campestre']
    },
    {
        name: 'French',
        description: 'French food and cooking is generally considered the backbone or the underpinning of many cuisines across the Western World. Typical French foods rely heavily on local products. Fresh apples, berries, haricot verts, leeks, mushrooms, and various squash and stone fruits are among the most commonly used products. Poultry, beef, lamb, and veal are readily available year round; game meat is especially popular.',
        dish: ['Cheese Souffle', 'Steak Tartare', 'Foie Gras', 'Bouillabaise', 'Ratatouille', 'Coq au Vin',
            'Quiche Lorraine', 'Boeuf Bourguignon', 'Crepes', 'Baguette'],
        dishrest: ['crêpe-de-paris-monterrey', 'pangea-san-pedro-garza-garcía-2', 'pangea-san-pedro-garza-garcía-2',
            'amadeus-restaurant-san-pedro-garza-garcía', 'tierra-libre-monterrey',
            'gaston-brasserie-san-pedro-garza-garcía', 'amelie-peche-san-pedro-garza-garcía',
            'la-petite-bretonne-monterrey', 'crêpe-de-paris-residencial-chipinque', 'el-antojito-francés-monterrey']
    },
    {
        name: 'Italian',
        description: 'Italian cuisine is characterized by its simplicity, with many dishes having only two to four main ingredients. Italian cooks rely chiefly on the quality of the ingredients rather than on elaborate preparation. Ingredients and dishes vary by region. Many dishes that were once regional, have proliferated with variations throughout the country. Pasta, vegetables, olive oil and fish are a major part of the Italian cuisine.',
        dish: ['Lasagna', 'Risotto', 'Pizza', 'Spaghetti', 'Calzone', 'Arancini',
            'Prosciutto', 'Tiramisu', 'Minestrone', 'Fetuccine Alfredo'],
        dishrest: ['ciao-italia-barrio-antiguo-monterrey', 'di-massimo-monterrey', 'mozzarella-monterrey',
            'il-castello-di-frabo-monterrey', 'napoli-monterrey-2', 'il-capriccio-san-pedro-garza-garcía',
            'guilia-monterrey', 'piacere-monterrey', 'arlecchino-monterrey', 'lo-spuntino-monterrey']
    },
    {
        name: 'Mexican',
        description: 'Mexican cuisine is as complex as other ancient cuisines, such as those of China and Japan, with techniques and skills developed over thousands of years of history. It is created mostly with ingredients native to Mexico, as well as those brought over by the Spanish conquistadors, with some new influences since then.',
        dish: ['Tacos', 'Pozole', 'Huevos Rancheros', 'Enchiladas', 'Tamales', 'Chile Relleno',
            'Mole', 'Sopa de Tortilla', 'Carne Asada', 'Churros'],
        dishrest: ['taqueria-y-carniceria-la-mexicana-monterrey', 'pozole-y-tacos-regios-monterrey', 'palax-monterrey',
            'akb-alimentos-san-pedro-garza-garcía', 'tamales-salinas-monterrey', 'tacos-félix-monterrey-4',
            'madre-oaxaca-monterrey', 'cafeterias-toks-monterrey-2', 'la-nacional-monterrey', 'la-purísima-contry-monterrey']
    },
    {
        name: 'Japanese',
        description: 'The traditional cuisine of Japan (和食 washoku) is based on rice with miso soup and other dishes; there is an emphasis on seasonal ingredients. Side dishes often consist of fish, pickled vegetables, and vegetables cooked in broth. Seafood is common, often grilled, but also served raw as sashimi or in sushi.',
        dish: ['Sushi', 'Miso Soup', 'Tempura', 'Teppanyaki', 'Ramen', 'Yakitori', 'Yakisoba',
            'Sashimi', 'Onigiri', 'Gyoza'],
        dishrest: ['yama-to-monterrey', 'kadan-monterrey', 'señor-tanaka-san-pedro-garza-garcía',
            'ikkyu-zona-valle-del-mezquite', 'yamasan-ramen-house-zona-campestre',
            'temakita-san-pedro-garza-garcía', 'ja-temakeria-monterrey-2', 'sushi-itto-no-title',
            'tenpu-san-pedro-garza-garcía', 'fu-ten-san-pedro-garza-garcía']
    }
];
