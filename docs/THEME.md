# Tema visual — A&C Engenharia

Para alterar cores, gradientes e raios de borda, edite **apenas** [`src/styles/theme.css`](../src/styles/theme.css).

## Variáveis principais

| Variável | Uso |
|----------|-----|
| `--surface-dark` | Hero, footer, seções escuras |
| `--surface-light` | Fundo geral da página |
| `--accent-primary` | Destaques elétricos, links ativos |
| `--accent-secondary` | Energia / CTAs secundários |
| `--accent-brand` | Texto/botões em fundos **claros** (azul marinho) |
| `--accent-on-dark` | Destaques em fundos **escuros** (branco) |
| `--gradient-hero` | Overlay do hero |
| `--gradient-cta` | Botões primários |

Os componentes usam classes Tailwind semânticas (`bg-surface-dark`, `text-accent-primary`). Não é necessário alterar arquivos `.tsx` para uma troca de paleta.

## Tema alternativo (opcional)

Duplique o bloco `:root` em `[data-theme="alt"]` no mesmo arquivo e aplique `data-theme="alt"` no `<html>`.
