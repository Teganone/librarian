/*
 * mockData.js
 * 
 * 该文件提供了一套用于图书馆管理系统公共首页展示的模拟数据，包含图书数据、公告信息、轮播图数据、图书馆服务数据及开放时间数据。
 * 数据均采用真实可信的内容，覆盖经典书籍、现代文学、科技、历史等多个领域，便于前端展示和业务测试。
 * 
 * 使用说明：
 *  - 通过 ES6 模块语法导入这些数据，例如：import { books } from './mockData';
 *  - 根据需要扩展或替换数据。
 */

// 1. 图书数据集（30本书）
export const books = [
  {
    id: "book1",
    title: "1984",
    author: "George Orwell",
    cover: "https://via.placeholder.com/300x450?text=1984",
    isbn: "9780451524935",
    publisher: "Secker & Warburg",
    publishDate: "1949-06-08",
    description: "A dystopian social science fiction novel set in a totalitarian society.",
    category: "文学",
    rating: 5,
    available: true,
    location: "三楼A区1架"
  },
  {
    id: "book2",
    title: "Animal Farm",
    author: "George Orwell",
    cover: "https://via.placeholder.com/300x450?text=Animal+Farm",
    isbn: "9780451526342",
    publisher: "Penguin Books",
    publishDate: "1945-08-17",
    description: "A satirical allegorical novella reflecting events leading up to the Russian Revolution.",
    category: "文学",
    rating: 4,
    available: true,
    location: "三楼A区2架"
  },
  {
    id: "book3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://via.placeholder.com/300x450?text=To+Kill+a+Mockingbird",
    isbn: "9780061120084",
    publisher: "J.B. Lippincott & Co.",
    publishDate: "1960-07-11",
    description: "A novel about the serious issues of rape and racial inequality.",
    category: "文学",
    rating: 5,
    available: false,
    location: "三楼B区3架"
  },
  {
    id: "book4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://via.placeholder.com/300x450?text=Pride+and+Prejudice",
    isbn: "9780141040349",
    publisher: "T. Egerton",
    publishDate: "1813-01-28",
    description: "A romantic novel addressing issues of upbringing, morality, education, and marriage.",
    category: "文学",
    rating: 5,
    available: true,
    location: "三楼B区1架"
  },
  {
    id: "book5",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://via.placeholder.com/300x450?text=The+Great+Gatsby",
    isbn: "9780743273565",
    publisher: "Charles Scribner's Sons",
    publishDate: "1925-04-10",
    description: "A novel about the American dream and the roaring twenties.",
    category: "文学",
    rating: 4,
    available: true,
    location: "三楼C区2架"
  },
  {
    id: "book6",
    title: "Moby Dick",
    author: "Herman Melville",
    cover: "https://via.placeholder.com/300x450?text=Moby+Dick",
    isbn: "9781503280786",
    publisher: "Richard Bentley",
    publishDate: "1851-10-18",
    description: "An epic sea story of Captain Ahab's voyage in pursuit of the white whale.",
    category: "文学",
    rating: 3,
    available: false,
    location: "三楼C区3架"
  },
  {
    id: "book7",
    title: "War and Peace",
    author: "Leo Tolstoy",
    cover: "https://via.placeholder.com/300x450?text=War+and+Peace",
    isbn: "9780199232765",
    publisher: "The Russian Messenger",
    publishDate: "1869-01-01",
    description: "A historical novel chronicling the French invasion of Russia and its impact.",
    category: "历史",
    rating: 5,
    available: true,
    location: "三楼D区1架"
  },
  {
    id: "book8",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover: "https://via.placeholder.com/300x450?text=The+Catcher+in+the+Rye",
    isbn: "9780316769488",
    publisher: "Little, Brown and Company",
    publishDate: "1951-07-16",
    description: "A story about teenage rebellion and alienation in post-war America.",
    category: "文学",
    rating: 4,
    available: true,
    location: "三楼A区3架"
  },
  {
    id: "book9",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    cover: "https://via.placeholder.com/300x450?text=The+Lord+of+the+Rings",
    isbn: "9780544003415",
    publisher: "Allen & Unwin",
    publishDate: "1954-07-29",
    description: "An epic high-fantasy novel presented in three volumes.",
    category: "文学",
    rating: 5,
    available: false,
    location: "三楼D区2架"
  },
  {
    id: "book10",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    cover: "https://via.placeholder.com/300x450?text=Harry+Potter+1",
    isbn: "9780590353427",
    publisher: "Bloomsbury",
    publishDate: "1997-06-26",
    description: "The first installment of the Harry Potter series, introducing a magical world.",
    category: "文学",
    rating: 5,
    available: true,
    location: "三楼A区4架"
  },
  {
    id: "book11",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "https://via.placeholder.com/300x450?text=The+Hobbit",
    isbn: "9780547928227",
    publisher: "George Allen & Unwin",
    publishDate: "1937-09-21",
    description: "A prelude to The Lord of the Rings, detailing a grand adventure.",
    category: "文学",
    rating: 5,
    available: true,
    location: "三楼C区1架"
  },
  {
    id: "book12",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    cover: "https://via.placeholder.com/300x450?text=A+Brief+History+of+Time",
    isbn: "9780553380163",
    publisher: "Bantam Books",
    publishDate: "1988-04-01",
    description: "An overview of cosmology covering the Big Bang, black holes, and more.",
    category: "科技",
    rating: 4,
    available: true,
    location: "二楼A区1架"
  },
  {
    id: "book13",
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    cover: "https://via.placeholder.com/300x450?text=The+Selfish+Gene",
    isbn: "9780198788607",
    publisher: "Oxford University Press",
    publishDate: "1976-03-13",
    description: "A revolutionary book presenting a gene-centered view of evolution.",
    category: "科技",
    rating: 5,
    available: false,
    location: "二楼A区2架"
  },
  {
    id: "book14",
    title: "The Elegant Universe",
    author: "Brian Greene",
    cover: "https://via.placeholder.com/300x450?text=The+Elegant+Universe",
    isbn: "9780393338102",
    publisher: "W.W. Norton & Company",
    publishDate: "1999-10-11",
    description: "An introduction to string theory and modern physics.",
    category: "科技",
    rating: 4,
    available: true,
    location: "二楼B区1架"
  },
  {
    id: "book15",
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    cover: "https://via.placeholder.com/300x450?text=Sapiens",
    isbn: "9780062316097",
    publisher: "Harper",
    publishDate: "2011-02-04",
    description: "A compelling overview of human history from ancient times to the modern era.",
    category: "历史",
    rating: 5,
    available: true,
    location: "二楼B区2架"
  },
  {
    id: "book16",
    title: "Guns, Germs, and Steel",
    author: "Jared Diamond",
    cover: "https://via.placeholder.com/300x450?text=Guns+Germs+and+Steel",
    isbn: "9780393317558",
    publisher: "W. W. Norton",
    publishDate: "1997-03-01",
    description: "An exploration of the environmental and geographical factors affecting human societies.",
    category: "历史",
    rating: 4,
    available: true,
    location: "二楼C区1架"
  },
  {
    id: "book17",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    cover: "https://via.placeholder.com/300x450?text=Thinking+Fast+and+Slow",
    isbn: "9780374533557",
    publisher: "Farrar, Straus and Giroux",
    publishDate: "2011-10-25",
    description: "A deep dive into the dual processes that drive human decision making.",
    category: "科技",
    rating: 5,
    available: false,
    location: "二楼C区2架"
  },
  {
    id: "book18",
    title: "The Art of War",
    author: "Sun Tzu",
    cover: "https://via.placeholder.com/300x450?text=The+Art+of+War",
    isbn: "9781599869773",
    publisher: "Oxford University Press",
    publishDate: "5th century BC",
    description: "An ancient Chinese military treatise on strategy and tactics.",
    category: "历史",
    rating: 4,
    available: true,
    location: "二楼D区1架"
  },
  {
    id: "book19",
    title: "红楼梦",
    author: "曹雪芹",
    cover: "https://via.placeholder.com/300x450?text=红楼梦",
    isbn: "9787020002207",
    publisher: "人民文学出版社",
    publishDate: "1791-01-01",
    description: "中国古典四大名著之一，描绘贾、史、王、薛四大家族的兴衰。",
    category: "文学",
    rating: 5,
    available: true,
    location: "一楼A区1架"
  },
  {
    id: "book20",
    title: "三国演义",
    author: "罗贯中",
    cover: "https://via.placeholder.com/300x450?text=三国演义",
    isbn: "9787101009122",
    publisher: "中国青年出版社",
    publishDate: "1522-01-01",
    description: "史诗般的历史小说，生动描绘了三国时期的英雄风采。",
    category: "文学",
    rating: 5,
    available: true,
    location: "一楼A区2架"
  },
  {
    id: "book21",
    title: "水浒传",
    author: "施耐庵",
    cover: "https://via.placeholder.com/300x450?text=水浒传",
    isbn: "9787229100600",
    publisher: "人民文学出版社",
    publishDate: "明代",
    description: "描写108位梁山好汉起义反抗腐败官府的故事。",
    category: "文学",
    rating: 4,
    available: false,
    location: "一楼B区1架"
  },
  {
    id: "book22",
    title: "西游记",
    author: "吴承恩",
    cover: "https://via.placeholder.com/300x450?text=西游记",
    isbn: "9787544242518",
    publisher: "中国青年出版社",
    publishDate: "明代",
    description: "讲述唐僧师徒西天取经的传奇旅程。",
    category: "文学",
    rating: 5,
    available: true,
    location: "一楼B区2架"
  },
  {
    id: "book23",
    title: "活着",
    author: "余华",
    cover: "https://via.placeholder.com/300x450?text=活着",
    isbn: "9787506365437",
    publisher: "作家出版社",
    publishDate: "1993-01-01",
    description: "反映中国农村变迁和人性苦难的现实主义小说。",
    category: "文学",
    rating: 4,
    available: true,
    location: "一楼C区1架"
  },
  {
    id: "book24",
    title: "平凡的世界",
    author: "路遥",
    cover: "https://via.placeholder.com/300x450?text=平凡的世界",
    isbn: "9787229101611",
    publisher: "湖南文艺出版社",
    publishDate: "1986-01-01",
    description: "描绘改革开放初期普通人家生活的史诗小说。",
    category: "文学",
    rating: 5,
    available: false,
    location: "一楼C区2架"
  },
  {
    id: "book25",
    title: "围城",
    author: "钱钟书",
    cover: "https://via.placeholder.com/300x450?text=围城",
    isbn: "9787536692930",
    publisher: "上海译文出版社",
    publishDate: "1947-01-01",
    description: "讽刺中国知识分子生活和婚姻的讽刺小说。",
    category: "文学",
    rating: 4,
    available: true,
    location: "一楼D区1架"
  },
  {
    id: "book26",
    title: "柯布西耶建筑文集",
    author: "柯布西耶",
    cover: "https://via.placeholder.com/300x450?text=柯布西耶建筑文集",
    isbn: "9787505719331",
    publisher: "商务印书馆",
    publishDate: "1950-01-01",
    description: "汇集柯布西耶的建筑理论与实践经验。",
    category: "艺术",
    rating: 3,
    available: true,
    location: "二楼D区1架"
  },
  {
    id: "book27",
    title: "设计中的设计",
    author: "原研哉",
    cover: "https://via.placeholder.com/300x450?text=设计中的设计",
    isbn: "9787111647778",
    publisher: "人民邮电出版社",
    publishDate: "2010-01-01",
    description: "探讨设计理念与创新思维的经典著作。",
    category: "艺术",
    rating: 4,
    available: false,
    location: "二楼D区2架"
  },
  {
    id: "book28",
    title: "追风筝的人",
    author: "卡勒德·胡赛尼",
    cover: "https://via.placeholder.com/300x450?text=追风筝的人",
    isbn: "9787543321724",
    publisher: "北京联合出版公司",
    publishDate: "2003-05-01",
    description: "描述跨文化友谊与救赎的感人故事。",
    category: "文学",
    rating: 5,
    available: true,
    location: "二楼C区3架"
  },
  {
    id: "book29",
    title: "变形记",
    author: "弗朗茨·卡夫卡",
    cover: "https://via.placeholder.com/300x450?text=变形记",
    isbn: "9787540422257",
    publisher: "译林出版社",
    publishDate: "1915-01-01",
    description: "一部充满荒诞寓意的中篇小说，探讨存在与身份的主题。",
    category: "文学",
    rating: 4,
    available: false,
    location: "二楼B区3架"
  },
  {
    id: "book30",
    title: "百年孤独",
    author: "加西亚·马尔克斯",
    cover: "https://via.placeholder.com/300x450?text=百年孤独",
    isbn: "9787544251339",
    publisher: "南海出版公司",
    publishDate: "1967-06-05",
    description: "魔幻现实主义的经典之作，讲述一个家族的兴衰史。",
    category: "文学",
    rating: 5,
    available: true,
    location: "二楼A区3架"
  }
];

// 2. 公告数据集（10条公告）
export const announcements = [
  {
    id: "ann1",
    title: "图书借阅新规",
    content: "自2025年5月起，图书馆将调整借阅规则，请各位读者及时关注最新规定及相关说明。",
    date: "2025-04-10",
    importance: "重要",
    author: "图书馆管理部门"
  },
  {
    id: "ann2",
    title: "假期开放时间通知",
    content: "劳动节期间开放时间将有所调整，详情请咨询图书馆前台。",
    date: "2025-04-12",
    importance: "普通",
    author: "图书馆公告"
  },
  {
    id: "ann3",
    title: "新书上架通知",
    content: "本周新上架多本热门书籍，欢迎前来借阅与品阅。",
    date: "2025-04-13",
    importance: "普通",
    author: "图书馆管理部门"
  },
  {
    id: "ann4",
    title: "读书会报名通知",
    content: "即将举办的读书交流会现正接受报名，期待您的参与。",
    date: "2025-04-14",
    importance: "普通",
    author: "图书馆社区"
  },
  {
    id: "ann5",
    title: "系统维护通知",
    content: "为提升服务质量，本周末图书馆系统将进行例行维护，期间部分功能将受影响。",
    date: "2025-04-15",
    importance: "重要",
    author: "技术支持部"
  },
  {
    id: "ann6",
    title: "图书归还提醒",
    content: "温馨提醒：请各位读者及时归还借阅图书，以便其他用户借阅。",
    date: "2025-04-16",
    importance: "普通",
    author: "图书馆管理部门"
  },
  {
    id: "ann7",
    title: "馆内环境改善公告",
    content: "为提升阅览体验，图书馆近期将进行环境整治，敬请见谅。",
    date: "2025-04-17",
    importance: "普通",
    author: "后勤部门"
  },
  {
    id: "ann8",
    title: "讲座活动通知",
    content: "下周举办专题讲座，邀请知名学者分享最新研究成果，详情请关注官网公告。",
    date: "2025-04-18",
    importance: "重要",
    author: "图书馆活动组"
  },
  {
    id: "ann9",
    title: "暑期借阅优惠",
    content: "暑期期间，部分畅销书籍借阅将享有优惠政策，欢迎咨询！",
    date: "2025-04-19",
    importance: "普通",
    author: "图书馆管理部门"
  },
  {
    id: "ann10",
    title: "紧急停水通知",
    content: "因突发故障，图书馆部分区域将暂时停水，请相关人员注意安全。",
    date: "2025-04-20",
    importance: "紧急",
    author: "设施管理部"
  }
];

// 3. 轮播图数据（5张）
export const carousel = [
  {
    id: "c1",
    title: "新书推荐",
    description: "精选近期上架的新书，尽在图书馆！",
    imageUrl: "https://via.placeholder.com/1200x675?text=新书推荐",
    link: "/books/new"
  },
  {
    id: "c2",
    title: "读书会活动",
    description: "加入我们的读书会，分享阅读心得！",
    imageUrl: "https://via.placeholder.com/1200x675?text=读书会活动",
    link: "/events/bookclub"
  },
  {
    id: "c3",
    title: "专题讲座",
    description: "了解最新学术动态的专题讲座正在进行中。",
    imageUrl: "https://via.placeholder.com/1200x675?text=专题讲座",
    link: "/events/lecture"
  },
  {
    id: "c4",
    title: "假期公告",
    description: "节假日期间开放时间及服务调整公告，请留意最新通知。",
    imageUrl: "https://via.placeholder.com/1200x675?text=假期公告",
    link: "/announcements"
  },
  {
    id: "c5",
    title: "图书馆联系方式",
    description: "查找图书馆的联系方式和常见问题解答。",
    imageUrl: "https://via.placeholder.com/1200x675?text=图书馆联系方式",
    link: "/contact"
  }
];

// 4. 图书馆服务数据（9项）
export const services = [
  {
    id: "service1",
    name: "图书借阅",
    description: "便捷高效的图书借阅服务，满足广大读者需求。",
    icon: "book",
    available: true
  },
  {
    id: "service2",
    name: "电子资源",
    description: "提供丰富的电子书、期刊和在线数据库，方便数字阅读。",
    icon: "laptop",
    available: true
  },
  {
    id: "service3",
    name: "讲座活动",
    description: "定期举办各类学术讲座，拓展视野与知识。",
    icon: "calendar",
    available: true
  },
  {
    id: "service4",
    name: "自助打印",
    description: "提供自助打印服务，快速高效完成文件打印。",
    icon: "printer",
    available: true
  },
  {
    id: "service5",
    name: "在线咨询",
    description: "实时在线解答读者疑问，提供专业咨询服务。",
    icon: "message",
    available: true
  },
  {
    id: "service6",
    name: "文献检索",
    description: "快速检索学术文献和资料，助力研究与学习。",
    icon: "search",
    available: true
  },
  {
    id: "service7",
    name: "研讨室预约",
    description: "在线预约研讨室，提供安静的讨论和学习环境。",
    icon: "team",
    available: false
  },
  {
    id: "service8",
    name: "读者服务",
    description: "提供个性化的读者支持与服务，解答各种咨询。",
    icon: "customer-service",
    available: true
  },
  {
    id: "service9",
    name: "自助借还",
    description: "利用自助设备轻松办理借还书业务，提升服务效率。",
    icon: "robot",
    available: true
  }
];

// 5. 开放时间数据
export const openingHours = {
  regularHours: [
    { area: "总馆", time: "08:00 - 20:00" },
    { area: "分馆A", time: "09:00 - 18:00" },
    { area: "分馆B", time: "10:00 - 17:00" },
    { area: "研讨室", time: "08:30 - 22:00" }
  ],
  holidayHours: [
    { holiday: "国庆节", time: "09:00 - 18:00" },
    { holiday: "春节", time: "10:00 - 16:00" }
  ]
};
