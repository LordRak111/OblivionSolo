<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-column">
        <div class="footer-logo">
          <div class="logo-icon">🚀</div>
          <span>SpaceTech</span>
        </div>
        <p class="footer-description">Передовые космические технологии для будущего человечества</p>
        <div class="social-links">
          <a v-for="social in socials" :key="social.name" :href="social.url" class="social-link" target="_blank">
            {{ social.icon }}
          </a>
        </div>
      </div>
      
      <div class="footer-column" v-for="col in columns" :key="col.title">
        <h4>{{ col.title }}</h4>
        <ul>
          <li v-for="item in col.items" :key="item.text">
            <router-link v-if="item.to" :to="item.to">{{ item.text }}</router-link>
            <a v-else :href="item.href" target="_blank">{{ item.text }}</a>
          </li>
        </ul>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} SpaceTech. Все права защищены.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const currentYear = new Date().getFullYear()

const socials = ref([
  { name: 'Facebook', icon: '📘', url: '#' },
  { name: 'Twitter', icon: '🐦', url: '#' },
  { name: 'Instagram', icon: '📷', url: '#' },
  { name: 'LinkedIn', icon: '💼', url: '#' }
])

const columns = ref([
  {
    title: 'Навигация',
    items: [
      { text: 'Главная', to: '/' },
      { text: 'О компании', to: '/about' },
      { text: 'Продукты', to: '/products' },
      { text: 'Проекты', to: '/#projects' }
    ]
  },
  {
    title: 'Продукты',
    items: [
      { text: 'Ракеты-носители', to: '/products' },
      { text: 'Спутники', to: '/products' },
      { text: 'Компоненты', to: '/products' },
      { text: 'Запуск', to: '/products' }
    ]
  },
  {
    title: 'Контакты',
    items: [
      { text: 'support@spacetech.com', href: 'mailto:support@spacetech.com' },
      { text: '+7 (800) 123-45-67', href: 'tel:+78001234567' },
      { text: 'Москва, ул. Космическая, 1', href: '#' }
    ]
  }
])
</script>

<style scoped>
.footer {
  background: rgba(5, 7, 15, 0.95);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(0, 150, 255, 0.2);
  padding: 60px 40px 20px;
  position: relative;
  z-index: 2;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  text-decoration: none;
}

.footer-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(0, 150, 255, 0.1);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 20px;
  transition: all 0.3s;
}

.social-link:hover {
  background: rgba(0, 150, 255, 0.3);
  transform: translateY(-3px);
}

.footer-column h4 {
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
}

.footer-column ul {
  list-style: none;
  padding: 0;
}

.footer-column ul li {
  margin-bottom: 12px;
}

.footer-column ul li a,
.footer-column ul li :deep(.router-link) {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-column ul li a:hover,
.footer-column ul li :deep(.router-link:hover) {
  color: var(--color-accent);
}

.footer-bottom {
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .footer {
    padding: 40px 20px 20px;
  }
  
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .footer-logo {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>