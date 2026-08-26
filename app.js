/* ============================================================
   红色电子AI博物馆 - 通用 JS 工具 & 导航组件
   ============================================================ */

(function() {
  // 导航栏滚动效果
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    function onScroll() {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 移动端菜单切换
  function initMobileMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    if (!toggle || !menu) return;
    
    toggle.addEventListener('click', function() {
      if (menu.style.display === 'flex') {
        menu.style.display = '';
      } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.position = 'absolute';
        menu.style.top = 'var(--nav-height)';
        menu.style.left = '0';
        menu.style.right = '0';
        menu.style.background = '#fff';
        menu.style.padding = 'var(--space-4)';
        menu.style.borderBottom = '1px solid var(--border)';
        menu.style.boxShadow = 'var(--shadow-lg)';
      }
    });
  }

  // 页面进入动画
  function initPageAnimations() {
    const animated = document.querySelectorAll('.animate-on-scroll');
    if (!('IntersectionObserver' in window)) {
      animated.forEach(el => el.style.opacity = '1');
      return;
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animated.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // 数字滚动动画
  function animateNumber(el, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.floor(start + (target - start) * eased);
      el.textContent = current.toLocaleString();
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString();
      }
    }
    requestAnimationFrame(update);
  }

  // 通用工具函数
  window.MuseumUtils = {
    initNavbar,
    initMobileMenu,
    initPageAnimations,
    animateNumber,
    
    // 生成导航栏 HTML
    getNavHTML(activePage) {
      const items = [
        { label: '首页', key: 'home', href: 'index.html', icon: 'home' },
        { label: '展厅大厅', key: 'halls', href: 'halls.html', icon: 'building' },
        { label: 'AI互动', key: 'ai', href: 'ai-center.html', icon: 'sparkles' },
        { label: '红色地图', key: 'map', href: 'red-map.html', icon: 'map' },
        { label: '关于我们', key: 'about', href: 'about.html', icon: 'info' }
      ];
      
      return `
        <nav class="navbar">
          <div class="container">
            <a href="index.html" class="nav-logo">
              <div class="logo-mark">红</div>
              <div class="logo-text">
                <span>红色电子AI博物馆</span>
                <span class="sub">RED AI MUSEUM</span>
              </div>
            </a>
            <div class="nav-menu">
              ${items.map(item => `
                <a href="${item.href}" class="${activePage === item.key ? 'active' : ''}" data-nav="${item.key}">
                  ${item.label}
                </a>
              `).join('')}
            </div>
            <div class="nav-cta">
              <a href="ai-center.html" class="btn btn-primary btn-sm">
                <span>AI体验</span>
              </a>
              <button class="nav-toggle" aria-label="菜单">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      `;
    },

    // 生成底部 HTML
    getFooterHTML() {
      return `
        <footer class="footer">
          <div class="container">
            <div class="footer-grid">
              <div class="footer-brand">
                <div class="footer-logo">
                  <div class="mark">红</div>
                  <div class="text">红色电子AI博物馆</div>
                </div>
                <p>以AI技术赋能红色文化传播，打造沉浸式、互动式的线上红色教育新阵地。让历史说话，让文物活起来。</p>
              </div>
              <div>
                <h4>展厅导览</h4>
                <ul>
                  <li><a href="hall-party-history.html">建党历程厅</a></li>
                  <li><a href="hall-relics.html">革命文物厅</a></li>
                  <li><a href="halls.html">英烈人物厅</a></li>
                  <li><a href="halls.html">战役历史厅</a></li>
                </ul>
              </div>
              <div>
                <h4>AI互动</h4>
                <ul>
                  <li><a href="ai-center.html">AI智能问答</a></li>
                  <li><a href="ai-center.html">老照片修复</a></li>
                  <li><a href="ai-center.html">场景还原</a></li>
                  <li><a href="ai-center.html">语音讲解</a></li>
                </ul>
              </div>
              <div>
                <h4>关于我们</h4>
                <ul>
                  <li><a href="about.html">博物馆简介</a></li>
                  <li><a href="about.html">联系方式</a></li>
                  <li><a href="about.html">合作交流</a></li>
                  <li><a href="about.html">意见反馈</a></li>
                </ul>
              </div>
            </div>
            <div class="footer-bottom">
              <span>© 2026 红色电子AI博物馆 · 传承红色基因 赓续精神血脉</span>
              <span>ICP备案号：京ICP备XXXXXXXX号</span>
            </div>
          </div>
        </footer>
      `;
    }
  };

  // 页面加载完成后初始化
  document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initPageAnimations();
  });
})();
