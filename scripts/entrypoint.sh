#!/bin/bash
set -e

echo "Starting entrypoint for scope: ${SCOPE}"

# If scope is builder, run Prisma migrate
if [ "$SCOPE" = "builder" ]; then
  echo "Configuring runtime environment for Next.js..."
  cd apps/builder
  node -e "const { configureRuntimeEnv } = require('next-runtime-env/build/configure'); configureRuntimeEnv();"
  cd ../..

  export DATABASE_URL=${DATABASE_URL}

  echo "Running Prisma migrate for builder..."
  ./node_modules/.bin/prisma migrate deploy --schema=packages/prisma/schema.prisma
fi

# Determine which app to start
case "$SCOPE" in
  builder)
    APP_PATH="apps/builder/server.js"
    ;;
  viewer)
    APP_PATH="apps/viewer/server.js"
    ;;
  *)
    echo "Unknown SCOPE: $SCOPE"
    exit 1
    ;;
esac

echo "Starting Node app at $APP_PATH..."
NODE_OPTIONS=--no-node-snapshot HOSTNAME=${HOSTNAME:-0.0.0.0} PORT=${PORT:-3000} node "$APP_PATH"
