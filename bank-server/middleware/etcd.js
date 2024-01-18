const { Etcd3 } = require('etcd3');

// 连接客户端
let conf = {
    hosts: "127.0.0.1:2379",
    auth: {
        username: 'root',
        password: 'password',
    }
}
const client = new Etcd3(conf);

// 设值
let SetOfEtcd = async (key, value) => {
    await client.put(key).value(value);
}

// 取值
let GetOfEtcd = async (key) => {
    return await client.get(key).json()
}

// 判断key是否存在
let ExistOfEtcd = async (key) => {
    return await client.get(key).exists()
}

// 根据前缀取值
let GetOfEtcdByPrefix = async () => {
    return await client.getAll().prefix('f').strings()
}

// 删值
let DeleteOfEtcd = async (key) => {
    await client.delete().key(key)
}

// 分布式锁
let LockByEtcd = async (key, func) => {
    const lock1 = client.lock(key);
    await lock1.acquire();
    await func()
    await lock1.release();
}

module.exports = {
    SetOfEtcd, GetOfEtcd, ExistOfEtcd, GetOfEtcdByPrefix, DeleteOfEtcd, LockByEtcd
}