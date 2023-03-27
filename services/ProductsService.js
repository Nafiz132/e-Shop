const PRODUCT = [
    {
        id: 100,
        name: 'BENGO G9000 Headset',
        price: 35,
        image: require('../assets/products/headset.jpg'),
        description: 'BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround, Soft Memory Earmuffs for Laptop Mac Nintendo NES Games'
    },
    {
        id: 101,
        name: 'Aventador 780-4 Ultimate Roadster',
        price: 60000,
        image: require('../assets/products/car.jpg'),
        description: 'With a production of only 250 units, the Aventador 780-4 Ultimate Roadster is the newest—and final—open-top version of a legendary family.'
    },
    {
        id: 102,
        name: 'Lenovo Yoga 7i Core i7 11th Gen',
        price: 200,
        image: require('../assets/products/laptop.jpg'),
        description: 'Model: Yoga  Processor: Intel Core i7-1165G7 (12M Cache, 2.80 GHz up to 4.70 GHz) RAM: 12GB DDR4 3200MHz SSD: 512GB M.2 NVMe.'
    },
    {
        id: 103,
        name: 'Cricket Bat',
        price: 50,
        image: require('../assets/products/cricketBat.jpg'),
        description: 'We have a comprehensive range of cricket bats in English and Kashmir Willow. Find all the famous bats here. All the great batting legends in one team at worlds finest cricket shop. Cricket Bats from SS, SG, Kookaburra, Gunn & Moore (GM), Gortonshire, Gray Nicolls (GN), Spartan, Adidas and MRF, DSC, Adidas, New Balance.'
    }
];
export function getProducts() {
    return PRODUCT;
}
export function getProduct(id) {
    return PRODUCT.find((product) => (product.id == id));
}