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
        images: [images.home],
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