/**
 * Created by user on 2018/8/16.
 */
const Controller = require('egg').Controller;
class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world'
    }
}
module.exports = HomeController