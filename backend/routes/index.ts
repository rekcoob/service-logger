// https://medium.com/javascript-in-plain-english/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4
import { Router } from 'express';
import logRoutes from './logRoutes';
import techRoutes from './techRoutes';

const routes: Router = Router();

routes.use('/logs', logRoutes);
routes.use('/techs', techRoutes);

export default routes;
