<template>
  <header class="header">
    <div class="header-container">
      <router-link to="/" class="logo">
        <span class="logo-icon">🚀</span>
        <span class="logo-text">SpaceTech</span>
      </router-link>
      
   
      <button class="constellation-btn" @click="toggleMenu" :class="{ active: isOpen }">
        <div class="constellation-icon">
          <svg viewBox="0 0 40 40" class="icon-svg">
            <circle cx="8" cy="8" r="2" fill="currentColor" />
            <circle cx="20" cy="12" r="2" fill="currentColor" />
            <circle cx="32" cy="6" r="2" fill="currentColor" />
            <circle cx="16" cy="24" r="2" fill="currentColor" />
            <circle cx="28" cy="28" r="2" fill="currentColor" />
            <circle cx="10" cy="34" r="2" fill="currentColor" />
            <line x1="8" y1="8" x2="20" y2="12" stroke="currentColor" stroke-width="1" opacity="0.5" />
            <line x1="20" y1="12" x2="32" y2="6" stroke="currentColor" stroke-width="1" opacity="0.5" />
            <line x1="20" y1="12" x2="16" y2="24" stroke="currentColor" stroke-width="1" opacity="0.5" />
            <line x1="16" y1="24" x2="28" y2="28" stroke="currentColor" stroke-width="1" opacity="0.5" />
            <line x1="28" y1="28" x2="10" y2="34" stroke="currentColor" stroke-width="1" opacity="0.5" />
            <line x1="16" y1="24" x2="10" y2="34" stroke="currentColor" stroke-width="1" opacity="0.5" />
          </svg>
        </div>
        <span class="btn-text">Меню</span>
      </button>
    </div>
  </header>

 
  <Teleport to="body">
    <transition name="constellation">
      <div v-if="isOpen" class="constellation-overlay" @click.self="closeMenu">
     
        <div class="overlay-bg"></div>
        
        
        <svg class="constellation-svg" viewBox="0 0 1000 700" preserveAspectRatio="xMidYMid meet">
        
          <g class="constellation-lines" stroke-linecap="round">
            <line x1="820" y1="120" x2="700" y2="80" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
            <line x1="700" y1="80" x2="580" y2="160" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
            <line x1="580" y1="160" x2="580" y2="280" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
            <line x1="580" y1="280" x2="300" y2="320" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
            <line x1="580" y1="280" x2="780" y2="340" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
            <line x1="580" y1="280" x2="350" y2="500" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
            <line x1="780" y1="340" x2="750" y2="500" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
            <line x1="350" y1="500" x2="150" y2="580" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
            <line x1="350" y1="500" x2="750" y2="500" stroke="rgba(255,255,255,0.2)" stroke-width="2" />
          </g>
          

          <g class="constellation-stars">
            <circle cx="820" cy="120" r="6" fill="#ff6b35" class="star-main">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.6;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="700" cy="80" r="5" fill="#ffffff" class="star-normal">
              <animate attributeName="r" values="5;6;5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="580" cy="160" r="5" fill="#ffffff" class="star-normal">
              <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="580" cy="280" r="6" fill="#00d4ff" class="star-main">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="320" r="4" fill="#ffffff" class="star-normal">
              <animate attributeName="r" values="4;5;4" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="780" cy="340" r="5" fill="#ffffff" class="star-normal">
              <animate attributeName="r" values="5;6;5" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="350" cy="500" r="4" fill="#ffffff" class="star-normal">
              <animate attributeName="r" values="4;5;4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="750" cy="500" r="6" fill="#00d4ff" class="star-main">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="580" r="6" fill="#ff6b35" class="star-main">
              <animate attributeName="r" values="6;8;6" dur="2s" repeatCount="indefinite" />
            </circle>
          </g>
          
         
          <circle cx="820" cy="120" r="20" fill="rgba(255,107,53,0.15)" class="star-glow" />
          <circle cx="580" cy="280" r="20" fill="rgba(0,212,255,0.15)" class="star-glow" />
          <circle cx="750" cy="500" r="20" fill="rgba(0,212,255,0.15)" class="star-glow" />
          <circle cx="150" cy="580" r="20" fill="rgba(255,107,53,0.15)" class="star-glow" />
          
         
          <g class="nav-stars">
        
            <g class="nav-node" @click="navigate('/')">
              <circle cx="820" cy="120" r="30" fill="transparent" class="nav-hitbox" />
              <text x="820" y="115" text-anchor="middle" class="nav-label">Главная</text>
            </g>
            
         
            <g class="nav-node" @click="navigate('/about')">
              <circle cx="700" cy="80" r="30" fill="transparent" class="nav-hitbox" />
              <text x="700" y="75" text-anchor="middle" class="nav-label">О компании</text>
            </g>
      
            <g class="nav-node" @click="navigate('/projects')">
              <circle cx="580" cy="160" r="30" fill="transparent" class="nav-hitbox" />
              <text x="580" y="155" text-anchor="middle" class="nav-label">Проекты</text>
            </g>
            
        
            <g class="nav-node" @click="navigate('/technologies')">
              <circle cx="580" cy="280" r="30" fill="transparent" class="nav-hitbox" />
              <text x="580" y="275" text-anchor="middle" class="nav-label">Технологии</text>
            </g>
            
           
            <g class="nav-node" @click="navigate('/career')">
              <circle cx="300" cy="320" r="30" fill="transparent" class="nav-hitbox" />
              <text x="300" y="315" text-anchor="middle" class="nav-label">Карьера</text>
            </g>
            
           
            <g class="nav-node" @click="navigate('/products')">
              <circle cx="780" cy="340" r="30" fill="transparent" class="nav-hitbox" />
              <text x="780" y="335" text-anchor="middle" class="nav-label">Продукты и услуги</text>
            </g>
            
           
            <g class="nav-node" @click="navigate('/contacts')">
              <circle cx="350" cy="500" r="30" fill="transparent" class="nav-hitbox" />
              <text x="350" y="495" text-anchor="middle" class="nav-label">Контакты</text>
            </g>
            
          
            <g class="nav-node" @click="navigate('/products')">
              <circle cx="750" cy="500" r="30" fill="transparent" class="nav-hitbox" />
              <text x="750" y="530" text-anchor="middle" class="nav-label">Продукты и услуги</text>
            </g>
           
            <g class="nav-node" @click="navigate('/news')">
              <circle cx="150" cy="580" r="30" fill="transparent" class="nav-hitbox" />
              <text x="150" y="610" text-anchor="middle" class="nav-label">Новости</text>
            </g>
          </g>
        </svg>
        
       
        <button class="close-btn" @click="closeMenu"></button>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isOpen.value = false
  document.body.style.overflow = ''
}

const navigate = (path) => {
  router.push(path)
  closeMenu()
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 16px 40px;
  background: rgba(10, 14, 39, 0.9);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  font-size: 32px;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  background: linear-gradient(135deg, #fff, #ff6b35);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}


.constellation-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  font-family: inherit;
}

.constellation-btn:hover {
  background: rgba(255, 107, 53, 0.2);
  border-color: rgba(255, 107, 53, 0.5);
}

.constellation-btn.active {
  background: rgba(255, 107, 53, 0.3);
  border-color: #ff6b35;
}

.constellation-icon {
  width: 24px;
  height: 24px;
}

.icon-svg {
  width: 100%;
  height: 100%;
}

.btn-text {
  font-size: 14px;
  font-weight: 600;
}


.constellation-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay-bg {
  position: absolute;
  inset: 0;
  background: rgba(5, 8, 20, 0.85);
  backdrop-filter: blur(10px);
}

.constellation-svg {
  position: relative;
  z-index: 1;
  width: 90%;
  max-width: 1000px;
  height: auto;
  max-height: 90vh;
  opacity: 0.9;
  filter: drop-shadow(0 0 40px rgba(0, 100, 255, 0.2));
}


.star-main {
  cursor: pointer;
  transition: all 0.3s;
}

.star-main:hover {
  fill: #ffffff;
}

.star-normal {
  transition: all 0.3s;
}

.star-glow {
  pointer-events: none;
}


.nav-node {
  cursor: pointer;
  transition: all 0.3s;
}

.nav-hitbox {
  transition: all 0.3s;
}

.nav-node:hover .nav-hitbox {
  fill: rgba(255, 107, 53, 0.1);
}

.nav-label {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  fill: rgba(255, 255, 255, 0.8);
  pointer-events: none;
  transition: all 0.3s;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.nav-node:hover .nav-label {
  fill: #ffffff;
  font-size: 18px;
}


.constellation-lines line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 1.5s ease forwards;
}

.constellation-lines line:nth-child(1) { animation-delay: 0.1s; }
.constellation-lines line:nth-child(2) { animation-delay: 0.2s; }
.constellation-lines line:nth-child(3) { animation-delay: 0.3s; }
.constellation-lines line:nth-child(4) { animation-delay: 0.4s; }
.constellation-lines line:nth-child(5) { animation-delay: 0.5s; }
.constellation-lines line:nth-child(6) { animation-delay: 0.6s; }
.constellation-lines line:nth-child(7) { animation-delay: 0.7s; }
.constellation-lines line:nth-child(8) { animation-delay: 0.8s; }
.constellation-lines line:nth-child(9) { animation-delay: 0.9s; }

@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}


.constellation-stars circle {
  opacity: 0;
  animation: starAppear 0.5s ease forwards;
}

.constellation-stars circle:nth-child(1) { animation-delay: 0.2s; }
.constellation-stars circle:nth-child(2) { animation-delay: 0.3s; }
.constellation-stars circle:nth-child(3) { animation-delay: 0.4s; }
.constellation-stars circle:nth-child(4) { animation-delay: 0.5s; }
.constellation-stars circle:nth-child(5) { animation-delay: 0.6s; }
.constellation-stars circle:nth-child(6) { animation-delay: 0.7s; }
.constellation-stars circle:nth-child(7) { animation-delay: 0.8s; }
.constellation-stars circle:nth-child(8) { animation-delay: 0.9s; }
.constellation-stars circle:nth-child(9) { animation-delay: 1s; }

@keyframes starAppear {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.close-btn {
  position: absolute;
  top: 30px;
  right: 40px;
  z-index: 10;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: rgba(255, 107, 53, 0.3);
  border-color: #ff6b35;
  transform: rotate(90deg);
}

.constellation-enter-active {
  animation: fadeInConstellation 0.6s ease;
}

.constellation-leave-active {
  animation: fadeOutConstellation 0.4s ease;
}

@keyframes fadeInConstellation {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeOutConstellation {
  from { opacity: 1; }
  to { opacity: 0; }
}

/* Адаптивность */
@media (max-width: 768px) {
  .header {
    padding: 12px 20px;
  }
  
  .logo-text {
    font-size: 18px;
  }
  
  .constellation-btn {
    padding: 8px 16px;
  }
  
  .btn-text {
    display: none;
  }
  
  .constellation-svg {
    width: 95%;
  }
  
  .nav-label {
    font-size: 12px;
  }
  
  .close-btn {
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
}
</style>