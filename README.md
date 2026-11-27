# Rafaela Macedo Kitandas

Cardápio responsivo em Astro, com pedidos exclusivamente pelo WhatsApp. A busca e os filtros usam JavaScript nativo. O catálogo completo permanece disponível sem JavaScript.

## Desenvolvimento

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run validate
```

## Conteúdo e publicação

- Edite os nomes, as categorias e os enquadramentos dos produtos em `src/data/menu.ts`. Os nomes foram descritos a partir das fotos fornecidas. Os arquivos originais estão em `src/assets` e a logo está em `public/images`.
- Importe o projeto na Vercel com o preset Astro. O comando padrão gera a saída estática em `dist`.
- Configure `PUBLIC_WHATSAPP_NUMBER` com o número comercial completo, incluindo 55 e DDD. Enquanto a variável estiver vazia, os atalhos têm destino `#`.
- Configure `PUBLIC_INSTAGRAM_URL` com o endereço completo do perfil. Enquanto a variável estiver vazia, o atalho tem destino `#`.
- Configure `SITE_URL` com o endereço público definitivo, incluindo `https://`. Na Vercel, o código usa `VERCEL_PROJECT_PRODUCTION_URL` quando a variável de sistema está disponível e `SITE_URL` está vazia.
- Localmente, copie `.env.example` para `.env` se quiser testar essas configurações. Na Vercel, salve as variáveis no projeto antes de fazer um novo deploy.

O Astro gera `robots.txt`, `sitemap.xml`, `llms.txt` e `cardapio.md`. O HTML também inclui metadados para compartilhamento e dados estruturados do cardápio. Os arquivos textuais reutilizam a lista do site e acompanham suas atualizações.
