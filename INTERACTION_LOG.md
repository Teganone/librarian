# Interaction User Prompts Log
以下记录了所有用户传递的交互命令（不包括助手的交互命令）。

---


[250416_163000] User Prompt:
登陆的时候允许admin（现在的邮箱校验导致admin无法登陆）；
登陆成功之后请自动跳转到首页。

---


[250416_163500] User Prompt:
1. 登陆成功之后请自动跳转到首页。
3. 执行完毕之后将前面的prompt记录到INTERACTION_LOG.md中(标注时间戳，yymmdd_hms)（注意是INTERACTION_LOG.md不是INTERATION_LOG.md）。

---


[250416_153000] 接下来请新建一个新的分支，用来展示不同角色用户的仪表盘。我们首先实现学生仪表盘。

UI设计要求：
1. Student Dashboard !学⽣仪盘
   !整体⽬标&
   构建学⽣专属仪盘，实现借阅状态展示、个性化推荐及快捷操作。

2. 组件要求：
   1) StudentDashboard.jsx
      - 复用 Header、Footer
      - 主要区域包含： BorrowList、RecommendationGrid、QuickActions
   2) BorrowList.jsx
      - Props: borrowedBooks: Array<{ id, title, dueDate, isOverdue }>
      - 列表展示当前借阅书籍，每项包含封面、书名、"Due in X days" / "Overdue by X days" 及 Return 按钮
   3) RecommendationGrid.jsx
      - Props: recommendations: Array<{ id, title, coverUrl, rating }>
      - 4列网格展示 8 本推荐书，每项含封面、标题、星级评分、收藏心形图标（点击切换填充态）
   4) QuickActions.jsx
      - 显示四个大按钮： Search Books、Borrow Book、Return Book、Favorite Books
      - Props: onSearch, onBorrow, onReturn, onFavoritess （支持 Hover/Pressed 两个 Variant）

3. 路由与状态管理：
   - 登录成功后跳转至 /dashboard/student
   - 使用 Context 或 Redux 管理 currentUser、borrowedBooks、recommendations
   - Return 按钮调用 api.returnBook(id) 并刷新列表
   - 收藏图标调用 api.toggleFavorite(id)；注意与原有代码的兼容性

