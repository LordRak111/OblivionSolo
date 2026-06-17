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
import { ref, computed, onMounted } from 'vue'
import '../styles/projects.css'

const activeFilter = ref('all')
const projects = ref([])
const isLoading = ref(true)

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// Локальные данные (фолбэк, если бэк временно недоступен)
const localProjects = [
  { id: 1, title: 'Тестовый проект', status: 'active', statusText: 'В работе', date: '2024', customer: 'Test', image: '', results: ['Проверка связи'] }
]

onMounted(async () => {
  try {
    const res = await fetch(`${API_URL}/api/projects`)
    if (res.ok) {
      const data = await res.json()
      projects.value = Array.isArray(data) && data.length ? data : localProjects
    } else {
      projects.value = localProjects
    }
  } catch (err) {
    console.warn('Бэкенд недоступен, используем локальные данные:', err)
    projects.value = localProjects
  } finally {
    isLoading.value = false
  }
})

const filters = [
  { label: 'Все проекты', value: 'all' },
  { label: 'Завершенные', value: 'completed' },
  { label: 'В работе', value: 'active' },
]

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value
  return projects.value.filter(p => p.status === activeFilter.value)
})
</script>
