<template>
  <main class="home-page">
    <section id="top" class="hero">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
      >
        <source src="/videos/rocket-hero.mp4" type="video/mp4" />
      </video>

      <div class="hero__overlay"></div>

      <div class="hero__content">
        <h1 class="hero__title">
          <span>Покоряем космос</span>
          <span>вместе</span>
        </h1>

        <p class="hero__subtitle">
          Инновационные решения для запусков и исследований
        </p>

        <a href="#mission" class="hero__button">
          Узнать больше
        </a>
      </div>
    </section>

    <section id="mission" class="home-section mission-section">
      <div class="home-container mission-grid">
        <div class="section-content">
          <p class="section-label">Миссия компании</p>

          <h2 class="section-title">
            Развивать частное ракетостроение и делать космические технологии доступнее
          </h2>

          <p class="section-text">
            Компания создаёт современные решения для коммерческих запусков,
            спутниковых проектов и инженерных исследований. Главная страница
            знакомит посетителя с направлением деятельности компании, её
            технологическим подходом и возможностями для сотрудничества.
          </p>
        </div>

        <article class="mission-card">
          <div class="mission-card__image">
            <img src="/images/rocket.jpg" alt="Инженерная схема ракеты" />
          </div>

          <div class="mission-card__content">
            <h3 class="mission-card__title">
              Инженерный подход
            </h3>

            <p class="mission-card__text">
              Основа проекта — сочетание технологичного дизайна, понятной структуры
              и демонстрации ключевых направлений ракетостроения.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section id="stats" class="home-section home-section--dark">
      <div class="home-container">
        <div class="section-content">
          <p class="section-label">Ключевые показатели</p>

          <h2 class="section-title">
            Достижения в цифрах
          </h2>

          <p class="section-text">
            Показатели отражают основные направления развития компании и помогают
            оценить масштаб её инженерной, исследовательской и технологической деятельности.
          </p>
        </div>

        <div class="stats-grid">
          <article class="stat-card">
            <span class="stat-card__number">12+</span>
            <span class="stat-card__text">проектных направлений</span>
          </article>

          <article class="stat-card">
            <span class="stat-card__number">30+</span>
            <span class="stat-card__text">инженерных решений</span>
          </article>

          <article class="stat-card">
            <span class="stat-card__number">5</span>
            <span class="stat-card__text">технологических блоков</span>
          </article>

          <article class="stat-card">
            <span class="stat-card__number">24/7</span>
            <span class="stat-card__text">мониторинг систем</span>
          </article>
        </div>
      </div>
    </section>

    <section id="directions" class="home-section directions-section">
      <div class="home-container">
        <div class="section-content">
          <p class="section-label">Направления деятельности</p>

          <h2 class="section-title">
            Основные направления разработки
          </h2>

          <p class="section-text">
            Компания работает с ключевыми направлениями частного ракетостроения:
            от проектирования носителей до спутниковых решений и инженерных исследований.
          </p>
        </div>

        <div class="directions-grid">
          <article class="direction-card direction-card--rocket">
            <div class="direction-card__overlay"></div>

            <div class="direction-card__content">
              <h3 class="direction-card__title">
                Ракетные<br> носители
              </h3>

              <p class="direction-card__text">
                Концепты ракетных систем для малых коммерческих запусков.
              </p>
            </div>
          </article>

          <article class="direction-card direction-card--satellite">
            <div class="direction-card__overlay"></div>

            <div class="direction-card__content">
              <h3 class="direction-card__title">
                Спутниковые решения
              </h3>

              <p class="direction-card__text">
                Технологии для вывода и сопровождения малых космических аппаратов.
              </p>
            </div>
          </article>

          <article class="direction-card direction-card--engineering">
            <div class="direction-card__overlay"></div>

            <div class="direction-card__content">
              <h3 class="direction-card__title">
                Инженерные исследования
              </h3>

              <p class="direction-card__text">
                Проектирование, анализ и испытания компонентов для космической отрасли.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section id="partners" class="home-section audience-section">
      <div class="home-container">
        <div class="section-content">
          <p class="section-label">Партнёры и возможности</p>

          <h2 class="section-title">
            Открыты к сотрудничеству
          </h2>

          <p class="section-text">
            Компания развивает космические технологии и сотрудничает с инвесторами,
            отраслевыми партнёрами, исследовательскими командами и будущими специалистами.
          </p>
        </div>

        <div class="audience-grid">
          <article class="audience-card">
            <h3>Инвесторам</h3>
            <p>
              Предлагаем технологичные направления с потенциалом развития
              в сфере частного ракетостроения.
            </p>
          </article>

          <article class="audience-card">
            <h3>Партнёрам</h3>
            <p>
              Открыты к совместным проектам, инженерным разработкам
              и отраслевому сотрудничеству.
            </p>
          </article>

          <article class="audience-card">
            <h3>СМИ</h3>
            <p>
              Предоставляем информацию о проектах, разработках
              и развитии компании.
            </p>
          </article>

          <article class="audience-card">
            <h3>Специалистам</h3>
            <p>
              Создаём среду для инженеров, исследователей
              и студентов технических направлений.
            </p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style src="../styles/home.css"></style>