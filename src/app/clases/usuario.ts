import { Plataforma } from "./plataforma"

export class Usuario {
    id?: number
    username?: String
    email?: String
    password?: String
    plataformas?: Plataforma
    provincia?: string
}

export interface accesoUsuario {
    email: string
    password: string
}