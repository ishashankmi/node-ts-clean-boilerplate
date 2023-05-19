import {Request, Response, NextFunction} from 'express';
export interface ROLES_INTERFACE {
    ADMIN: number,
    USER: number,
}

export interface RESPONSE_HANDLER {
    req?: Request,
    resp: Response,
    next?: NextFunction,
    status_code?: number,
    data?: any,
    msg?: string,
    success?: string | boolean
}