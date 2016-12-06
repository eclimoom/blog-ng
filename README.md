# Blog

The project is based on Angular 2 and StrongLoop(Loopback) & Mongodb.
前端基于Angular 2，后端是基于Node的Loopback服务端，数据存储用的MongoDB

* Install [NodeJs](http://nodejs.org/)
* Install [Loopback](http://loopback.io/)
* Install [Angular2 Cli](http://cli.angular.io/)


## git clone [git://url]
cd blog
```
npm install
```

cd blog/webapp
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




创建前端
\blog
```
ng new webapp
ng bew webapp
cd webapp
npm install

ng serve
ng build
```

