import { Plataforma } from "./plataforma"

export class Usuario {
    id?: number
    username?: String
    email?: String
    password?: String
    plataformas?: Plataforma
}

export interface accesoUsuario {
    email: string
    password: string
}