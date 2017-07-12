import { Router } from 'express';

import * as postController from './post.controllers';
import { authLocal } from '../../services/auth.services';

const routes = new Router();

routes.post('/', authLocal, postController.createPost);

export default routes;
