<template>
  <div class="about-page">
  
    <section class="about-hero">
      <div class="container">
        <h1 class="gradient-text">О компании</h1>
        <p class="subtitle">Миссия, ценности и команда SpaceTech</p>
      </div>
    </section>


    <section class="mission-section container">
      <div class="mission-grid">
        <div class="mission-card" v-for="item in mission" :key="item.title">
          <div class="mission-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </section>


    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card" v-for="stat in companyStats" :key="stat.label">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>


    <section class="timeline-section container">
      <h2 class="section-title">Наш путь</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="(event, index) in timeline" :key="event.year">
          <div class="timeline-marker">{{ event.year }}</div>
          <div class="timeline-content">
            <h4>{{ event.title }}</h4>
            <p>{{ event.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    
    <section class="team-section container">
      <h2 class="section-title">Наша команда</h2>
      <div class="team-grid">
        <div class="team-card" v-for="member in team" :key="member.name">
          <div class="team-avatar">{{ member.avatar }}</div>
          <h4>{{ member.name }}</h4>
          <span class="team-role">{{ member.role }}</span>
          <p>{{ member.bio }}</p>
        </div>
      </div>
    </section>

    <section class="partners-section">
      <div class="container">
        <h2 class="section-title light">Нам доверяют</h2>
        <div class="partners-grid">
          <div class="partner-logo" v-for="partner in partners" :key="partner">
            {{ partner }}
          </div>
        </div>
      </div>
    </section>


    <section class="about-cta">
      <div class="cta-content">
        <h2>Присоединяйтесь к космической революции</h2>
        <p>Мы всегда в поиске талантливых специалистов и партнёров</p>
        <router-link to="/products" class="btn-primary-large">
          Смотреть продукты
          <span>→</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mission = ref([
  { 
    icon: '🎯', 
    title: 'Наша миссия', 
    desc: 'Сделать космос доступным для научных исследований, коммерческих проектов и будущего человечества' 
  },
  { 
    icon: '🌍', 
    title: 'Экология', 
    desc: 'Разрабатываем технологии с минимальным углеродным следом и максимальной эффективностью' 
  },
  { 
    icon: '🔬', 
    title: 'Инновации', 
    desc: 'Инвестируем 40% бюджета в R&D для создания прорывных космических решений' 
  }
])

const companyStats = ref([
  { value: '2020', label: 'Год основания' },
  { value: '150+', label: 'Специалистов' },
  { value: '15', label: 'Успешных запусков' },
  { value: '8', label: 'Стран-партнёров' }
])

const timeline = ref([
  { 
    year: '2020', 
    title: 'Основание', 
    desc: 'Команда энтузиастов объединилась для создания доступных космических технологий' 
  },
  { 
    year: '2021', 
    title: 'Первый контракт', 
    desc: 'Подписан договор с национальным космическим агентством на разработку спутника' 
  },
  { 
    year: '2022', 
    title: 'Первый запуск', 
    desc: 'Успешный вывод на орбиту демонстрационного спутника "Орбита-1"' 
  },
  { 
    year: '2024', 
    title: 'Масштабирование', 
    desc: 'Открытие производственного комплекса и запуск серии "Орбита-X"' 
  },
  { 
    year: '2026', 
    title: 'Межпланетная программа', 
    desc: 'Старт разработки ракеты "Титан-3" для лунных и марсианских миссий' 
  }
])

const team = ref([
  { 
    name: 'Имя', 
    role: 'CEO & Founder', 
    avatar: '👨‍🚀', 
    bio: 'Бывший инженер Роскосмоса, 15 лет опыта в ракетостроении' 
  },
  { 
    name: 'Имя', 
    role: 'CTO', 
    avatar: '👩‍💻', 
    bio: 'Доктор технических наук, эксперт в области автономных систем' 
  },
  { 
    name: 'Имя', 
    role: 'Head of R&D', 
    avatar: '🔬', 
    bio: 'Специалист по двигательным установкам и новым материалам' 
  },
  { 
    name: 'Имя', 
    role: 'Director of Operations', 
    avatar: '📊', 
    bio: 'Управляет логистикой запусков и международным партнёрством' 
  }
])

const partners = ref(['🛰️ ROSCOSMOS', '🌍 ESA', '🔭 NASA', '🚀 SpaceX', '🛰️ ISRO'])
</script>

<style scoped>
.about-page {
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

/* Hero */
.about-hero {
  padding: 100px 40px 60px;
  text-align: center;
  background: linear-gradient(180deg, rgba(0,100,255,0.1) 0%, transparent 100%);
}

.about-hero h1 {
  font-size: clamp(40px, 6vw, 64px);
  font-weight: 800;
  margin-bottom: 15px;
}

.gradient-text {
  background: linear-gradient(135deg, #00d4ff, #ff6b35);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.subtitle {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}


.mission-section {
  padding: 60px 40px;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.mission-card {
  background: var(--color-bg-card);
  padding: 40px 30px;
  border-radius: var(--radius-md);
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.2);
  transition: all 0.3s;
}

.mission-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent-orange);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
}

.mission-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.mission-card h3 {
  color: white;
  margin-bottom: 15px;
  font-size: 22px;
}

.mission-card p {
  color: var(--color-text-secondary);
  line-height: 1.6;
}


.stats-section {
  padding: 60px 40px;
  background: rgba(255, 107, 53, 0.05);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  text-align: center;
}

.stat-card {
  padding: 30px;
}

.stat-value {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 800;
  background: linear-gradient(135deg, var(--color-accent-orange), #ff8c55);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.stat-label {
  color: var(--color-text-secondary);
  margin-top: 10px;
  font-size: 16px;
}

.timeline-section {
  padding: 80px 40px;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
  color: white;
}

.section-title.light {
  background: linear-gradient(135deg, #00d4ff, #ff6b35);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 30px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: linear-gradient(180deg, var(--color-accent-orange), var(--color-accent-blue));
}

.timeline-item {
  position: relative;
  padding-left: 40px;
  margin-bottom: 40px;
}

.timeline-marker {
  position: absolute;
  left: -29px;
  top: 0;
  width: 60px;
  height: 60px;
  background: var(--color-bg-card);
  border: 3px solid var(--color-accent-orange);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--color-accent-orange);
  font-size: 14px;
  z-index: 1;
}

.timeline-content h4 {
  color: white;
  margin-bottom: 8px;
  font-size: 20px;
}

.timeline-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
}

.team-section {
  padding: 80px 40px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
}

.team-card {
  background: var(--color-bg-card);
  padding: 40px 30px;
  border-radius: var(--radius-md);
  text-align: center;
  border: 1px solid rgba(0, 212, 255, 0.2);
  transition: all 0.3s;
}

.team-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-accent-blue);
}

.team-avatar {
  font-size: 50px;
  margin-bottom: 20px;
}

.team-card h4 {
  color: white;
  margin-bottom: 5px;
}

.team-role {
  display: block;
  color: var(--color-accent-blue);
  font-size: 14px;
  margin-bottom: 15px;
  font-weight: 500;
}

.team-card p {
  color: var(--color-text-secondary);
  font-size: 14px;
  line-height: 1.5;
}

/* Партнёры */
.partners-section {
  padding: 60px 40px;
  background: rgba(0, 212, 255, 0.03);
}

.partners-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.partner-logo {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-secondary);
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-sm);
  transition: all 0.3s;
}

.partner-logo:hover {
  color: var(--color-accent-blue);
  background: rgba(0, 212, 255, 0.1);
}

.about-cta {
  padding: 80px 40px;
}

.cta-content {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.15), rgba(0, 212, 255, 0.08));
  backdrop-filter: blur(20px);
  border-radius: var(--radius-xl);
  padding: clamp(40px, 8vw, 80px);
  text-align: center;
  border: 1px solid rgba(255, 107, 53, 0.2);
  max-width: 900px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: clamp(24px, 4vw, 40px);
  color: white;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: clamp(14px, 2vw, 18px);
  color: var(--color-text-secondary);
  margin-bottom: 40px;
}

.btn-primary-large {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 40px;
  background: linear-gradient(135deg, #ff6b35, #ff8c55);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  text-decoration: none;
}

.btn-primary-large:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}


@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .about-hero,
  .mission-section,
  .stats-section,
  .timeline-section,
  .team-section,
  .partners-section,
  .about-cta {
    padding: 50px 20px;
  }
  
  .timeline::before {
    left: 5px;
  }
  
  .timeline-marker {
    left: -25px;
    width: 50px;
    height: 50px;
    font-size: 12px;
  }
  
  .timeline-item {
    padding-left: 35px;
  }
  
  .partners-grid {
    gap: 20px;
  }
  
  .partner-logo {
    font-size: 14px;
    padding: 10px 20px;
  }
}
</style>