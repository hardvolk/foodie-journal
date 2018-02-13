// tslint:disable:max-line-length
import { Journey } from '../interfaces/journey';

export const journeys: Journey[] = [
    {
        name: 'American',
        iconUrl: '../../../assets/icons/burger.svg',
        description: 'One characteristic of American cookinig is the fusion of multiple ethnic or regional approaches.',
        duration: '3.5 weeks',
        dish: ['Cheeseburger', 'Hot Dog', 'Philly Cheese Steak', 'Chicago-style Pizza', 'Apple Pie',
            'Barbecue Ribs', 'Buffalo Wings', 'Macaroni and Cheese', 'Grilled Cheese', 'Meatloaf'],
        dishrest: ['burger-station-san-pedro-garza-garcía', 'jochoman-monterrey', 'steak-escape-monterrey',
            'mozzarella-monterrey', 'el-nuevo-nopal-monterrey-2', 'h-d-morris-y-sons-monterrey',
            'buffalo-wild-wings-monterrey', 'cueva-carvajal-monterrey', 'reina-monterrey',
            'mrs-white-zona-campestre']
    },
    {
        name: 'French',
        iconUrl: '../../../assets/icons/fork_and_spoon.svg',
        description: 'French food and cooking is generally considered the backbone or the underpinning of many cuisines across the Western World.',
        duration: '4 weeks',
        dish: ['Cheese Souffle', 'Steak Tartare', 'Foie Gras', 'Bouillabaise', 'Ratatouille', 'Coq au Vin',
            'Quiche Lorraine', 'Boeuf Bourguignon', 'Crepes', 'Baguette'],
        dishrest: ['crêpe-de-paris-monterrey', 'pangea-san-pedro-garza-garcía-2', 'pangea-san-pedro-garza-garcía-2',
            'amadeus-restaurant-san-pedro-garza-garcía', 'tierra-libre-monterrey',
            'gaston-brasserie-san-pedro-garza-garcía', 'amelie-peche-san-pedro-garza-garcía',
            'la-petite-bretonne-monterrey', 'crêpe-de-paris-residencial-chipinque', 'bread-san-pedro-garza-garcía-2']
    },
    {
        name: 'Italian',
        iconUrl: '../../../assets/icons/pizza.svg',
        description: 'Italian cuisine is characterized by its simplicity, with many dishes having only two to four main ingredients.',
        duration: '3 weeks',
        dish: ['Lasagna', 'Risotto', 'Pizza', 'Spaghetti', 'Calzone', 'Arancini',
            'Prosciutto', 'Tiramisu', 'Minestrone', 'Fetuccine Alfredo'],
        dishrest: ['ciao-italia-barrio-antiguo-monterrey', 'di-massimo-monterrey', 'mozzarella-monterrey',
            'il-castello-di-frabo-monterrey', 'napoli-monterrey-2', 'il-capriccio-san-pedro-garza-garcía',
            'guilia-monterrey', 'piacere-monterrey', 'arlecchino-monterrey', 'lo-spuntino-monterrey']
    },
    {
        name: 'Mexican',
        iconUrl: '../../../assets/icons/taco.svg',
        description: 'Mexican cuisine is as complex as other ancient cuisines, such as those of China and Japan.',
        duration: '2 weeks',
        dish: ['Tacos', 'Pozole', 'Huevos Rancheros', 'Enchiladas', 'Tamales', 'Chile Relleno',
            'Mole', 'Sopa de Tortilla', 'Carne Asada', 'Churros'],
        dishrest: ['taqueria-y-carniceria-la-mexicana-monterrey', 'pozole-y-tacos-regios-monterrey', 'palax-monterrey',
            'akb-alimentos-san-pedro-garza-garcía', 'tamales-salinas-monterrey', 'tacos-félix-monterrey-4',
            'madre-oaxaca-monterrey', 'cafeterias-toks-monterrey-2', 'la-nacional-monterrey', 'la-purísima-contry-monterrey']
    },
    {
        name: 'Japanese',
        iconUrl: '../../../assets/icons/sushi.svg',
        description: 'The traditional cuisine of Japan (和食 washoku) is based on rice with miso soup and other dishes.',
        duration: '2 weeks',
        dish: ['Sushi', 'Miso Soup', 'Tempura', 'Teppanyaki', 'Ramen', 'Yakitori', 'Yakisoba',
            'Sashimi', 'Onigiri', 'Gyoza'],
        dishrest: ['yama-to-monterrey', 'kadan-monterrey', 'señor-tanaka-san-pedro-garza-garcía',
            'ikkyu-zona-valle-del-mezquite', 'yamasan-ramen-house-zona-campestre',
            'temakita-san-pedro-garza-garcía', 'ja-temakeria-monterrey-2', 'sushi-itto-no-title',
            'tenpu-san-pedro-garza-garcía', 'fu-ten-san-pedro-garza-garcía']
    }
];
