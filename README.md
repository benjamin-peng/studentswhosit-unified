# studentswhosit-unified
A unified backend and frontend repository for the Students Who Sit website.

## Getting started with development
This project consists of four containers: a TypeScript React frontend, a Go REST API backend, a PostgreSQL server, and a pgadmin container for testing the DB.

In development, these components are containerized using docker compose. To use this, you'll need to install Docker's desktop client if you haven't already and have it running.

To spin up all containers (frontend, backend, db), type
```
docker compose up -d
```
in the parent directory.

You should now see a top-level container called "studentswhosit-unified" in Docker's GUI. Click on this container and you should see sub-containers for each aspect of the application. Click on each of these sub-containers to see each container's terminal.

Some of these containers are surfaced differently from their internal ports (to avoid conflict with Duke CS projects lol). The list of exposed ports is inside the compose file, compose.yaml, in the main directory. The left-hand side represents the external port and the right hand side the internal. When writing code, reference the right. When viewing on your machine, reference the left.

The React container supports hotloading (make a change and reload your page to see it). The Go API does not, so you'll have to manually rebuild every time you want to test new changes.

## Modifying the database
To connect to the DB container's bash shell, run
```
docker exec -it postgres-db bash
```
From here, to access Postgres's CLI:
```
psql -h localhost -U postgres
```
Finally, type
```
\c studentswhositdb
```
to connect to the project's database. From here, you can execute SQL through the command line.
