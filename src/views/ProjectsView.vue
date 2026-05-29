<template>
  <div class="projects-page">
    <!-- Hero -->
    <section class="projects-hero">
      <div class="container">
        <h1 class="gradient-text">Наши проекты</h1>
        <p class="subtitle">Реализованные и текущие космические миссии</p>
      </div>
    </section>

    <!-- Текущие проекты -->
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">Текущие проекты</h2>
        
        <div class="projects-grid">
          <div 
            v-for="project in currentProjects" 
            :key="project.id" 
            class="project-card"
            :class="{ large: project.large }"
          >
            <div class="project-header">
              <div class="project-icon">{{ project.icon }}</div>
              <div class="project-status" :class="project.status">
                {{ project.statusText }}
              </div>
            </div>
            
            <h3 class="project-title">{{ project.name }}</h3>
            <p class="project-desc">{{ project.description }}</p>
            
            <div class="project-details">
              <div class="detail" v-for="detail in project.details" :key="detail.label">
                <span class="detail-label">{{ detail.label }}</span>
                <span class="detail-value">{{ detail.value }}</span>
              </div>
            </div>
            
            <div class="project-progress">
              <div class="progress-label">
                <span>Прогресс</span>
                <span>{{ project.progress }}%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: project.progress + '%' }"></div>
              </div>
            </div>
            
            <button class="btn-details" @click="showProjectDetails(project)">
              Подробнее о проекте
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Завершённые проекты -->
    <section class="completed-section">
      <div class="container">
        <h2 class="section-title">Завершённые проекты</h2>
        
        <div class="timeline">
          <div 
            v-for="project in completedProjects" 
            :key="project.id" 
            class="timeline-item"
          >
            <div class="timeline-marker">
              <span class="year">{{ project.year }}</span>
            </div>
            <div class="timeline-content">
              <div class="timeline-icon">{{ project.icon }}</div>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="timeline-tags">
                <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Будущие миссии -->
    <section class="future-section">
      <div class="container">
        <h2 class="section-title">Планируемые миссии</h2>
        
        <div class="future-grid">
          <div class="future-card" v-for="mission in futureMissions" :key="mission.id">
            <div class="future-year">{{ mission.year }}</div>
            <div class="future-content">
              <h3>{{ mission.name }}</h3>
              <p>{{ mission.goal }}</p>
              <div class="future-stats">
                <div class="future-stat">
                  <span class="stat-icon">🎯</span>
                  <span>{{ mission.objective }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentProjects = ref([
  {
    id: 1,
    name: 'Лунная программа "Селена"',
    description: 'Разработка многоразового лунного посадочного модуля для доставки грузов и оборудования на поверхность Луны',
    icon: '🌙',
    status: 'active',
    statusText: 'Активен',
    large: true,
    details: [
      { label: 'Бюджет', value: '$2.5 млрд' },
      { label: 'Команда', value: '120 человек' },
      { label: 'Срок', value: '2024-2028' }
    ],
    progress: 65
  },
  {
    id: 2,
    name: 'Спутниковая группировка "LinkNet"',
    description: 'Развёртывание глобальной сети из 200 спутников для обеспечения высокоскоростного интернета',
    icon: '🛰️',
    status: 'active',
    statusText: 'Активен',
    large: false,
    details: [
      { label: 'Запущено', value: '87/200' },
      { label: 'Орбита', value: 'LEO 550 км' }
    ],
    progress: 44
  },
  {
    id: 3,
    name: 'Двигатель "Феникс-3"',
    description: 'Создание нового поколения метан-кислородных двигателей с тягой 2000 кН',
    icon: '🔥',
    status: 'testing',
    statusText: 'Испытания',
    large: false,
    details: [
      { label: 'Тяга', value: '2000 кН' },
      { label: 'Топливо', value: 'CH4/LOX' }
    ],
    progress: 82
  },
  {
    id: 4,
    name: 'Марсианская экспедиция "Арес"',
    description: 'Подготовка пилотируемой миссии на Марс с запуском в 2032 году',
    icon: '🔴',
    status: 'planning',
    statusText: 'Планирование',
    large: true,
    details: [
      { label: 'Экипаж', value: '6 человек' },
      { label: 'Длительность', value: '2.5 года' },
      { label: 'Старт', value: '2032' }
    ],
    progress: 15
  }
])

const completedProjects = ref([
  {
    id: 1,
    year: '2025',
    name: 'Первый коммерческий запуск',
    description: 'Успешный вывод на орбиту 24 спутников связи для международного заказчика',
    icon: '🚀',
    tags: ['Запуск', 'Коммерция']
  },
  {
    id: 2,
    year: '2024',
    name: 'Открытие космодрома "Восток-2"',
    description: 'Запуск современного космодрома с возможностью 50 запусков в год',
    icon: '🏗️',
    tags: ['Инфраструктура']
  },
  {
    id: 3,
    year: '2023',
    name: 'Система автоматической посадки',
    description: 'Разработка и внедрение ИИ-системы для точной посадки первой ступени',
    icon: '🎯',
    tags: ['Технологии', 'ИИ']
  },
  {
    id: 4,
    year: '2022',
    name: 'Первый запуск "Орбита-X"',
    description: 'Демонстрационный полёт новой ракеты-носителя с возвращением ступени',
    icon: '🎉',
    tags: ['Ракета', 'Тест']
  }
])

const futureMissions = ref([
  {
    id: 1,
    year: '2027',
    name: 'Лунная база "Рассвет"',
    goal: 'Создание постоянной исследовательской станции на Луне',
    objective: '4 человека'
  },
  {
    id: 2,
    year: '2029',
    name: 'Астероидная миссия',
    goal: 'Доставка образцов с околоземного астероида',
    objective: 'Забор грунта'
  },
  {
    id: 3,
    year: '2032',
    name: 'Пилотируемый полёт на Марс',
    goal: 'Первая высадка человека на Марс',
    objective: '6 человек'
  }
])

const showProjectDetails = (project) => {
  alert(`${project.name}\n\n${project.description}\n\nПрогресс: ${project.progress}%`)
}
</script>

<style scoped>
.projects-page {
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}


.projects-hero {
  padding: 100px 40px 60px;
  text-align: center;
}

.projects-hero h1 {
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
}


.projects-section,
.completed-section,
.future-section {
  padding: 80px 0;
}

.section-title {
  font-size: clamp(28px, 4vw, 40px);
  text-align: center;
  margin-bottom: 60px;
  color: white;
  font-weight: 700;
}

/* Текущие проекты */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: var(--color-bg-card);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: var(--radius-md);
  padding: 35px;
  transition: all 0.3s;
}

.project-card.large {
  grid-column: span 2;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
  box-shadow: 0 10px 40px rgba(255, 107, 53, 0.15);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}

.project-icon {
  font-size: 40px;
}

.project-status {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.project-status.active {
  background: rgba(0, 255, 157, 0.2);
  color: #00ff9d;
  border: 1px solid rgba(0, 255, 157, 0.3);
}

.project-status.testing {
  background: rgba(255, 193, 7, 0.2);
  color: #ffc107;
  border: 1px solid rgba(255, 193, 7, 0.3);
}

.project-status.planning {
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border: 1px solid rgba(0, 212, 255, 0.3);
}

.project-title {
  color: white;
  font-size: 24px;
  margin-bottom: 12px;
}

.project-desc {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 25px;
}

.project-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
  margin-bottom: 25px;
}

.detail {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.detail-label {
  font-size: 12px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  color: white;
  font-weight: 600;
  font-size: 15px;
}

.project-progress {
  margin-bottom: 25px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.progress-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff6b35, #ff8c55);
  border-radius: 10px;
  transition: width 1s ease;
}

.btn-details {
  width: 100%;
  padding: 14px;
  background: rgba(255, 107, 53, 0.2);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: var(--radius-sm);
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
  font-size: 15px;
}

.btn-details:hover {
  background: rgba(255, 107, 53, 0.3);
  border-color: #ff6b35;
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
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #ff6b35, #00d4ff);
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
  border: 3px solid #00d4ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-marker .year {
  font-weight: 700;
  color: #00d4ff;
  font-size: 14px;
}

.timeline-content {
  background: var(--color-bg-card);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: var(--radius-md);
  padding: 25px;
}

.timeline-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.timeline-content h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 20px;
}

.timeline-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 15px;
}

.timeline-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 4px 12px;
  background: rgba(0, 212, 255, 0.2);
  color: #00d4ff;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

/* Будущие миссии */
.future-section {
  padding-bottom: 100px;
}

.future-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.future-card {
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(0, 212, 255, 0.05));
  border: 1px solid rgba(255, 107, 53, 0.2);
  border-radius: var(--radius-md);
  padding: 30px;
  position: relative;
  transition: all 0.3s;
}

.future-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 107, 53, 0.4);
  box-shadow: 0 10px 40px rgba(255, 107, 53, 0.15);
}

.future-year {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 6px 16px;
  background: linear-gradient(135deg, #ff6b35, #ff8c55);
  border-radius: 20px;
  font-weight: 700;
  font-size: 14px;
  color: white;
}

.future-content h3 {
  color: white;
  margin-bottom: 12px;
  font-size: 22px;
}

.future-content p {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: 20px;
}

.future-stats {
  display: flex;
  gap: 15px;
}

.future-stat {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--color-text-secondary);
  font-size: 14px;
}

.stat-icon {
  font-size: 18px;
}


@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card.large {
    grid-column: span 1;
  }
  
  .future-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline::before {
    left: 5px;
  }
  
  .timeline-marker {
    left: -25px;
    width: 50px;
    height: 50px;
  }
  
  .timeline-item {
    padding-left: 35px;
  }
}
</style>