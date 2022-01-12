#!/bin/bash

# Run the database migrations on container startup
./node_modules/knex/bin/cli.js migrate:latest --env=$ENV

# Run the server
node index.js