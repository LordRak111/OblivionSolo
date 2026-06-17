<template>
  <main id="projects" class="projects-page">
    <section class="projects-section">
      <div class="projects-head">
        <p class="projects-eyebrow">Космические миссии</p>
        <h1>Наши проекты</h1>
        <p>
          Подробные успешные запуски и текущие миссии
        </p>
      </div>

      <div class="projects-tabs">
        <button
          v-for="filter in filters"
          :key="filter.value"
          class="projects-tab"
          :class="{ 'projects-tab--active': activeFilter === filter.value }"
          type="button"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }}
        </button>
      </div>

      <div class="projects-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card"
        >
          <div class="project-card__image">
            <img :src="project.image" :alt="project.title" />

            <span
              class="project-card__status"
              :class="project.status === 'active'
                ? 'project-card__status--active'
                : 'project-card__status--done'"
            >
              {{ project.statusText }}
            </span>
          </div>

          <div class="project-card__body">
            <h2>{{ project.title }}</h2>

            <div class="project-card__meta">
              <div class="project-card__meta-row">
                <span class="project-card__icon">▣</span>
                <span>{{ project.date }}</span>
              </div>

              <div class="project-card__meta-row">
                <span class="project-card__planet"></span>
                <span>{{ project.customer }}</span>
              </div>
            </div>

            <ul class="project-card__results">
              <li v-for="result in project.results" :key="result">
                {{ result }}
              </li>
            </ul>

            <button class="project-card__button" type="button">
              Подробнее
            </button>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import '../styles/projects.css'

const activeFilter = ref('all')

const filters = [
  {
    label: 'Все проекты',
    value: 'all',
  },
  {
    label: 'Завершенные',
    value: 'completed',
  },
  {
    label: 'В работе',
    value: 'active',
  },
]

const projects = [
  {
    id: 1,
    title: 'Запуск группировки "Связь-2023"',
    status: 'completed',
    statusText: 'Завершен',
    date: 'Янв 2023 — Июн 2023',
    customer: 'РосКосмос',
    image: '/images/project-1.jpg',
    results: [
      'Успешный вывод 12 спутников на орбиту',
      'Точность вывода 99.8%',
      'Развёртывание группировки завершено',
    ],
  },
  {
    id: 2,
    title: 'Миссия к Луне "Луна-Ресурс"',
    status: 'active',
    statusText: 'В работе',
    date: 'Авг 2024 — Настоящее время',
    customer: 'ИКИ РАН',
    image: '/images/project-2.jpg',
    results: [
      'Ракета успешно запущена',
      'Коррекция траектории выполнена',
      'Ожидается посадка в декабре 2026',
    ],
  },
  {
    id: 3,
    title: 'Коммерческий запуск для SpaceCom',
    status: 'completed',
    statusText: 'Завершен',
    date: 'Мар 2024 — Май 2024',
    customer: 'SpaceCom Inc.',
    image: '/images/project-3.jpg',
    results: [
      'Вывод коммерческого спутника на ГСО',
      'Клиент подтвердил работоспособность',
      'Экономия 15% от плановой стоимости',
    ],
  },
  {
    id: 4,
    title: 'Орбитальная станция "Восток-2"',
    status: 'active',
    statusText: 'В работе',
    date: 'Сент 2025 — Настоящее время',
    customer: 'РосКосмос',
    image: '/images/project-4.jpg',
    results: [
      'Запущен первый модуль станции',
      'Стыковка прошла успешно',
      'Ожидается запуск второго модуля',
    ],
  },
  {
    id: 5,
    title: 'Научная миссия "Марс-Метео"',
    status: 'completed',
    statusText: 'Завершен',
    date: 'Фев 2023 — Окт 2023',
    customer: 'ESA',
    image: '/images/project-5.jpg',
    results: [
      'Успешный запуск и выход на траекторию',
      'Зонд достиг орбиты Марса',
      'Передача данных о погоде на Марсе',
    ],
  },
  {
    id: 6,
    title: 'Группировка "Глобальный GPS"',
    status: 'completed',
    statusText: 'Завершен',
    date: 'Июл 2022 — Дек 2022',
    customer: 'ГЛОНАСС',
    image: '/images/project-6.jpg',
    results: [
      'Запущено 8 навигационных спутников',
      'Точность позиционирования улучшена',
      'Покрытие территории расширено',
    ],
  },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects
  }

  return projects.filter((project) => project.status === activeFilter.value)
})
</script>