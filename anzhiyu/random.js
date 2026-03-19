var posts=["2024/03/19/公众号订阅列表/","2024/03/19/我安装的Obsidian插件/","2024/03/19/智能体与语言模型基础/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };