<template>
  <div class="tech-card">
    <div class="tech-icon">{{ tech.icon }}</div>
    <h3>{{ tech.name }}</h3>
    <p>{{ tech.description }}</p>
    <div class="progress">
      <div class="progress-bar" :style="{ width: tech.progress + '%' }"></div>
    </div>
    <span>{{ tech.progress }}%</span>
  </div>
</template>

<script setup>
defineProps({
  tech: Object
})
</script>

<style scoped>
.tech-card {
  background: rgba(20, 30, 55, 0.5);
  padding: 30px;
  border-radius: 20px;
  text-align: center;
}

.tech-icon { font-size: 45px; margin-bottom: 15px; }
h3 { color: white; margin: 10px 0; }
p { color: #a0b0d0; font-size: 14px; }

.progress {
  height: 6px;
  background: rgba(255,255,255,0.1);
  border-radius: 10px;
  margin: 15px 0;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #0066ff, #00ccff);
}
</style>