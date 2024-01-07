# Bem-vindo ao projeto Trybetunes

Trybetunes é uma aplicação desenvolvida em React.js que acessa uma API do iTunes e cria um ambiente em que o usuário pode pesquisar músicas, ouvir uma prévia e favoritar suas músicas preferidas.
> 
> - Acesse o [deploy da aplicação aqui](https://dsbellinitrybetunes.surge.sh)
<details>
<summary>Informações para utilizar a aplicação no deploy</summary><br>
 
 - Para logar, o nome de usuário deve ter, no mínimo, `3 caracteres`.
 
</details>

## Sumário
- [Bem-vindo ao projeto Trybetunes](#bem-vindo-ao-projeto-trybetunes)
- [Visualização](#visualização)
- [Sumário](#sumário)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Notas](#notas)
 - [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
 - [Lint](#lint)

## Contexto
O __aplicativo Trybetunes__ permite que o usuário:
 - Pesquise músicas pelo nome do artista e receba informações sobre os álbuns disponíveis.
 - Ouça uma prévia da música.

*A pasta de serviços foi fornecida pela Trybe para que a solicitação à API pudesse ser executada*.

## Tecnologias e Ferramentas Utilizadas
Este projeto utilizou as seguintes tecnologias e ferramentas:
  - [React.js com classes](https://reactjs.org/docs/getting-started.html) | Biblioteca para criar interfaces de usuário.
  - [API do iTunes](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html#//apple_ref/doc/uid/TP40017632-CH3-SW1) | API utilizada para obter informações sobre os artistas e suas músicas.

  O React.js foi escolhido porque é uma das bibliotecas mais populares e amplamente utilizadas para criar interfaces de usuário. Além disso, ele oferece suporte a programação orientada a objetos, o que é importante para o desenvolvimento de projetos maiores. A API do iTunes foi utilizada para obter informações sobre os artistas e suas músicas, e fornece informações precisas e detalhadas.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:dsbellini/trybe-trybetunes.git
```
### Instalar dependências
```
npm install
```
### Rodar a aplicação
```
npm start
```

## Notas

### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).