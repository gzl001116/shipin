# 视频播放器项目

这是一个现代化的网页视频播放器项目，包含完整的前端实现和博客文档。

## 项目结构

```
.
├── index.html          # 主页
├── blog.html           # 技术博客
├── demo.html           # 功能演示
├── player-with-ads.html # 带广告播放器
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── script.js       # JavaScript 脚本
└── README.md           # 项目说明文件
```

## 功能特点

### 基础功能
- 视频播放/暂停控制
- 音量调节
- 进度条控制
- 时间显示
- 视频列表切换

### 高级功能
- 播放速度控制
- 全屏播放
- 响应式设计
- 自定义播放控件

### 广告系统
- 广告前置播放
- 倒计时显示
- 跳过广告功能
- 广告与主内容切换

### 技术特点
- 使用原生 HTML5 `<video>` 元素
- 纯 JavaScript 实现，无依赖库
- CSS3 动画和过渡效果
- 移动端适配

## 页面介绍

### [主页 (index.html)](index.html)
主播放界面，包含视频播放器和推荐视频列表。

### [技术博客 (blog.html)](blog.html)
详细介绍视频播放器的技术实现原理和设计思路。

### [功能演示 (demo.html)](demo.html)
展示播放器的各种功能，包括基础控制、高级特性和广告系统。

### [带广告播放器 (player-with-ads.html)](player-with-ads.html)
模拟YouTube风格的播放器，包含前置广告播放功能。

## 技术实现

### HTML5 Video API
项目基于 HTML5 的 `<video>` 元素构建，使用其原生 API 实现播放控制：

```javascript
// 基本控制
video.play();
video.pause();
video.volume = 0.5;

// 事件监听
video.addEventListener('timeupdate', function() {
    // 更新进度条等
});
```

### 自定义控件
通过 JavaScript 和 CSS 实现了完全自定义的播放控件，包括：
- 播放/暂停按钮
- 音量控制滑块
- 进度条
- 时间显示
- 播放速度控制
- 全屏按钮

### 广告系统实现
广告系统模拟了YouTube等视频网站的前置广告功能：

1. 页面加载时首先播放广告视频
2. 显示广告倒计时（通常5秒）
3. 倒计时结束后显示跳过按钮
4. 用户可选择跳过广告或等待广告播放完成
5. 自动切换到主视频内容

```javascript
// 广告播放关键代码
let isAdPlaying = true;
let adTimer = 5;

function switchToMainVideo() {
    isAdPlaying = false;
    video.src = 'main-video.mp4';
    // 切换到主视频
}
```

### 响应式设计
使用 CSS 媒体查询实现响应式布局，适配各种屏幕尺寸：

```css
@media (max-width: 768px) {
    /* 移动端样式调整 */
}
```

## 浏览器兼容性

- Chrome 50+
- Firefox 50+
- Safari 10+
- Edge 15+

## 使用方法

1. 将项目文件下载到本地
2. 用浏览器打开 `index.html` 文件
3. 即可体验视频播放器功能

## 自定义配置

### 添加视频
在 HTML 文件中添加新的 `<source>` 元素：
```html
<video controls>
    <source src="path/to/your/video.mp4" type="video/mp4">
</video>
```

### 配置广告
修改广告视频源和时长：
```html
<video id="videoPlayer">
    <source src="path/to/ad-video.mp4" type="video/mp4">
</video>
```

```javascript
let adDuration = 5; // 修改广告时长（秒）
```

### 修改样式
在 `css/style.css` 文件中修改播放器的外观。

### 扩展功能
在 `js/script.js` 文件中添加新的 JavaScript 功能。

## 许可证

本项目为开源项目，可根据需要自由使用和修改。

## 联系方式

如有任何问题或建议，请通过以下方式联系：
- 邮箱: contact@example.com