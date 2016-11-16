# nodeScript
>用于添加工作中需要的小脚本，包含node、python和shell脚本
```
npm install runkoa -g //全局先安装运行环境
```


1. 第一个脚本copyFile.js

>基于node，用于动态监测文件变化，然后copy到相应的位置。和前端构件工具一个思路。运行,相应的修改`inputStr`和`outputStr`
```
runkoa copyFile.js 
```



2. 第二个脚本`copyDir.js`

>基于node,检测目录变化，然后copy到相应的位置运行,相应的修改`inputStr`和`outputStr`
```
runkoa copyDir.js 
```
