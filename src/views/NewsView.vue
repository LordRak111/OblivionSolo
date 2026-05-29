<template>
  <div class="news-page">
    <div class="container">
      <h1 class="gradient-text">Новости</h1>
      <p class="subtitle">Последние события SpaceTech</p>
      
      <div class="news-grid">
        <div v-for="item in news" :key="item.id" class="news-card">
          <div class="news-icon">{{ item.icon }}</div>
          <div class="news-content">
            <span class="news-date">{{ item.date }}</span>
            <h3>{{ item.title }}</h3>
            <p>{{ item.excerpt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const news = ref([
  {
    id: 1,
    title: 'Успешный запуск "Орбита-X"',
    excerpt: 'Ракета вывела на орбиту 12 спутников',
    date: '15 мая 2026',
    icon: '🚀'
  },
  {
    id: 2,
    title: 'Новый рекорд подготовки',
    excerpt: 'Подготовка заняла всего 36 часов',
    date: '10 мая 2026',
    icon: '⚡'
  },
  {
    id: 3,
    title: 'Партнёрство с ESA',
    excerpt: 'Контракт на 5 запусков до 2028 года',
    date: '5 мая 2026',
    icon: '🤝'
  },
  {
    id: 4,
    title: 'Открытие нового цеха',
    excerpt: 'Запуск производства двигателей',
    date: '1 мая 2026',
    icon: '🏭'
  }
])
</script>

<style scoped>
.news-page {
  min-height: 100vh;
  padding: 100px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

h1 {
  font-size: 48px;
  text-align: center;
  margin-bottom: 10px;
}

.gradient-text {
  background: linear-gradient(135deg, #00d4ff, #ff6b35);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  text-align: center;
  color: #a0b0d0;
  font-size: 18px;
  margin-bottom: 60px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.news-card {
  background: rgba(20, 30, 55, 0.6);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.news-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.news-date {
  display: block;
  color: #607090;
  font-size: 13px;
  margin-bottom: 10px;
}

.news-card h3 {
  color: white;
  font-size: 20px;
  margin-bottom: 10px;
}

.news-card p {
  color: #a0b0d0;
  font-size: 14px;
  line-height: 1.5;
}
</style>