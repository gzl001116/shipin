document.addEventListener('DOMContentLoaded', function() {
    // 获取视频播放器元素
    const videoPlayer = document.getElementById('videoPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeControl = document.getElementById('volumeControl');
    const currentTimeElement = document.getElementById('currentTime');
    const durationElement = document.getElementById('duration');
    const videoItems = document.querySelectorAll('.video-item');
    
    // 格式化时间显示
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    // 更新时间显示
    function updateTimeDisplay() {
        currentTimeElement.textContent = formatTime(videoPlayer.currentTime);
        if (!isNaN(videoPlayer.duration)) {
            durationElement.textContent = formatTime(videoPlayer.duration);
        }
    }
    
    // 播放/暂停按钮功能
    playPauseBtn.addEventListener('click', function() {
        if (videoPlayer.paused) {
            videoPlayer.play();
            playPauseBtn.textContent = '暂停';
        } else {
            videoPlayer.pause();
            playPauseBtn.textContent = '播放';
        }
    });
    
    // 音量控制功能
    volumeControl.addEventListener('input', function() {
        videoPlayer.volume = volumeControl.value;
    });
    
    // 视频时间更新事件
    videoPlayer.addEventListener('timeupdate', updateTimeDisplay);
    
    // 视频加载完成事件
    videoPlayer.addEventListener('loadedmetadata', function() {
        durationElement.textContent = formatTime(videoPlayer.duration);
    });
    
    // 视频播放完成事件
    videoPlayer.addEventListener('ended', function() {
        playPauseBtn.textContent = '播放';
    });
    
    // 视频列表点击事件
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-src');
            videoPlayer.src = videoSrc;
            videoPlayer.load();
            videoPlayer.play();
            playPauseBtn.textContent = '暂停';
        });
    });
    
    // 导航功能
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
            
            // 特殊处理主页显示
            if (targetId === 'home') {
                document.getElementById('home').style.display = 'block';
            }
        });
    });
    
    // 初始化时间显示
    updateTimeDisplay();
});