<template>
  <Teleport to="body">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ rocket.name }}</h2>
          <button class="modal-close" @click="$emit('close')">×</button>
        </div>
        
        <div class="modal-body">
          <div class="modal-specs">
            <div class="modal-spec">
              <span class="spec-icon">📏</span>
              <div>
                <strong>Высота</strong>
                <span>{{ rocket.height }}</span>
              </div>
            </div>
            <div class="modal-spec">
              <span class="spec-icon">⚖️</span>
              <div>
                <strong>Грузоподъёмность</strong>
                <span>{{ rocket.payload }}</span>
              </div>
            </div>
            <div class="modal-spec">
              <span class="spec-icon">🔥</span>
              <div>
                <strong>Тяга</strong>
                <span>{{ rocket.thrust }}</span>
              </div>
            </div>
          </div>
          
          <p class="modal-description">{{ rocket.fullDescription }}</p>
          
          <div class="modal-tags">
            <span v-for="tag in rocket.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
        
        <div class="modal-footer">
          <button class="btn-primary" @click="$emit('close')">
            Запросить КП
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
defineProps({
  rocket: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;
  padding: 20px;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: linear-gradient(135deg, #1a2a4f, #0a1a3a);
  border-radius: var(--radius-lg);
  padding: 30px;
  max-width: 550px;
  width: 100%;
  border: 1px solid rgba(0, 150, 255, 0.5);
  animation: slideUp 0.4s ease;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header h2 {
  color: white;
  font-size: 24px;
  margin: 0;
  padding-right: 20px;
}

.modal-close {
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 36px;
  cursor: pointer;
  transition: 0.3s;
  line-height: 1;
}

.modal-close:hover {
  color: #ff4444;
  transform: scale(1.1);
}

.modal-specs {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-bottom: 25px;
}

.modal-spec {
  text-align: center;
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: var(--radius-sm);
}

.spec-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.modal-spec strong {
  display: block;
  color: var(--color-text-secondary);
  font-size: 12px;
  margin-bottom: 4px;
}

.modal-spec span {
  color: white;
  font-weight: 600;
  font-size: 16px;
}

.modal-description {
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 25px;
  font-size: 14px;
}

.modal-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 25px;
}

.tag {
  background: rgba(0, 150, 255, 0.2);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 12px;
  color: var(--color-accent);
}

.modal-footer {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-primary {
  padding: 14px 35px;
  background: var(--gradient-primary);
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

@media (max-width: 600px) {
  .modal-specs {
    grid-template-columns: 1fr;
  }
  
  .modal-header h2 {
    font-size: 20px;
  }
}
</style>