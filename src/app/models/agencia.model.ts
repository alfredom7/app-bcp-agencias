export class Agencia{
    id: number;
    agencia: string = ''; 
    distrito: string = ''; 
    provincia: string = ''; 
    departamento: string = ''; 
    direccion: string = ''; 
    lat: number = 0; 
    lon: number = 0;
    favorite: boolean;

    constructor(
        id: number, agencia: string, distrito: string, provincia: string, 
        departamento: string, direccion: string, lat: number, lon: number, favorite: boolean
    ){
        this.id = id;
        this.agencia = agencia;
        this.distrito = distrito;
        this.provincia = provincia;
        this.departamento = departamento;
        this.direccion = direccion;
        this.lat = lat;
        this.lon = lon;
        this.favorite = favorite;
    }

}