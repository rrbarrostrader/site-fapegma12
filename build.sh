#!/bin/bash
set -e

echo "Building static site..."

rm -rf dist
mkdir -p dist

# Copia teologia da pasta atual, se existir
if [ -d "teologia" ]; then
  cp -r teologia dist/
fi

# Copia teologia da pasta public, se existir
if [ -d "public/teologia" ]; then
  mkdir -p dist/teologia
  cp -r public/teologia/* dist/teologia/
fi

# Se a Vercel estiver usando uma subpasta como raiz, tenta subir um nível
if [ ! -d "dist/teologia" ] && [ -d "../teologia" ]; then
  cp -r ../teologia dist/
fi

if [ ! -d "dist/teologia" ] && [ -d "../public/teologia" ]; then
  mkdir -p dist/teologia
  cp -r ../public/teologia/* dist/teologia/
fi

# Copia arquivos públicos gerais
if [ -d "public" ]; then
  cp -r public/* dist/ 2>/dev/null || true
fi

if [ -d "../public" ]; then
  cp -r ../public/* dist/ 2>/dev/null || true
fi

# Garante index raiz
cat <<EOF > dist/index.html
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="refresh" content="0; url=/teologia/" />
</head>
<body>
  Redirecionando...
</body>
</html>
EOF

# Validação real
if [ ! -f "dist/teologia/index.html" ]; then
  echo "ERRO: dist/teologia/index.html não foi gerado."
  echo "Verifique a Root Directory da Vercel e a localização da pasta teologia."
  exit 1
fi

echo "Build finished successfully"
find dist -maxdepth 3 -type f | sort
