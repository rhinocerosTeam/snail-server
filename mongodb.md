# 安装MongoDB

ssh ubuntu@154.8.222.43


### 安装
~~~
sudo apt-get install mongodb
~~~

### 输出版本信息
~~~
mongo -version
~~~

### 进入mongo
~~~
mongo
~~~


### 启动和关闭mongodb命令
~~~

cd /home/ubuntu/mongodb-linux-x86_64-ubuntu1604-4.0.2/bin

sudo  nohup ./mongod --dbpath=/home/ubuntu/data/db &

~~~


### MongoDB是随Ubuntu启动自动启动
~~~
pgrep mongo -l
~~~

### 卸载MongoDB
~~~
sudo apt-get --purge remove mongodb mongodb-clients mongodb-server
~~~

~~~
ss -tnlup
~~~

## 修改密码

~~~
// 进入admin存储空间
use admin
// 创建超级用户
db.createUser({user: "adminsnail", pwd: "snailpwd19890910",roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]})
// 创建低权限用户
db.createUser(
   {
     user: "myuser",
     pwd: "myuser",
    roles: [ { role: "readWrite", db: "mydb" } ]
   }
)

// 验证是否成功
db.auth("adminsnail","snailpwd19890910")

~~~


## 检测mongodb 是否启动
~~~
mongostat
~~~