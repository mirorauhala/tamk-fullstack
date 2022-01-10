#!/bin/bash

# Run the database migrations on container startup
./node_modules/knex/bin/cli.js migrate:up --env=$ENV

# Run the server
node index.js