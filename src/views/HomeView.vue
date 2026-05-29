<template>
  <div class="home-page">
    <!-- Hero секция -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="text-blue">Покоряем</span>
          <span class="text-orange">космос</span>
          <br>
          <span class="text-white">вместе</span>
        </h1>
        <p class="hero-subtitle">
          Инновационные решения для запусков и исследований
        </p>
        <router-link to="/about" class="btn-primary">
          Узнать больше
          <span class="arrow">→</span>
        </router-link>
      </div>
      
    
      <div class="hero-rocket">🚀</div>
      <div class="hero-glow"></div>
    </section>

  
    <section class="achievements">
      <div class="container">
        <h2 class="section-title">Наши достижения</h2>
        
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in stats" :key="stat.label">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    
    <section class="about-brief">
      <div class="container">
        <div class="brief-content">
          <h2>Мы создаём технологии будущего для доступа в космос</h2>
          <p>
            SpaceTech — лидер в области многоразовых космических систем. 
            Наша миссия — сделать космос доступным для научных исследований, 
            коммерческих проектов и будущего человечества.
          </p>
          <div class="brief-stats">
            <div class="brief-stat">
              <span class="number">15+</span>
              <span class="label">Успешных запусков</span>
            </div>
            <div class="brief-stat">
              <span class="number">98%</span>
              <span class="label">Успеха миссий</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  
    <section class="features">
      <div class="container">
        <h2 class="section-title">Почему мы?</h2>
        <div class="features-grid">
          <div class="feature-card" v-for="feature in features" :key="feature.title">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

   
    <section class="cta">
      <div class="container">
        <div class="cta-box">
          <h2>Готовы к космическому путешествию?</h2>
          <p>Свяжитесь с нами для расчёта стоимости запуска</p>
          <router-link to="/products" class="btn-primary-large">
            Смотреть продукты
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = ref([
  { value: '50+', label: 'Запусков', icon: '🚀' },
  { value: '98%', label: 'Успеха', icon: '🎯' },
  { value: '15', label: 'Лет опыта', icon: '📈' },
  { value: '200+', label: 'Спутников на орбите', icon: '🛰️' }
])

const features = ref([
  { 
    icon: '⚡', 
    title: 'Быстрая подготовка', 
    desc: 'Готовность к запуску за 48 часов' 
  },
  { 
    icon: '', 
    title: 'Точность', 
    desc: 'Уникальная система навигации' 
  },
  { 
    icon: '💰', 
    title: 'Доступность', 
    desc: 'На 30% дешевле конкурентов' 
  },
  { 
    icon: '🛡️', 
    title: 'Надёжность', 
    desc: 'Гарантия 10 лет на все системы' 
  }
])
</script>

<style scoped>
.home-page {
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}


.hero {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 60px 20px;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 24px;
}

.text-blue {
  background: linear-gradient(135deg, #00d4ff, #0066ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.text-orange {
  background: linear-gradient(135deg, #ff6b35, #ff8c55);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.text-white {
  color: white;
}

.hero-subtitle {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--color-text-secondary);
  margin-bottom: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  background: var(--color-accent-gradient);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

.arrow {
  transition: transform 0.3s;
}

.btn-primary:hover .arrow {
  transform: translateX(5px);
}

.hero-rocket {
  position: absolute;
  font-size: 120px;
  opacity: 0.1;
  animation: floatRocket 6s ease-in-out infinite;
  z-index: 1;
}

@keyframes floatRocket {
  0%, 100% { transform: translateY(0) rotate(-5deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.hero-glow {
  position: absolute;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.15), transparent 70%);
  border-radius: 50%;
  z-index: 0;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
}


.achievements {
  padding: 80px 0;
}

.section-title {
  font-size: clamp(28px, 4vw, 42px);
  text-align: center;
  margin-bottom: 60px;
  color: white;
  font-weight: 700;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.stat-card {
  background: var(--color-bg-card);
  border: 1px solid rgba(0, 212, 255, 0.3);
  border-radius: var(--radius-md);
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-orange));
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent-blue);
  box-shadow: 0 10px 40px rgba(0, 212, 255, 0.2);
}

.stat-icon {
  font-size: 28px;
  margin-bottom: 16px;
  color: var(--color-accent-blue);
}

.stat-number {
  font-size: 40px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-accent-blue), #0066ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: 1px;
}


.about-brief {
  padding: 80px 0;
  background: linear-gradient(180deg, transparent, rgba(255, 107, 53, 0.05));
}

.brief-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.brief-content h2 {
  font-size: clamp(24px, 3vw, 36px);
  margin-bottom: 24px;
  color: white;
}

.brief-content p {
  font-size: 18px;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 40px;
}

.brief-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
}

.brief-stat {
  text-align: center;
}

.brief-stat .number {
  display: block;
  font-size: 48px;
  font-weight: 800;
  background: var(--color-accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.brief-stat .label {
  font-size: 14px;
  color: var(--color-text-muted);
}


.features {
  padding: 80px 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
}

.feature-card {
  background: var(--color-bg-card);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent-orange);
  box-shadow: 0 10px 40px rgba(255, 107, 53, 0.15);
}

.feature-icon {
  font-size: 40px;
  margin-bottom: 20px;
}

.feature-card h3 {
  color: white;
  margin-bottom: 12px;
  font-size: 20px;
}

.feature-card p {
  color: var(--color-text-secondary);
  font-size: 15px;
}


.cta {
  padding: 80px 0;
}

.cta-box {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 212, 255, 0.1));
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: var(--radius-lg);
  padding: 60px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-box::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.1), transparent 70%);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.cta-box h2 {
  font-size: clamp(24px, 3vw, 36px);
  color: white;
  margin-bottom: 16px;
  position: relative;
  z-index: 1;
}

.cta-box p {
  color: var(--color-text-secondary);
  margin-bottom: 32px;
  font-size: 18px;
  position: relative;
  z-index: 1;
}

.btn-primary-large {
  display: inline-block;
  padding: 18px 40px;
  background: var(--color-accent-gradient);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s;
  position: relative;
  z-index: 1;
  border: none;
  cursor: pointer;
}

.btn-primary-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}

/* Адаптивность */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .hero {
    min-height: 70vh;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .brief-stats {
    flex-direction: column;
    gap: 30px;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-box {
    padding: 40px 24px;
  }
}
</style>