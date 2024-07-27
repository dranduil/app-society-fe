interface Enviroment {
    apiUrl:string,
    enviroment:string,
    nameApp:string,
}

export const configProd:Enviroment = {
    apiUrl: 'http://165.232.112.147',
    enviroment: 'dev',
    nameApp: 'Flexa'
}

export const configLocal:Enviroment = {
    apiUrl: 'https://latin_socity.test',
    enviroment: 'dev',
    nameApp: 'Flexa'
}