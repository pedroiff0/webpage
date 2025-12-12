---
layout: single
title:
  en: "Astropy"
  pt: "Astropy"
date: 2024-01-01
permalink: /resources/astropy/
excerpt:
  en: "Core Python library for astronomy"
  pt: "Biblioteca Python central para astronomia"
author_profile: true
---

<div class="lang-en" markdown="1">

## About Astropy

Astropy is a community-driven Python library containing core functionality and common tools for astronomy.

## Key Features

- **Units & Quantities**: Work with physical units seamlessly
- **Coordinates**: Handle celestial coordinate systems
- **I/O**: Read and write FITS, ASCII, and other formats
- **Time**: Sophisticated time handling
- **Table**: Efficient table data structures

## Getting Started

```python
from astropy import units as u
from astropy.coordinates import SkyCoord

# Create a coordinate
coord = SkyCoord(ra=10.3*u.deg, dec=41*u.deg, frame='icrs')
print(coord)
```

## Useful Resources

- [Official Documentation](https://docs.astropy.org/)
- [Tutorials](https://www.astropy.org/astropy-tutorials/)
- [Community Forum](https://github.com/astropy/astropy/discussions)

## Learning Materials

- Introduction to Astropy (beginner)
- Working with FITS files (intermediate)
- Advanced coordinate transformations (advanced)

</div>

<div class="lang-pt" markdown="1">

## Sobre Astropy

Astropy é uma biblioteca Python comunitária contendo funcionalidades principais e ferramentas comuns para astronomia.

## Características Principais

- **Unidades e Quantidades**: Trabalhe com unidades físicas perfeitamente
- **Coordenadas**: Lide com sistemas de coordenadas celestes
- **I/O**: Leia e escreva FITS, ASCII e outros formatos
- **Tempo**: Sofisticado gerenciamento de tempo
- **Tabela**: Estruturas de dados de tabela eficientes

## Primeiros Passos

```python
from astropy import units as u
from astropy.coordinates import SkyCoord

# Criar uma coordenada
coord = SkyCoord(ra=10.3*u.deg, dec=41*u.deg, frame='icrs')
print(coord)
```

## Recursos Úteis

- [Documentação Oficial](https://docs.astropy.org/)
- [Tutoriais](https://www.astropy.org/astropy-tutorials/)
- [Fórum da Comunidade](https://github.com/astropy/astropy/discussions)

## Materiais de Aprendizado

- Introdução ao Astropy (iniciante)
- Trabalhando com arquivos FITS (intermediário)
- Transformações de coordenadas avançadas (avançado)

</div>
