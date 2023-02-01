export interface Route {
    name: string,
    path: string
}

const routes: Route[] = [
    {
        name: "Inicio",
        path: '/'
    },
    {
        name: "Nosotros",
        path: '/#about'
    },
    {
        name: "Productos",
        path: '/#product'
    },
    {
        name: "Contactar",
        path: '/contact'
    }
];

export default routes;