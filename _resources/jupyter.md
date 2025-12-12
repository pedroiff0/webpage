---
layout: single
title:
  en: "Jupyter Notebooks"
  pt: "Jupyter Notebooks"
date: 2024-01-05
permalink: /resources/jupyter/
excerpt:
  en: "Interactive computing and reproducible research"
  pt: "Computação interativa e pesquisa reprodutível"
author_profile: true
---

<div class="lang-en" markdown="1">

## About Jupyter Notebooks

Jupyter Notebook is an open-source web application that allows you to create and share documents with live code, equations, visualizations, and narrative text.

## Key Features

- **Live Code**: Execute Python, R, Julia, and other languages
- **Interactive**: See results immediately after execution
- **Rich Output**: Display plots, tables, and formatted text
- **Documentation**: Mix code with markdown explanations
- **Shareable**: Export as HTML, PDF, or share via GitHub

## Installation

```bash
# Using pip
pip install jupyter

# Using conda
conda install -c conda-forge jupyter

# Start the server
jupyter notebook
```

## Basic Workflow

1. Create a new notebook
2. Add code cells and markdown cells
3. Execute cells with Shift+Enter
4. See results inline
5. Save and share

## Cell Types

- **Code Cells**: Executable Python code
- **Markdown Cells**: Formatted text, equations (LaTeX)
- **Raw Cells**: Plain text output

## Example: Plotting with Matplotlib

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x)

plt.plot(x, y)
plt.xlabel('X')
plt.ylabel('sin(X)')
plt.show()
```

## Best Practices

- Clear cell outputs before sharing
- Add descriptive markdown between code sections
- Use meaningful variable names
- Document your analysis steps

## Resources

- [Official Documentation](https://jupyter.org/)
- [Try Jupyter Online](https://jupyter.org/try)
- [JupyterLab](https://jupyterlab.readthedocs.io/)

## Advanced Topics

- Widgets for interactive visualization
- Kernel customization
- JupyterHub for shared environments
- Converting notebooks to scripts

</div>

<div class="lang-pt" markdown="1">

## Sobre Jupyter Notebooks

Jupyter Notebook é uma aplicação web de código aberto que permite criar e compartilhar documentos com código ao vivo, equações, visualizações e texto narrativo.

## Características Principais

- **Código ao Vivo**: Execute Python, R, Julia e outras linguagens
- **Interativo**: Veja resultados imediatamente após execução
- **Saída Rica**: Exiba gráficos, tabelas e texto formatado
- **Documentação**: Misture código com explicações em markdown
- **Compartilhável**: Exporte como HTML, PDF ou compartilhe via GitHub

## Instalação

```bash
# Usando pip
pip install jupyter

# Usando conda
conda install -c conda-forge jupyter

# Inicie o servidor
jupyter notebook
```

## Fluxo de Trabalho Básico

1. Crie um novo notebook
2. Adicione células de código e células markdown
3. Execute células com Shift+Enter
4. Veja resultados inline
5. Salve e compartilhe

## Tipos de Célula

- **Células de Código**: Código Python executável
- **Células de Markdown**: Texto formatado, equações (LaTeX)
- **Células Brutas**: Saída de texto simples

## Exemplo: Plotagem com Matplotlib

```python
import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 2*np.pi, 100)
y = np.sin(x)

plt.plot(x, y)
plt.xlabel('X')
plt.ylabel('sen(X)')
plt.show()
```

## Boas Práticas

- Limpe saídas de célula antes de compartilhar
- Adicione markdown descritivo entre seções de código
- Use nomes de variáveis significativos
- Documente suas etapas de análise

## Recursos

- [Documentação Oficial](https://jupyter.org/)
- [Experimente Jupyter Online](https://jupyter.org/try)
- [JupyterLab](https://jupyterlab.readthedocs.io/)

## Tópicos Avançados

- Widgets para visualização interativa
- Customização de kernel
- JupyterHub para ambientes compartilhados
- Conversão de notebooks para scripts

</div>
