# Assets — logos e imagens

## Branding (`public/branding/`)

| Arquivo | Onde aparece | Sugestão |
|---------|--------------|----------|
| `logo-header.png` | Header / footer (fundos escuros) | Amarelo + **branco** (azul substituído) |
| `logo-header-dark.png` | Fundos claros (opcional) | Amarelo + azul marinho (arte original) |
| `logo-footer.png` | Footer | Igual à `logo-header.png` |
| `logo-icon.png` | Favicon | 512×512 PNG, recorte do emblema |
| `partners/*.png` | Faixa no footer | Logos de fabricantes, altura ~32px |

Paths configuráveis em [`src/config/branding.ts`](../src/config/branding.ts).

## Imagens (`public/images/`)

| Pasta | Uso |
|-------|-----|
| `hero/` | Slides do carrossel do hero |
| `gallery/` | Galeria e carrossel mobile |
| `services/{pilar}/` | Carrossel ao lado de cada serviço |
| `og/og-image.jpg` | Open Graph (1200×630 recomendado) |

Listas de slides em [`src/content/media.ts`](../src/content/media.ts). Para nova foto: coloque o arquivo na pasta e adicione um item em `media.ts`.
