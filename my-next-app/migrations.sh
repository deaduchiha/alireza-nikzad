#!/bin/bash

# Prompt the user for a migration name
read -p "Enter migration name: " MIGRATION_NAME

# Set migrations directory
MIGRATIONS_DIR="./migrations" # Adjust if the directory is different in your setup

# Check if there are existing migrations *before* running wrangler
EXISTING_MIGRATIONS=$(find "${MIGRATIONS_DIR}" -maxdepth 1 -name '*.sql' 2>/dev/null)

if [ -n "$EXISTING_MIGRATIONS" ]; then
  PRISMA_FROM="--from-local-d1"
else
  PRISMA_FROM="--from-empty"
fi

# Generate the migration file with wrangler and capture the output
MIGRATION_OUTPUT=$(bunx wrangler d1 migrations create alireza-db "$MIGRATION_NAME")

# Extract the migration file name from the success message
MIGRATION_FILENAME=$(echo "$MIGRATION_OUTPUT" | grep -oE "'[0-9]+_${MIGRATION_NAME}\.sql'" | tr -d "'")

# Extract the migrations directory path
MIGRATIONS_DIR=$(echo "$MIGRATION_OUTPUT" | grep -oE '/.*/migrations/')

# Validate both the filename and the directory
if [ -z "$MIGRATION_FILENAME" ] || [ -z "$MIGRATIONS_DIR" ]; then
  echo "Error: Could not find the migration file path in Wrangler output."
  echo "Wrangler output:"
  echo "$MIGRATION_OUTPUT"
  exit 1
fi

# Combine the directory and filename to get the full path
MIGRATION_FILE="${MIGRATIONS_DIR}${MIGRATION_FILENAME}"

# Generate Prisma migration diff and write to the migration file
bunx prisma migrate diff \
  $PRISMA_FROM \
  --to-schema-datamodel ./prisma/schema.prisma \
  --script \
  > "$MIGRATION_FILE"

echo "Migration '$MIGRATION_NAME' created and updated at $MIGRATION_FILE"


bun run db:migrate