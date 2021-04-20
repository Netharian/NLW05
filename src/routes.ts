import { Router } from 'express'
import { SettingsController } from './controlllers/SettingsController';



const routes = Router();

const settingsController = new SettingsController();


/**
 * Tipos de parametros
 * Params => Parametros de rotas
 * Query Params => Filtros e buscas
 * Body Params => Objetos dentro das requisiçoes
 */

routes.post("/settings", settingsController.create)

export { routes }