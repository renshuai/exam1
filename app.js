const mongoose=require('mongoose')
const spider = require('./spider/index');
require('./model/index');
const albumsDao = require('./dao/index');

mongoose.connect('mongodb://39.98.54.111/mydb',function (err) {
    console.log('数据库已连接');
    if (!err) {
        const options = {
            host: 'johnyu.cn',
            port: 3000,
            path: '/albums'
        };



        spider.request(options, function (err, albums) {
            console.log(albums);
            if (!err) {
                albumsDao.addAlbums(albums,function (err, newAlbums) {
                    if (!err1) {
                        console.log('添加成功');
                    }
                })
            }

        })
    }

})


