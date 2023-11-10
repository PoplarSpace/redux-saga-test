const Controller = require("egg").Controller;

const list = [
  {
    id: 0,
    // 标题
    title: "Spring Boot企业级开发教程",
    // 图片
    img: '/public/images/pic1.jpg',
    // 价格
    price: "¥53.60",
    // 定价
    defaultPrice: "¥56.00 (9.58折)",
    // 电子书价格
    e_price: "",
    // 描述
    des:
      "1.黑马程序员系列图书 2.本书附有配套视频、源代码、习题、教学PPT、教学设计等资源 3.为了帮助初学者更好地学习本书讲解的内容，还提供了在线答疑服务，希望可以帮助更多的读者。"
  },
  {
    id: 1,
    // 标题
    title: "微信小程序开发实战",
    img: '/public/images/pic2.jpg',
    // 价格
    price: "¥44.90",
    // 定价
    defaultPrice: "¥49.80 (9.02折)",
    // 电子书价格
    e_price: "¥30.90",
    // 描述
    des:
      "本书采用案例驱动式编写。微信小程序开发本身并不难，微信官方也提供了大量的文档资料，相比国外的技术和框架学习门槛要低很多。"
  },
  {
    id: 2,
    // 标题
    title: "Python应用编程丛书",
    // 图片
    img: '/public/images/pic3.jpg',
    // 价格
    price: "¥49.40",
    // 定价
    defaultPrice: "¥52.00 (9.5折)",
    // 电子书价格
    e_price: "",
    // 描述
    des: "本书结合案例讲解各知识点，帮助读者掌握Python网络爬虫的核心技术。"
  },
  {
    id: 3,
    // 标题
    title: "Spark大数据分析于实战",
    // 图片
    img: '/public/images/pic4.jpg',
    // 价格
    price: "¥49.00",
    // 定价
    defaultPrice: "¥49.00",
    // 电子书价格
    e_price: "",
    // 描述
    des:
      "Spark大数据分析与实战 传智播客编写，实用性强，案例翔实，配套数字资源丰富。《Spark大数据分析与实战》由传智播客教育科技公司编写，实用性强，案例翔实，配套数字资源丰富。 针对具有Hadoop基础的读者，帮助读者掌握Spark的基础知识和应用"
  },
  {
    id: 4,
    // 标题
    title: "JavaScript前端开发案例教程 网页设计",
    // 图片
    img: '/public/images/pic5.jpg',
    // 价格
    price: "¥47.70",
    // 定价
    defaultPrice: "¥49.80 (9.58折)",
    // 电子书价格
    e_price: "",
    // 描述
    des:
      "1.配套PPT、课后练习题及答案、教学大纲、教案、教学视频等学习资源；2.传统的章节体写法配以实践小案例，条例清楚、简单易学。3.传智播客系列前端开发领域的又一力作。"
  },
  {
    id: 5,
    // 标题
    title: "响应式Web开发项目教程（HTML5+CSS3+Bootstrap）",
    // 图片
    img: '/public/images/pic6.jpg',
    // 价格
    price: "¥40.20",
    // 定价
    defaultPrice: "¥42.00 (9.58折)",
    // 电子书价格
    e_price: "",
    // 描述
    des:
      "本书采用纯项目式教学，通过18个项目，带领读者实际动手操作，打破以往的知识结构，以完成项目为目标，让读者学习后留下的是项目经验而非孤零零的知识点"
  },
  {
    id: 6,
    // 标题
    title: "Python数据分析于应用",
    // 图片
    img: '/public/images/pic7.jpg',
    // 价格
    price: "¥49.40",
    // 定价
    defaultPrice: "¥52.00 (9.5折)",
    // 电子书价格
    e_price: "",
    // 描述
    des:
      "（1）本书采用理论与案例相结合的形式，以 Anaconda 为主要开发工具，系统、全面地介绍了 Python 数据分析的相关知识。（2）zui后一章为综合案例，演示如何在项目中运用所学的知识。"
  }
];

class ListController extends Controller {
  async index() {
    const { ctx } = this;
    const res = {
      data: [...list],
      message: "书籍列表请求成功"
    };
    ctx.body = res;
  }
}

module.exports = ListController;
