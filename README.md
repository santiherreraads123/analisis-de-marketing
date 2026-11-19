# Agente de analítica de marketing

Un agente de IA (para Claude Code y Claude) que analiza cuentas de Instagram, Facebook, páginas web y SEO, detecta oportunidades de mejora y crea estrategias de crecimiento según el objetivo de cada marca.

## Qué incluye

| Skill | Para qué sirve |
|---|---|
| [`analitica-marketing`](skills/analitica-marketing/SKILL.md) | Analiza las métricas de redes, web y pauta contra el objetivo de la marca y arma un plan priorizado. Es el punto de partida. |
| [`auditoria-marketing-web`](skills/auditoria-marketing-web/SKILL.md) | Auditoría completa de una web con puntaje 0-100 en contenido, conversión, SEO, competencia, marca y crecimiento. |
| [`auditoria-seo`](skills/auditoria-seo/SKILL.md) | Auditoría SEO técnica, on-page, de contenido y local. |
| [`estrategia-redes-sociales`](skills/estrategia-redes-sociales/SKILL.md) | Define qué redes priorizar y cuáles descartar, el diferencial, la cadencia y las métricas. |

Además:
- [`CLAUDE.md`](CLAUDE.md): las instrucciones del agente y su flujo de trabajo.
- [`plantillas/brief-marca.md`](plantillas/brief-marca.md): ficha de cada marca (objetivo, audiencia, canales, competencia).
- [`plantillas/informe-mensual.md`](plantillas/informe-mensual.md): estructura del informe mensual.
- `marcas/`: una carpeta por marca con su brief e informes.

## Cómo usarlo

**En Claude Code**, clona el repo y abre Claude dentro de la carpeta: el agente lee `CLAUDE.md` automáticamente. Para instalar las skills como plugin:

```
/plugin marketplace add santiherreraads123/analisis-de-marketing
/plugin install agente-analitica-marketing
```

**En claude.ai**, sube cada carpeta de `skills/` como una skill.

Luego pide cosas como:
- "Analiza el Instagram de @marca, su objetivo es conseguir leads."
- "Haz una auditoría de marketing de https://marca.com."
- "Arma la estrategia de redes para una cafetería local que quiere más clientes."

## Datos

El agente funciona mejor con datos reales. Si tienes conectado [Windsor.ai](https://windsor.ai), lee métricas de Instagram, Facebook, Meta Ads, GA4 y Search Console. Si no, trabaja con exportaciones (CSV) o con lo que es público.

## Créditos

Las skills de auditoría y estrategia están adaptadas de proyectos con licencia MIT:
- [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (`auditoria-seo`)
- [zubair-trabzada/ai-marketing-claude](https://github.com/zubair-trabzada/ai-marketing-claude) (`auditoria-marketing-web`)
- [social-media-skills/skills](https://github.com/social-media-skills/skills) (`estrategia-redes-sociales`)
