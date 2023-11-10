"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, jwt } = app;
  router.resources("/login", "/api/login", controller.author);
  router.resources("/list", "/api/list", jwt, controller.list);
};
