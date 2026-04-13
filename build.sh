#!/bin/bash

set -e

echo "Building static site..."

rm -rf dist
mkdir -p dist

# copia tudo que precisa publicar
cp -r teologia dist/ 2>/dev/null || true
cp -r public/* dist/ 2>/dev/null || true

# cria index raiz se não existir
if [ ! -f dist/index.html ]; then
cat <<EOF > dist/index.html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0; url=/teologia/" />
</head>
<body>
Redirecting...
</body>
</html>
EOF
fi

echo "Build finished"
