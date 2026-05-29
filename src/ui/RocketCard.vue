<template>
  <div 
    class="rocket-card"
    :style="{ animationDelay: `${delay}s` }"
    @click="$emit('show-details', rocket)"
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
    
    <button class="btn-primary" @click.stop="$emit('show-details', rocket)">
      Подробнее
      <i class="fas fa-arrow-right"></i>
    </button>
  </div>
</template>

<script setup>
defineProps({
  rocket: {
    type: Object,
    required: true
  },
  delay: {
    type: Number,
    default: 0
  }
})

defineEmits(['show-details'])
</script>

<style scoped>
.rocket-card {
  background: var(--color-bg-secondary);
  backdrop-filter: blur(20px);
  border-radius: var(--radius-lg);
  padding: 40px;
  position: relative;
  transition: all var(--transition-smooth);
  border: 1px solid rgba(0, 150, 255, 0.2);
  animation: fadeInUp 0.6s ease backwards;
  cursor: pointer;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.rocket-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(0, 150, 255, 0.5);
  box-shadow: var(--shadow-card);
}

.card-glow {
  position: absolute;
  inset: 0;
  border-radius: var(--radius-lg);
  background: radial-gradient(circle at 50% 0%, rgba(0, 150, 255, 0.15), transparent);
  opacity: 0;
  transition: opacity 0.4s;
  pointer-events: none;
}

.rocket-card:hover .card-glow { opacity: 1; }

.card-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1a2a4f, #0a1a3a);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  border: 2px solid rgba(0, 150, 255, 0.5);
}

.card-icon i {
  font-size: 36px;
  color: var(--color-accent);
}

.rocket-name {
  font-size: 22px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  min-height: 56px;
}

.specs-container {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.spec-item-3d {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--radius-sm);
  transition: all 0.3s;
}

.spec-item-3d:hover {
  background: rgba(0, 100, 255, 0.2);
  transform: translateX(5px);
}

.spec-icon { font-size: 20px; }

.spec-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
}

.spec-label {
  color: var(--color-text-secondary);
  font-size: 13px;
}

.spec-value {
  color: white;
  font-weight: 600;
  font-size: 16px;
}

.rocket-description {
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 20px 0;
  font-size: 14px;
}

.tech-tags {
  display: flex;
  gap: 8px;
  margin: 20px 0;
  flex-wrap: wrap;
}

.tag {
  background: rgba(0, 150, 255, 0.2);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px;
  color: var(--color-accent);
}

.btn-primary {
  width: 100%;
  padding: 12px;
  background: var(--gradient-primary);
  border: none;
  border-radius: var(--radius-sm);
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}
</style>