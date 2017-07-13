import { Router } from 'express';
import validate from 'express-validation';

import * as postController from './post.controllers';
import { authJwt } from '../../services/auth.services';
import postValidation from './post.validations';

const routes = new Router();

//  Posts
routes.post(
  '/',
  authJwt,
  validate(postValidation.createPost),
  postController.createPost,
);
routes.get('/:id', authJwt, postController.getPostById);
routes.get('/', authJwt, postController.getPostsList);
routes.patch(
  '/:id',
  authJwt,
  validate(postValidation.updatePost),
  postController.updatePost,
);
routes.delete('/:id', authJwt, postController.deletePost);

//  Favorites
routes.post('/:id/favorites', authJwt, postController.favoritePost);

export default routes;
