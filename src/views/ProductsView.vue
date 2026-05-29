<template>
  <div class="products-page">
    <!-- Анимированные частицы -->
    <div class="particles">
      <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>

    <!-- ========== ОСНОВНОЙ КОНТЕНТ ========== -->
    <main class="main-content">
      <!-- Hero секция -->
      <div class="hero-section">
        <div class="hero-content">
          <div class="floating-badge">
            <span class="badge-icon">🚀</span>
            <span>КОСМИЧЕСКИЕ ТЕХНОЛОГИИ 2026</span>
          </div>
          <h1 class="hero-title">
            <span class="gradient-text">Продукты</span>
            <span class="gradient-text-2">и услуги</span>
          </h1>
          <p class="hero-description">
            Передовые технологии для надёжного выхода в космос
          </p>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">15+</div>
              <div class="stat-label">Успешных запусков</div>
            </div>
            <div class="stat">
              <div class="stat-number">8</div>
              <div class="stat-label">Спутников на орбите</div>
            </div>
            <div class="stat">
              <div class="stat-number">24/7</div>
              <div class="stat-label">Техподдержка</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция с ракетами -->
      <div class="rockets-section container">
        <h2 class="section-title">
          <span class="title-icon">🛸</span>
          Ракеты и компоненты
        </h2>
        
        <div class="rockets-grid">
          <div 
            v-for="(rocket, index) in rockets" 
            :key="rocket.id" 
            class="rocket-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="card-glow"></div>
            <div class="card-icon">
              <i :class="rocket.icon"></i>
            </div>
            <h3 class="rocket-name">{{ rocket.name }}</h3>
            
            <div class="specs-container">
              <div class="spec-item-3d">
                <div class="spec-icon">📏</div>
                <div class="spec-info">
                  <span class="spec-label">Высота</span>
                  <span class="spec-value">{{ rocket.height }}</span>
                </div>
              </div>
              <div class="spec-item-3d">
                <div class="spec-icon">⚖️</div>
                <div class="spec-info">
                  <span class="spec-label">Грузоподъёмность</span>
                  <span class="spec-value">{{ rocket.payload }}</span>
                </div>
              </div>
              <div class="spec-item-3d">
                <div class="spec-icon">🔥</div>
                <div class="spec-info">
                  <span class="spec-label">Тяга</span>
                  <span class="spec-value">{{ rocket.thrust }}</span>
                </div>
              </div>
            </div>
            
            <p class="rocket-description">{{ rocket.description }}</p>
            
            <div class="tech-tags">
              <span v-for="tag in rocket.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            
            <button class="btn-primary" @click="showDetails(rocket)">
              Подробнее
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Технологии -->
      <div class="tech-showcase container">
        <h2 class="section-title">
          <span class="title-icon">⚡</span>
          Инновационные технологии
        </h2>
        
        <div class="tech-grid">
          <div class="tech-card" v-for="tech in technologies" :key="tech.name">
            <div class="tech-icon">{{ tech.icon }}</div>
            <h3>{{ tech.name }}</h3>
            <p>{{ tech.description }}</p>
            <div class="tech-progress">
              <div class="progress-bar" :style="{ width: tech.progress + '%' }"></div>
            </div>
            <span class="tech-percent">{{ tech.progress }}% готовности</span>
          </div>
        </div>
      </div>

      <!-- Преимущества -->
      <div class="advantages-section container">
        <h2 class="section-title light">Почему выбирают нас?</h2>
        
        <div class="advantages-grid">
          <div class="advantage-item" v-for="adv in advantages" :key="adv.title">
            <div class="advantage-icon">{{ adv.icon }}</div>
            <h3>{{ adv.title }}</h3>
            <p>{{ adv.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Секция -->
      <div class="cta-section">
        <div class="cta-content">
          <h2>Готовы начать космическое путешествие?</h2>
          <p>Свяжитесь с нами для консультации и расчёта стоимости запуска</p>
          <div class="cta-buttons">
            <button class="btn-primary-large">Связаться с нами</button>
            <button class="btn-outline-large">Скачать брошюру</button>
          </div>
        </div>
      </div>
    </main>

    <!-- Модальное окно -->
    <div v-if="selectedRocket" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ selectedRocket.name }}</h2>
          <button class="modal-close" @click="closeModal">×</button>
        </div>
        <div class="modal-body">
          <div class="modal-specs">
            <div class="modal-spec">
              <strong>Высота:</strong> {{ selectedRocket.height }}
            </div>
            <div class="modal-spec">
              <strong>Грузоподъёмность:</strong> {{ selectedRocket.payload }}
            </div>
            <div class="modal-spec">
              <strong>Тяга:</strong> {{ selectedRocket.thrust }}
            </div>
          </div>
          <p class="modal-description">{{ selectedRocket.fullDescription }}</p>
          <button class="btn-primary">Запросить коммерческое предложение</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const rockets = ref([
  {
    id: 1,
    name: 'Ракета-носитель "Орбита-X"',
    icon: 'fas fa-space-shuttle',
    height: '45 м',
    payload: '8 т',
    thrust: '1200 кН',
    description: 'Многоразовые ступени и инновационная система навигации для вывода тяжёлых грузов на низкую околоземную орбиту.',
    fullDescription: 'Ракета-носитель "Орбита-X" представляет собой новейшую разработку в области многоразовых космических систем. Оснащена инновационными двигателями и системой автоматической посадки первой ступени.',
    tags: ['Многоразовая', 'Экологичная', 'Автономная']
  },
  {
    id: 2,
    name: 'Лёгкий носитель "Старт-1"',
    icon: 'fas fa-satellite',
    height: '28 м',
    payload: '2,5 т',
    thrust: '450 кН',
    description: 'Оптимальное решение для запуска малых спутников и научной аппаратуры. Быстрая подготовка и экономичность.',
    fullDescription: 'Старт-1 создан для динамичного рынка малых спутников. Время подготовки к запуску - всего 24 часа. Идеален для научных и коммерческих миссий.',
    tags: ['Быстрый запуск', 'Экономичный', 'Надёжный']
  },
  {
    id: 3,
    name: 'Тяжёлая ракета "Титан-3"',
    icon: 'fas fa-meteor',
    height: '62 м',
    payload: '18 т',
    thrust: '2400 кН',
    description: 'Сверхтяжёлая ракета для межпланетных миссий и освоения дальнего космоса.',
    fullDescription: 'Титан-3 - наша флагманская разработка для лунных и марсианских экспедиций. Способна доставлять тяжёлые модули для создания космических баз.',
    tags: ['Межпланетный', 'Сверхтяжёлый', 'Инновационный']
  }
])

const technologies = ref([
  { name: 'Искусственный интеллект', icon: '🧠', description: 'Автономное управление полётом', progress: 95 },
  { name: '3D печать компонентов', icon: '🖨️', description: 'Ускорение производства на 70%', progress: 88 },
  { name: 'Квантовая связь', icon: '🔒', description: 'Защищённый канал передачи данных', progress: 76 },
  { name: 'Экологичное топливо', icon: '🌿', description: 'Снижение выбросов CO2', progress: 92 }
])

const advantages = ref([
  { icon: '🎯', title: 'Точность до метра', description: 'Уникальная система навигации обеспечивает точность вывода грузов' },
  { icon: '⚡', title: 'Быстрая подготовка', description: 'Готовность к запуску за 48 часов после прибытия на космодром' },
  { icon: '💰', title: 'Доступные цены', description: 'На 30% дешевле конкурентов благодаря многоразовым технологиям' },
  { icon: '🛡️', title: 'Гарантия 10 лет', description: 'Полное техническое сопровождение на весь срок эксплуатации' }
])

const selectedRocket = ref(null)

const getParticleStyle = (i) => {
  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    animationDuration: 5 + Math.random() * 10 + 's',
    animationDelay: Math.random() * 5 + 's'
  }
}

const showDetails = (rocket) => {
  selectedRocket.value = rocket
}

const closeModal = () => {
  selectedRocket.value = null
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.products-page {
  min-height: 100vh;
  background: #0a0e27;
  position: relative;
  overflow-x: hidden;
}

/* Частицы */
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: rgba(100, 200, 255, 0.6);
  border-radius: 50%;
  animation: floatParticle linear infinite;
}

@keyframes floatParticle {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

/* ========== ОСНОВНОЙ КОНТЕНТ ========== */
.main-content {
  position: relative;
  z-index: 2;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Hero секция */
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 20px;
}

.hero-content {
  max-width: 1200px;
  width: 100%;
}

.floating-badge {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 12px 24px;
  border-radius: 100px;
  margin-bottom: 30px;
  border: 1px solid rgba(0, 150, 255, 0.3);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.hero-title {
  font-size: 80px;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.1;
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff, #a0c0ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.gradient-text-2 {
  background: linear-gradient(135deg, #4cc9ff, #0066ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-description {
  font-size: 20px;
  color: #a0b0d0;
  max-width: 600px;
  margin: 0 auto 50px;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-top: 50px;
}

.stat-number {
  font-size: 48px;
  font-weight: 800;
  background: linear-gradient(135deg, #fff, #4cc9ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-label {
  font-size: 14px;
  color: #8090b0;
  margin-top: 5px;
}

/* Секция ракет */
.rockets-section {
  padding: 80px 40px;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.title-icon {
  font-size: 40px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.rockets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.rocket-card {
  background: rgba(20, 30, 55, 0.6);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  padding: 40px;
  position: relative;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(0, 150, 255, 0.2);
  animation: fadeInUp 0.6s ease backwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.rocket-card:hover {
  transform: translateY(-15px) scale(1.02);
  border-color: rgba(0, 150, 255, 0.5);
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.3);
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background: radial-gradient(circle at 50% 0%, rgba(0, 150, 255, 0.15), transparent);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}

.rocket-card:hover .card-glow {
  opacity: 1;
}

.card-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1a2a4f, #0a1a3a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border: 2px solid rgba(0, 150, 255, 0.5);
}

.card-icon i {
  font-size: 40px;
  color: #4cc9ff;
}

.rocket-name {
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 25px;
}

.specs-container {
  margin: 25px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.spec-item-3d {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  transition: all 0.3s;
}

.spec-item-3d:hover {
  background: rgba(0, 100, 255, 0.2);
  transform: translateX(5px);
}

.spec-icon {
  font-size: 24px;
}

.spec-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.spec-label {
  color: #8090b0;
  font-size: 14px;
}

.spec-value {
  color: white;
  font-weight: 600;
  font-size: 18px;
}

.rocket-description {
  color: #b0c0e0;
  line-height: 1.6;
  margin: 20px 0;
}

.tech-tags {
  display: flex;
  gap: 10px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.tag {
  background: rgba(0, 150, 255, 0.2);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  color: #4cc9ff;
}

.btn-primary {
  width: 100%;
  padding: 15px;
  background: linear-gradient(135deg, #0066ff, #00ccff);
  border: none;
  border-radius: 15px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 100, 255, 0.3);
}

/* Технологии */
.tech-showcase {
  padding: 80px 40px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.tech-card {
  background: rgba(20, 30, 55, 0.5);
  backdrop-filter: blur(10px);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s;
  border: 1px solid rgba(0, 150, 255, 0.1);
}

.tech-card:hover {
  transform: translateY(-5px);
  background: rgba(30, 40, 65, 0.7);
}

.tech-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.tech-card h3 {
  color: white;
  margin-bottom: 15px;
}

.tech-card p {
  color: #a0b0d0;
  margin-bottom: 20px;
}

.tech-progress {
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #0066ff, #00ccff);
  border-radius: 10px;
  transition: width 1s;
}

.tech-percent {
  font-size: 12px;
  color: #4cc9ff;
}

/* Преимущества */
.advantages-section {
  padding: 80px 40px;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.advantage-item {
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  transition: all 0.3s;
  border: 1px solid rgba(0, 150, 255, 0.1);
}

.advantage-item:hover {
  transform: translateY(-10px);
  background: rgba(255, 255, 255, 0.08);
}

.advantage-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.advantage-item h3 {
  color: white;
  margin-bottom: 15px;
}

.advantage-item p {
  color: #b0c0e0;
  line-height: 1.6;
}

/* CTA секция */
.cta-section {
  padding: 80px 40px;
}

.cta-content {
  background: linear-gradient(135deg, rgba(0, 100, 255, 0.15), rgba(0, 200, 255, 0.08));
  backdrop-filter: blur(20px);
  border-radius: 50px;
  padding: 80px;
  text-align: center;
  border: 1px solid rgba(0, 150, 255, 0.2);
  max-width: 1200px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 18px;
  color: #b0c0e0;
  margin-bottom: 40px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.btn-primary-large {
  padding: 18px 40px;
  background: linear-gradient(135deg, #0066ff, #00ccff);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 100, 255, 0.4);
}

.btn-outline-large {
  padding: 18px 40px;
  background: transparent;
  border: 2px solid rgba(0, 150, 255, 0.5);
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-outline-large:hover {
  border-color: #0066ff;
  transform: translateY(-2px);
}

/* Модальное окно */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: linear-gradient(135deg, #1a2a4f, #0a1a3a);
  border-radius: 30px;
  padding: 40px;
  max-width: 500px;
  width: 90%;
  border: 1px solid rgba(0, 150, 255, 0.5);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.modal-header h2 {
  color: white;
  font-size: 28px;
}

.modal-close {
  background: none;
  border: none;
  color: white;
  font-size: 40px;
  cursor: pointer;
  transition: 0.3s;
}

.modal-close:hover {
  transform: scale(1.1);
  color: #ff4444;
}

.modal-specs {
  margin-bottom: 30px;
}

.modal-spec {
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.modal-description {
  color: #b0c0e0;
  line-height: 1.6;
  margin-bottom: 30px;
}

/* Адаптивность */
@media (max-width: 1200px) {
  .rockets-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .tech-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 40px;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .rockets-section, .tech-showcase, .advantages-section, .cta-section {
    padding: 40px 20px;
  }
  
  .rockets-grid {
    grid-template-columns: 1fr;
  }
  
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-content {
    padding: 40px 20px;
  }
  
  .cta-content h2 {
    font-size: 28px;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>