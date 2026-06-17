<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
const activeDropdown = ref(null)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  activeDropdown.value = null
}

const toggleDropdown = (name) => {
  activeDropdown.value = activeDropdown.value === name ? null : name
}

const closeMenu = () => {
  isMenuOpen.value = false
  activeDropdown.value = null
}
</script>

<template>
  <header class="site-header">
    <div class="site-header__container">
      <a href="#top" class="site-header__logo" @click="closeMenu">
        <img
          class="site-header__logo-image"
          src="/images/logo.png"
          alt="Oblivione Space"
        />

        <span class="site-header__logo-text">
          Oblivione Space
        </span>
      </a>

      <button
        class="site-header__burger"
        type="button"
        aria-label="Открыть меню"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        class="site-header__nav"
        :class="{ 'site-header__nav--open': isMenuOpen }"
      >
        <div class="site-header__item">
          <div class="site-header__row">
            <a href="#top" class="site-header__link" @click="closeMenu">
              Главная
            </a>

            <button
              class="site-header__submenu-button"
              type="button"
              aria-label="Открыть разделы главной"
              @click="toggleDropdown('home')"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div
            class="site-header__dropdown"
            :class="{ 'site-header__dropdown--open': activeDropdown === 'home' }"
          >
            <a href="#mission" @click="closeMenu">Миссия</a>
            <a href="#stats" @click="closeMenu">Показатели</a>
            <a href="#directions" @click="closeMenu">Направления</a>
            <a href="#partners" @click="closeMenu">Партнёры</a>
          </div>
        </div>

        <div class="site-header__item">
          <div class="site-header__row">
            <a href="#" class="site-header__link" @click.prevent="closeMenu">
              О компании
            </a>

            <button
              class="site-header__submenu-button"
              type="button"
              aria-label="Открыть подразделы о компании"
              @click="toggleDropdown('about')"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div
            class="site-header__dropdown"
            :class="{ 'site-header__dropdown--open': activeDropdown === 'about' }"
          >
            <a href="#" @click.prevent="closeMenu">История</a>
            <a href="#" @click.prevent="closeMenu">Команда</a>
            <a href="#" @click.prevent="closeMenu">Сертификаты</a>
          </div>
        </div>

        <div class="site-header__item">
          <div class="site-header__row">
            <a href="#" class="site-header__link" @click.prevent="closeMenu">
              Продукты
            </a>

            <button
              class="site-header__submenu-button"
              type="button"
              aria-label="Открыть подразделы продуктов"
              @click="toggleDropdown('products')"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div
            class="site-header__dropdown"
            :class="{ 'site-header__dropdown--open': activeDropdown === 'products' }"
          >
            <a href="#" @click.prevent="closeMenu">Ракетные носители</a>
            <a href="#" @click.prevent="closeMenu">Компоненты</a>
            <a href="#" @click.prevent="closeMenu">Запуски</a>
          </div>
        </div>

        <div class="site-header__item">
          <div class="site-header__row">


            <a href="#projects" class="site-header__link" @click="closeMenu">
 
              Проекты
            </a>

            <button
              class="site-header__submenu-button"
              type="button"
              aria-label="Открыть подразделы проектов"
              @click="toggleDropdown('projects')"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div
            class="site-header__dropdown"
            :class="{ 'site-header__dropdown--open': activeDropdown === 'projects' }"
          >
            <a href="#" @click.prevent="closeMenu">Реализованные</a>
            <a href="#" @click.prevent="closeMenu">Текущие</a>
            <a href="#" @click.prevent="closeMenu">Будущие</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: fixed;
  z-index: 50;
  top: 18px;
  left: 0;
  width: 100%;
  pointer-events: none;
}

.site-header__container {
  width: min(1180px, calc(100% - 40px));
  min-height: 66px;
  margin: 0 auto;
  padding: 9px 14px 9px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(132, 179, 255, 0.24);
  border-radius: 999px;
  background: rgba(5, 8, 20, 0.74);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 54px rgba(0, 0, 0, 0.28);
  pointer-events: auto;
}

.site-header__logo {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: #ffffff;
  text-decoration: none;
}

.site-header__logo-image {
  width: auto;
  height: 40px;
  display: block;
  object-fit: contain;
}

.site-header__logo-text {
  font-family: "Montserrat", Arial, sans-serif;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  white-space: nowrap;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: 8px;
}

.site-header__item {
  position: relative;
}

.site-header__row {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px;
  border-radius: 999px;
  transition: background 0.25s ease;
}

.site-header__row:hover {
  background: rgba(255, 255, 255, 0.08);
}

.site-header__link {
  display: inline-flex;
  align-items: center;
  padding: 10px 10px 10px 14px;
  border-radius: 999px;
  color: #b8c7df;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.25s ease;
}

.site-header__row:hover .site-header__link,
.site-header__link:hover {
  color: #ffffff;
}

.site-header__submenu-button {
  width: 32px;
  height: 32px;
  padding: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  border: 1px solid rgba(132, 179, 255, 0.2);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.site-header__submenu-button:hover {
  border-color: rgba(255, 159, 67, 0.5);
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.site-header__submenu-button span {
  width: 12px;
  height: 1.5px;
  display: block;
  border-radius: 999px;
  background: #ffffff;
}
.site-header__dropdown {
  position: absolute;
  top: calc(100% + 18px);
  left: 0;
  min-width: 220px;
  padding: 10px;
  display: none;
  flex-direction: column;
  gap: 4px;
  border: 1px solid rgba(132, 179, 255, 0.22);
  border-radius: 18px;
  background: rgba(5, 8, 20, 0.96);
  backdrop-filter: blur(18px);
  box-shadow: 0 18px 54px rgba(0, 0, 0, 0.35);
}

.site-header__dropdown--open {
  display: flex;
}

.site-header__dropdown a {
  padding: 11px 12px;
  border-radius: 12px;
  color: #b8c7df;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition:
    color 0.25s ease,
    background 0.25s ease;
}

.site-header__dropdown a:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

.site-header__burger {
  display: none;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(132, 179, 255, 0.28);
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  cursor: pointer;
}

.site-header__burger span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  border-radius: 999px;
  background: #ffffff;
}

@media (max-width: 980px) {
  .site-header__link {
    font-size: 13px;
  }

  .site-header__logo-text {
    font-size: 12px;
  }
}

@media (max-width: 860px) {
  .site-header {
    top: 12px;
  }

  .site-header__container {
    border-radius: 28px;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .site-header__logo-image {
    height: 38px;
  }

  .site-header__burger {
    display: block;
  }

  .site-header__nav {
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding-top: 12px;
  }

  .site-header__nav--open {
    display: flex;
  }

  .site-header__item {
    width: 100%;
  }

  .site-header__row {
    width: 100%;
    justify-content: space-between;
    padding: 4px;
    background: rgba(255, 255, 255, 0.04);
  }

  .site-header__link {
    flex: 1;
    padding: 13px 14px;
  }

  .site-header__submenu-button {
    width: 42px;
    height: 42px;
  }

  .site-header__dropdown {
    position: static;
    min-width: 0;
    margin-top: 6px;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.04);
  }
}

@media (max-width: 480px) {
  .site-header__logo-image {
    height: 34px;
  }

  .site-header__logo-text {
    font-size: 11px;
    letter-spacing: 0.08em;
  }
}
</style>