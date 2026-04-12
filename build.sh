#!/bin/bash
set -e

# 1. Salvar teologia
if [ -d "public/teologia" ]; then
  cp -r public/teologia /tmp/teologia-save
  fi

  # 2. Build normal do Vite
  npx vite build --outDir=dist-temp

  # 3. Copiar resultado do build para public
  cp -r dist-temp/* public/ 2>/dev/null || true

  # 4. Restaurar teologia
  if [ -d "/tmp/teologia-save" ]; then
    cp -r /tmp/teologia-save public/teologia
    fi

    echo "Build completo!"
