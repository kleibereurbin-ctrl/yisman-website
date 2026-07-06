/* ============================================
   YISMAN Intimates - 依诗曼服装
   JavaScript
   ============================================ */

// ---- Language Data ----
const langData = {
  zh: {
    // Nav
    nav_home: '首页',
    nav_products: '产品中心',
    nav_factory: '工厂实力',
    nav_contact: '联系我们',
    nav_inquiry: '获取报价',

    // Hero
    badge: '🏭 工厂直供 · 品质保证',
    hero_title: '专注女士内衣<span em>制造</span>，<br>匠心每<em>一件</em>',
    hero_desc: '依诗曼服装 — 位于辽宁大连，拥有百人规模的现代化内衣工厂。15年行业经验，服务全球品牌客户，提供OEM/ODM一站式解决方案。',
    hero_btn1: '了解产品',
    hero_btn2: '工厂参观',

    // Stats
    stat1: '15+', stat1_label: '年行业经验',
    stat2: '200+', stat2_label: '员工人数',
    stat3: '500万+', stat3_label: '年产量(件)',
    stat4: '30+', stat4_label: '出口国家',

    // About
    about_title: '关于依诗曼',
    about_sub: '一家坐落于大连金州的现代化内衣制造企业',
    about_p1: '大连依诗曼服装有限公司成立于2010年，坐落于辽宁省大连市金州区。公司专注于女士内衣、文胸、内裤、塑身衣等产品的研发、生产和销售。',
    about_p2: '我们拥有先进的生产设备和完善的质量管理体系，月产能超过40万件。产品远销欧美、东南亚、中东等30多个国家和地区，与多家国际知名品牌建立了长期稳定的合作关系。',
    about_feat1: '15年行业经验',
    about_feat2: '百人专业团队',
    about_feat3: 'OEM/ODM定制',
    about_feat4: '严格质检体系',
    about_feat5: '快速打样7天',
    about_feat6: 'FOB大连出货',

    // Products
    pro_title: '产品中心',
    pro_sub: '品类齐全，满足不同市场需求',
    pro1_name: '无钢圈文胸',
    pro1_desc: '舒适无压迫，适合日常穿着。多色可选，支持定制logo和包装。',
    pro2_name: '蕾丝文胸',
    pro2_desc: '精致蕾丝面料，性感优雅。欧美版型设计，深受海外客户青睐。',
    pro3_name: '运动文胸',
    pro3_desc: '高弹透气面料，适中的支撑力。瑜伽、跑步、健身均适用。',
    pro4_name: '女士内裤',
    pro4_desc: '纯棉/莫代尔/蕾丝多种材质。平角、三角、丁字裤全品类。',
    pro5_name: '塑身衣',
    pro5_desc: '收腹提臀，强力塑形。进口面料，透气不闷热。',
    pro6_name: '睡衣/家居服',
    pro6_desc: '舒适柔软的家居系列。纯棉/丝质面料，简约时尚设计。',

    // Factory
    fac_title: '工厂实力',
    fac_sub: '先进设备 · 品质管控 · 产能保障',
    fac1_title: '现代化车间',
    fac1_desc: '3000㎡标准厂房，配备先进缝纫设备，车间恒温恒湿，确保生产环境稳定。',
    fac2_title: '专业质检体系',
    fac2_desc: '从面料入库到成品出库，每道工序严格把关。AQL2.5国际验货标准执行。',
    fac3_title: '快速打样',
    fac3_desc: '专业版房团队，收到设计稿后7-10天完成打样。支持来图来样定制。',
    fac4_title: '自有设计团队',
    fac4_desc: '经验丰富的设计师团队，每季推出新品。可根据客户需求进行定向研发。',
    fac5_title: '大货产能',
    fac5_desc: '月产能40万+件，能满足大订单需求。旺季产能可弹性调整至60万件/月。',
    fac6_title: '绿色环保',
    fac6_desc: '通过OEKO-TEX®认证，使用环保面料及染料。坚持可持续发展理念。',

    // Certs
    cert1: 'OEKO-TEX® 认证',
    cert2: 'BSCI 验厂报告',
    cert3: 'ISO 9001 质量体系',

    // Contact
    con_title: '联系我们',
    con_sub: '期待与您携手合作，共创美好未来',
    con_info_title: '联系方式',
    con_addr: '辽宁省大连市金州区[具体地址]',
    con_phone: '+86 180-4116-7816',
    con_email: '185436114@qq.com',
    con_whatsapp: 'WhatsApp / WeChat: +86 180-4116-7816',
    con_form_title: '发送询盘',
    con_form_name: '您的姓名',
    con_form_email: '邮箱地址',
    con_form_phone: '联系电话',
    con_form_country: '所在国家',
    con_form_msg: '询盘内容（产品要求/数量/等）',
    con_form_submit: '发送询盘',

    // Footer
    f_brand_desc: '专业女士内衣制造商，15年行业经验，为全球品牌提供OEM/ODM一站式服务。',
    f_quick: '快速链接',
    f_prod: '产品中心',
    f_about: '关于我们',
    f_factory: '工厂实力',
    f_contact: '联系我们',
    f_products_title: '产品系列',
    f_pro1: '无钢圈文胸',
    f_pro2: '蕾丝系列',
    f_pro3: '运动文胸',
    f_pro4: '女士内裤',
    f_contact_title: '联系方式',
    f_copy: '© 2026 大连依诗曼服装有限公司 版权所有',

    // Products page
    prod_header_title: '产品中心',
    prod_header_desc: '品类齐全，品质卓越，满足全球客户的多样化需求',
    prod_cta_text: '对产品感兴趣？立即联系我们获取详细目录和报价！',
    prod_cta_btn: '联系我们',

    // Factory page
    fac_header_title: '工厂实力',
    fac_header_desc: '先进生产设备，严谨品质管控，强大的产能保障',
    fac_video_title: '工厂实景',
    fac_video_desc: '欢迎莅临参观，眼见为实',

    // Contact page additional
    con_header_title: '联系我们',
    con_header_desc: '我们期待与您建立长期稳定的合作关系',
    con_working: '工作时间',
    con_working_time: '周一至周六 8:00 - 18:00（北京时间）',
  },

  en: {
    nav_home: 'Home',
    nav_products: 'Products',
    nav_factory: 'Factory',
    nav_contact: 'Contact',
    nav_inquiry: 'Get a Quote',

    badge: '🏭 Factory Direct · Quality Guaranteed',
    hero_title: 'Premium Women\'s <em>Intimates</em><br>Manufacturer in <em>China</em>',
    hero_desc: 'YISMAN Garments — Located in Dalian, Liaoning. A 100+ staff modern lingerie factory with 15 years of experience, serving global brands with OEM/ODM solutions.',
    hero_btn1: 'Our Products',
    hero_btn2: 'Factory Tour',

    stat1: '15+', stat1_label: 'Years Experience',
    stat2: '200+', stat2_label: 'Skilled Workers',
    stat3: '5M+', stat3_label: 'Annual Output',
    stat4: '30+', stat4_label: 'Export Countries',

    about_title: 'About YISMAN',
    about_sub: 'A modern lingerie manufacturer based in Jinzhou, Dalian',
    about_p1: 'YISMAN Garments Co., Ltd., established in 2010, is located in Jinzhou District, Dalian, Liaoning. We specialize in R&D, production and sales of women\'s underwear, bras, panties, shapewear and more.',
    about_p2: 'With advanced equipment and strict quality control, our monthly capacity exceeds 400,000 pieces. Our products are exported to Europe, Americas, Southeast Asia, Middle East and more, serving internationally renowned brands.',
    about_feat1: '15 Years Experience',
    about_feat2: '100+ Staff Team',
    about_feat3: 'OEM/ODM Service',
    about_feat4: 'Strict QC System',
    about_feat5: '7-Day Sampling',
    about_feat6: 'FOB Dalian Shipment',

    pro_title: 'Products',
    pro_sub: 'Complete product range to meet diverse market demands',
    pro1_name: 'Wirefree Bras',
    pro1_desc: 'Comfortable, pressure-free. Ideal for daily wear. Multiple colors, customizable logo & packaging.',
    pro2_name: 'Lace Bras',
    pro2_desc: 'Exquisite lace fabric, elegant & sexy. European/American sizing. Highly popular with overseas buyers.',
    pro3_name: 'Sports Bras',
    pro3_desc: 'High-stretch breathable fabric, medium support. Suitable for yoga, running & fitness.',
    pro4_name: 'Women\'s Panties',
    pro4_desc: 'Cotton/Modal/Lace options. Hipster, bikini, thong — full range available.',
    pro5_name: 'Shapewear',
    pro5_desc: 'Tummy control, butt lift. Imported fabric, breathable and comfortable.',
    pro6_name: 'Pajamas & Loungewear',
    pro6_desc: 'Soft and comfortable home collection. Cotton/silk fabrics, minimalist stylish design.',

    fac_title: 'Factory Strength',
    fac_sub: 'Advanced Equipment · Quality Control · Capacity Assurance',
    fac1_title: 'Modern Workshop',
    fac1_desc: '3,000㎡ standard workshop with advanced sewing equipment. Temperature & humidity controlled.',
    fac2_title: 'Quality Control',
    fac2_desc: 'Strict inspection at every step from fabric intake to finished goods. AQL 2.5 standard.',
    fac3_title: 'Fast Sampling',
    fac3_desc: 'Professional pattern room. 7-10 days for samples. Custom designs welcome.',
    fac4_title: 'Design Team',
    fac4_desc: 'Experienced in-house designers releasing new collections every season. Custom R&D available.',
    fac5_title: 'Mass Production',
    fac5_desc: '400K+ pieces monthly capacity. Flexible expansion to 600K pieces/month during peak season.',
    fac6_title: 'Eco-Friendly',
    fac6_desc: 'OEKO-TEX® certified. Sustainable materials and dyes. Committed to green manufacturing.',

    cert1: 'OEKO-TEX® Certified',
    cert2: 'BSCI Audited',
    cert3: 'ISO 9001 Certified',

    con_title: 'Contact Us',
    con_sub: 'We look forward to partnering with you',
    con_info_title: 'Contact Information',
    con_addr: 'Jinzhou District, Dalian, Liaoning, China',
    con_phone: '+86 180-4116-7816',
    con_email: '185436114@qq.com',
    con_whatsapp: 'WhatsApp / WeChat: +86 180-4116-7816',
    con_form_title: 'Send Inquiry',
    con_form_name: 'Your Name',
    con_form_email: 'Email Address',
    con_form_phone: 'Phone Number',
    con_form_country: 'Country',
    con_form_msg: 'Inquiry Details (product requirements, quantity, etc.)',
    con_form_submit: 'Send Inquiry',

    f_brand_desc: 'Professional women\'s intimates manufacturer with 15 years of experience. OEM/ODM one-stop service for global brands.',
    f_quick: 'Quick Links',
    f_prod: 'Products',
    f_about: 'About Us',
    f_factory: 'Factory',
    f_contact: 'Contact Us',
    f_products_title: 'Products',
    f_pro1: 'Wirefree Bras',
    f_pro2: 'Lace Collection',
    f_pro3: 'Sports Bras',
    f_pro4: 'Panties',
    f_contact_title: 'Contact',
    f_copy: '© 2026 Dalian YISMAN Garments Co., Ltd. All Rights Reserved',

    prod_header_title: 'Our Products',
    prod_header_desc: 'Complete product range with premium quality to meet global customer demands',
    prod_cta_text: 'Interested in our products? Contact us for catalog and quotation!',
    prod_cta_btn: 'Contact Us',

    fac_header_title: 'Factory Strength',
    fac_header_desc: 'Advanced equipment, rigorous quality control, strong production capacity',
    fac_video_title: 'Factory Tour',
    fac_video_desc: 'Visit us to see our facility in person',

    con_header_title: 'Contact Us',
    con_header_desc: 'We look forward to building a long-term partnership with you',
    con_working: 'Working Hours',
    con_working_time: 'Mon-Sat 8:00-18:00 (Beijing Time)',
  }
};

// ---- Apply Language ----
function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('yisman-lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (langData[lang] && langData[lang][key]) {
      el.innerHTML = langData[lang][key];
    }
  });
}

// ---- Toggle Language ----
document.addEventListener('DOMContentLoaded', () => {
  // Load saved language or detect browser
  const saved = localStorage.getItem('yisman-lang');
  const detect = navigator.language || navigator.userLanguage;
  const defaultLang = saved || (detect && detect.startsWith('zh') ? 'zh' : 'en');
  applyLang(defaultLang);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Close menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // Back to top
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 400);
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Stats counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statNumbers.forEach(el => {
            const text = el.textContent;
            if (text.includes('+')) {
              const target = parseInt(text.replace(/[^0-9]/g, ''));
              let current = 0;
              const step = Math.ceil(target / 60);
              const interval = setInterval(() => {
                current += step;
                if (current >= target) {
                  current = target;
                  clearInterval(interval);
                }
                el.textContent = current + '+';
              }, 25);
            }
          });
          observer.disconnect();
        }
      });
    });
    statNumbers.forEach(el => observer.observe(el.parentElement));
  }
});
