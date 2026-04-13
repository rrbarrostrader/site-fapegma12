#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
DIST_DIR="$ROOT_DIR/dist"

rm -rf "$DIST_DIR"
mkdir -p "$DIST_DIR"

# Prefer the already prepared static folder inside public/teologia.
if [ -d "$ROOT_DIR/public/teologia" ]; then
  cp -R "$ROOT_DIR/public/teologia" "$DIST_DIR/teologia"
elif [ -d "$ROOT_DIR/teologia" ]; then
  cp -R "$ROOT_DIR/teologia" "$DIST_DIR/teologia"
else
  echo "Erro: não encontrei a pasta teologia nem em public/teologia nem em teologia/." >&2
  exit 1
fi

# Also copy any other public assets that may be useful.
if [ -d "$ROOT_DIR/public" ]; then
  find "$ROOT_DIR/public" -mindepth 1 -maxdepth 1 ! -name teologia -exec cp -R {} "$DIST_DIR/" \;
fi

# Root page redirects to the static theology landing page.
cat > "$DIST_DIR/index.html" <<'HTML'
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/teologia/" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redirecionando...</title>
    <script>window.location.replace('/teologia/');</script>
  </head>
  <body>
    <p>Redirecionando para <a href="/teologia/">/teologia/</a>...</p>
  </body>
</html>
HTML

# Help Vercel resolve /teologia to /teologia/index.html.
cat > "$DIST_DIR/404.html" <<'HTML'
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=/teologia/" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Página não encontrada</title>
    <script>window.location.replace('/teologia/');</script>
  </head>
  <body>
    <p>Página não encontrada. Ir para <a href="/teologia/">/teologia/</a>.</p>
  </body>
</html>
HTML

echo "Build concluído com sucesso em $DIST_DIR"
