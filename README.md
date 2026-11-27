# Rafaela Macedo Kitandas

Cardápio responsivo em Astro, com pedidos exclusivamente pelo WhatsApp. A busca e os filtros usam JavaScript nativo. O catálogo completo permanece disponível sem JavaScript.

## Desenvolvimento

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run validate
```

## Teste no GitHub Pages

Em **Settings → Pages → Build and deployment → Source**, selecione **GitHub Actions**. A publicação será executada quando os arquivos forem enviados à branch `main`. Também é possível iniciar o workflow **GitHub Pages** pela aba **Actions**.

O workflow usa o endereço informado pelo GitHub Pages para configurar o caminho do site e publica o conteúdo da pasta `dist`. O endereço publicado aparece no resultado da etapa de deploy.

## Conteúdo e publicação

- Edite os nomes, as categorias, os enquadramentos e as perguntas de WhatsApp dos produtos em `src/data/menu.ts`. Os nomes foram descritos a partir das fotos fornecidas. Os arquivos originais estão em `src/assets` e a logo está em `public/images`.
- Importe o projeto na Vercel com o preset Astro. O comando padrão gera a saída estática em `dist`.
- O WhatsApp padrão é `+55 64 99923-5242`. Para usar outro número, configure `PUBLIC_WHATSAPP_NUMBER` com 55, DDD e número.
- O atalho do Instagram abre o perfil `@rafaelamacedo21`. Para usar outro perfil, configure `PUBLIC_INSTAGRAM_URL` com o endereço completo.
- Configure `SITE_URL` com o endereço público definitivo, incluindo `https://`. Na Vercel, o código usa `VERCEL_PROJECT_PRODUCTION_URL` quando a variável de sistema está disponível e `SITE_URL` está vazia.
- Localmente, copie `.env.example` para `.env` se quiser testar essas configurações. Na Vercel, salve as variáveis no projeto antes de fazer um novo deploy.

O Astro gera `robots.txt`, `sitemap.xml`, `llms.txt` e `cardapio.md`. O HTML também inclui metadados para compartilhamento e dados estruturados do cardápio. Os arquivos textuais reutilizam a lista do site e acompanham suas atualizações.
