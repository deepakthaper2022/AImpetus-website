# AImpetus website

Holding page and three beta designs for aimpetus.ai, built with Claude Code in VS Code (Codex as reviewer).

- `holding/` → aimpetus.ai (public)
- `beta1/`, `beta2/`, `beta3/` → aimpetus.ai/beta1/ etc. (not indexed, for the founders to compare)

## Folder
| Path | Contents |
|---|---|
| `CLAUDE.md` / `AGENTS.md` | Standing instructions the agents read automatically (identical). |
| `PROMPT.md` | Prompts to paste, in order, plus a review prompt. |
| `TODO.md` | Placeholders and checks before go-live. |
| `brief/` | Website copy and developer brief, legal page copy (PDF authoritative, TXT for search), brand rules. |
| `assets/logo` | Primary, reversed and mono logos (SVG + PNG). |
| `assets/icons` | Mark, favicon.ico, apple-touch icon, 16–512 px PNGs. |
| `assets/social` | LinkedIn profile image and banner (also used as the Open Graph image). |
| `holding/` | Holding page (plain HTML/CSS). Copy in `brief/holding-page.md`. |
| `beta1/`–`beta3/` | Created by the agent, one at a time. |

## How to start
1. Open this `Website` folder in VS Code.
2. Start Claude Code (or Codex) in the integrated terminal from this folder.
3. Paste Prompt 0 from `PROMPT.md`, then the holding page (Prompt 1) and each beta in turn (Prompts 2–4).
4. Commit after each prompt so you can roll back.

## Updating copy
Edit the Website Content doc first, export a fresh PDF into `brief/`, then ask the agent to sync the changed page. Keep the doc as the single source of truth.
