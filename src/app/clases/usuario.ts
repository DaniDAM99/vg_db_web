export class Usuario {
    id?: number
    username?: String
    email?: String
    password?: String
}

export interface accesoUsuario {
    email: string
    password: string
}