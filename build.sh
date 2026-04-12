#!/bin/bash
set -e

# 1. Salvar teologia
if [ -d "público/teologia" ]; then
  cp -r público/teologia /tmp/teologia-save
fi

# 2. Build normal do Vite (aponta para público mas teologia não está lá)
npx vite build --outDir=dist-temp

# 3. Copiar resultado do build para público
cp -r dist-temp/* público/ 2>/dev/null || true

# 4. Restaurar teologia
if [ -d "/tmp/teologia-save" ]; then
  cp -r /tmp/teologia-save público/teologia
fi

echo "Build completo!"
