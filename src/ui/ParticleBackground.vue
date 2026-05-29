<template>
  <div class="particles">
    <div 
      v-for="i in 60" 
      :key="i" 
      class="particle" 
      :style="getParticleStyle(i)"
    ></div>
  </div>
</template>

<script setup>
const getParticleStyle = (i) => {
  const isOrange = Math.random() > 0.5
  const color = isOrange 
    ? 'rgba(255, 107, 53, 0.6)' 
    : 'rgba(0, 212, 255, 0.6)'
  
  return {
    left: Math.random() * 100 + '%',
    top: Math.random() * 100 + '%',
    width: (2 + Math.random() * 3) + 'px',
    height: (2 + Math.random() * 3) + 'px',
    background: color,
    animationDuration: (8 + Math.random() * 12) + 's',
    animationDelay: Math.random() * 5 + 's',
    opacity: 0.2 + Math.random() * 0.5
  }
}
</script>

<style scoped>
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  animation: floatParticle linear infinite;
}

@keyframes floatParticle {
  0% {
    transform: translateY(100vh) translateX(0);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}
</style>