const Controller = require("egg").Controller;

class AuthorController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { username, password } = ctx.query;
    console.log(username, password);
    if (username === "admin" && password === "123456") {
      const token = app.jwt.sign({
        username: username
      });
      ctx.status = 200;
      ctx.body = {
        token: token
      }
    } else {
      ctx.status = 401;
      ctx.body = "用户名或者密码错误";
    }
  }
}

module.exports = AuthorController;
