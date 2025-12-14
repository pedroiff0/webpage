---
layout: archive
title:
  en: "Resources"
  pt: "Recursos"
permalink: /resources/
author_profile: true
---

{% include base_path %}

<div class="lang-en" markdown="1">

## Favorite Tools and References

</div>

<div class="lang-pt" markdown="1">

## Ferramentas e Referências

</div>

<style>
.resources-list {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.resources-list li {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--global-border-color, #e0e0e0);
}

.resources-list li:last-child {
  border-bottom: none;
}

.resource-link {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  text-decoration: none !important;
  color: inherit;
  width: 100%;
  transition: opacity 0.2s;
  border: none;
}

.resource-link:hover,
.resource-link:visited,
.resource-link:active {
  text-decoration: none !important;
}

.resource-link:hover {
  opacity: 0.8;
}

.resource-icon {
  font-size: 2.5rem;
  min-width: 60px;
  text-align: center;
  line-height: 1;
  flex-shrink: 0;
}

.resource-content h3 {
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--global-text-color, #000);
}

.resource-content p {
  margin: 0;
  font-size: 0.95rem;
  color: var(--global-text-color-light, #666);
}
</style>

<ul class="resources-list">
  <li>
    <a href="{{ site.baseurl }}/resources/astropy/" class="resource-link">
      <div class="resource-icon">📚</div>
      <div class="resource-content">
        <h3><span class="lang-en">Astropy</span><span class="lang-pt">Astropy</span></h3>
        <p><span class="lang-en">Core Python library for astronomy with I/O, units, and coordinates</span><span class="lang-pt">Biblioteca Python central para astronomia com I/O, unidades e coordenadas</span></p>
      </div>
    </a>
  </li>
  <li>
    <a href="{{ site.baseurl }}/resources/ds9/" class="resource-link">
      <div class="resource-icon">🔭</div>
      <div class="resource-content">
        <h3><span class="lang-en">DS9 - FITS Viewer</span><span class="lang-pt">DS9 - Visualizador FITS</span></h3>
        <p><span class="lang-en">Powerful FITS image visualization tool</span><span class="lang-pt">Ferramenta poderosa de visualização de imagens FITS</span></p>
      </div>
    </a>
  </li>
  <li>
    <a href="{{ site.baseurl }}/resources/topcat/" class="resource-link">
      <div class="resource-icon">📊</div>
      <div class="resource-content">
        <h3><span class="lang-en">TOPCAT</span><span class="lang-pt">TOPCAT</span></h3>
        <p><span class="lang-en">Interactive catalog viewer and cross-matcher</span><span class="lang-pt">Visualizador de catálogos interativo e cross-matcher</span></p>
      </div>
    </a>
  </li>
  <li>
    <a href="{{ site.baseurl }}/resources/aladin/" class="resource-link">
      <div class="resource-icon">🌐</div>
      <div class="resource-content">
        <h3><span class="lang-en">Aladin Lite</span><span class="lang-pt">Aladin Lite</span></h3>
        <p><span class="lang-en">Browser-based interactive sky visualization</span><span class="lang-pt">Visualização interativa do céu baseada no navegador</span></p>
      </div>
    </a>
  </li>
  <li>
    <a href="{{ site.baseurl }}/resources/jupyter/" class="resource-link">
      <div class="resource-icon">💻</div>
      <div class="resource-content">
        <h3><span class="lang-en">Jupyter Notebooks</span><span class="lang-pt">Jupyter Notebooks</span></h3>
        <p><span class="lang-en">Interactive computing and reproducible research</span><span class="lang-pt">Computação interativa e pesquisa reprodutível</span></p>
      </div>
    </a>
  </li>
</ul>
