# 🎮 Final Fantasy Menu UI
 
Recriação do menu clássico do Final Fantasy VII utilizando tecnologias modernas de desenvolvimento web.
 
## 💡 Sobre o Projeto
 
Este projeto tem como objetivo colocar em prática conhecimentos de desenvolvimento full-stack, recriando a interface icônica do menu do Final Fantasy VII. O projeto abrange desde o front-end até a construção de uma API própria com banco de dados.
 
## 🚀 Tecnologias
 
### Front-end
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
### Back-end *(em construção)*
- API REST própria
- Banco de dados com personagens, itens e demais dados do jogo
## 🗂️ Estrutura do Projeto
 
```
app/
├── components/
│   └── character/     # Componente de personagem (foto, stats, HP/MP)
├── globals.css        # Estilos globais + Tailwind
├── layout.tsx         # Layout raiz
└── page.tsx           # Página principal
public/
└── assets/            # Imagens dos personagens
```
 
## ⚙️ Como rodar localmente
 
```bash
# Clone o repositório
git clone https://github.com/seu-usuario/final-fantasy
 
# Instale as dependências
npm install
 
# Rode o servidor de desenvolvimento
npm run dev
```
 
Acesse [http://localhost:3000](http://localhost:3000) no browser.
 
## 🛣️ Roadmap
 
- [x] Layout base com gradiente azul
- [x] Componente de personagem com HP/MP/LV
- [x] Barras de Next Level e Limit Level
- [ ] Menu lateral sobreposto
- [ ] API REST para personagens
- [ ] Banco de dados com itens e personagens
- [ ] Animações de transição de menu
## 📌 Motivação
 
Projeto pessoal para praticar e consolidar conhecimentos de front-end com React e TypeScript, além de aprender na prática a construção de APIs e modelagem de banco de dados no back-end.
