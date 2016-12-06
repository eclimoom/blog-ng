# Blog

The project is based on nodejs 、LoopBack、Mongodb.

# Build your own blog with Angular 2 and StrongLoop(Loopback) & Mongodb.

前端基于Angular 2，后端是基于Node的Loopback服务端，数据存储用的MongoDB

* Install [http://nodejs.org/](http://nodejs.org/)
* Install [http://loopback.io/](http://loopback.io/)
* Install Angular2 Cli [http://cli.angular.io/](http://cli.angular.io/)


## git clone [git://url]
cd blog
```
npm install
```

cd blog/client
```
npm install -g angular-cli
npm install
ng serve
```


1.配置loopback 数据源
```
slc loopback:datasource

 "mongodb": {   "port": 27017,   "url": "mongodb://localhost:27017/blog",   "name": "mongodb",   "connector": "mongodb" }
```

创建免费数据库
https://mlab.com


2.创建实体对象
```
slc loopback:model
post
```




