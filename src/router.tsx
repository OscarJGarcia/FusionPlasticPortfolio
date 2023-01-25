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
        path: '/'
    },
    {
        name: "Productos",
        path: '/'
    },
    {
        name: "Contactar",
        path: '/contact'
    }
];

export default routes;