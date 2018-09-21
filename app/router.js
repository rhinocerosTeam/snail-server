/**
 * Created by user on 2018/8/16.
 */
// app/router.js
module.exports = app => {
    const { router, controller } = app;
    router.get('/', controller.home.index);
};