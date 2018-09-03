// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
// const Random = Mock.Random
// mock一组数据
const produceNewsData = {
  'status': '0',
  'result': [
    {
      'productId': '10001',
      'productName': '小米6',
      'prodcutPrice': '2499',
      'prodcutImg': 'mi6.jpg'
    },
    {
      'productId': '10002',
      'productName': '小米笔记本',
      'prodcutPrice': '3999',
      'prodcutImg': 'note.jpg'
    },
    {
      'productId': '10003',
      'productName': '小米6',
      'prodcutPrice': '2499',
      'prodcutImg': 'mi6.jpg'
    },
    {
      'productId': '10004',
      'productName': '小米6',
      'prodcutPrice': '2499',
      'prodcutImg': '1.jpg'
    },
    {
      'productId': '10005',
      'productName': '小米6',
      'prodcutPrice': '2499',
      'prodcutImg': '2.jpg'
    },
    {
      'productId': '10006',
      'productName': '小米6',
      'prodcutPrice': '2499',
      'prodcutImg': '3.jpg'
    },
    {
      'productId': '10007',
      'productName': '小米6',
      'prodcutPrice': '2499',
      'prodcutImg': '4.jpg'
    },
    {
      'productId': '10008',
      'productName': '小米6',
      'prodcutPrice': '2499',
      'prodcutImg': '5.jpg'
    }
  ]
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/goodslist', 'post', produceNewsData)
