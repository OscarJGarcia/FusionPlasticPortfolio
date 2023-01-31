import images from '../../shared/constants/images';


interface Product {
    id: string;
    name: string;
    colors: string[];
    images: string[];
    description?: string;
}

export const products: Product[] = [
    {
        id: "TPA18",
        name: "Tapa aireador #18",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        images: [images.home, images.ship, images.home],
        colors: ['#FFFFFF', '#000000']
    },
    {
        id: "TPS18",
        name: "Tapa de seguridad #18",
        images: [images.home],
        colors: ['#FFFFFF', '#000000']
    },
    {
        id: "TPN18",
        name: "Tapón aireador #18",
        images: [images.home],
        colors: ['#FFFFFF', '#000000']
    },
    {
        id: "TPP18",
        name: "Tapa perforada #18",
        images: [images.home],
        colors: ['#FFFFFF', '#000000']
    },
];