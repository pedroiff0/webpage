---
layout: archive
title:
  en: "Research"
  pt: "Pesquisa"
permalink: /research/
author_profile: true
---

{% include base_path %}

<style>
.research-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.research-list li {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--global-border-color, #e0e0e0);
}

.research-list li:last-child {
  border-bottom: none;
}

.research-link {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  text-decoration: none !important;
  color: inherit;
  width: 100%;
  transition: opacity 0.2s;
  border: none;
}

.research-link:hover,
.research-link:visited,
.research-link:active {
  text-decoration: none !important;
}

.research-link:hover {
  opacity: 0.8;
}

.research-icon {
  font-size: 2.5rem;
  min-width: 60px;
  text-align: center;
  line-height: 1;
  flex-shrink: 0;
}

.research-content h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--global-text-color, #000);
}

.research-content p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--global-text-color-light, #666);
}
</style>

<ul class="research-list">
  <li>
    <a href="{{ site.baseurl }}/research/anomaly-detection/" class="research-link">
      <div class="research-icon">🔍</div>
      <div class="research-content">
        <h3><span class="lang-en">Anomaly Detection in Gaia Data</span><span class="lang-pt">Detecção de Anomalias em Dados do Gaia</span></h3>
        <p><span class="lang-en">Building a machine learning pipeline to spot rare stellar objects across Gaia and complementary surveys.</span><span class="lang-pt">Construindo um pipeline de aprendizado de máquina para encontrar objetos estelares raros no Gaia e em levantamentos complementares.</span></p>
      </div>
    </a>
  </li>
</ul>