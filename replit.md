# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Encuentro Financiero (`artifacts/encuentro-financiero`)
- **Type**: React + Vite web app
- **Preview path**: `/`
- **Language**: Spanish (all UI content)
- **Description**: Premium consulting website for the Latino financial/business consulting firm "Encuentro Financiero"
- **Pages**:
  - `/` — Home page with hero, value prop, services overview, testimonials
  - `/servicios-personas` — Personal consulting services + multi-step pre-consultation questionnaire
  - `/servicios-empresas` — Business consulting services + multi-step pre-consultation questionnaire
  - `/nosotros` — About us, mission, vision, team
  - `/casos-exito` — Success stories / testimonials
  - `/blog` — Blog/resources
  - `/libros` — Book recommendations
- **Design**: Deep navy (#0F172A) + rich gold palette, Playfair Display typography, premium wealth management aesthetic
- **Features**: Multi-step wizard questionnaires, WhatsApp integration, framer-motion animations, pricing tables

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
