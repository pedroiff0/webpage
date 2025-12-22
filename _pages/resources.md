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
        <h3><span class="lang-en">Numerical Calculus</span><span class="lang-pt">Cálculo Numérico</span></h3>
        <p><span class="lang-en">Repository</span><span class="lang-pt">Repositório</span></p>
      </div>
    </a>
  </li>
</ul>