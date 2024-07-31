interface Enviroment {
    apiUrl:string,
    enviroment:string,
    nameApp:string,
}

export const configProd:Enviroment = {
    apiUrl: 'https://flexa.life',
    enviroment: 'prod',
    nameApp: 'Flexa Life'
}

export const configLocal:Enviroment = {
    apiUrl: 'https://latin_socity.test',
    enviroment: 'dev',
    nameApp: 'Flexa'
}