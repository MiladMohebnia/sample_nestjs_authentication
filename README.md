# Simple docker-based authentication nestjs project

## Run

to run project first you need docker and docker-compose installed on your system.

open terminal and change directory to this project address

```bash
cd (current project address)
```

### Run development environment

```bash
docker-compose up -f docker-compose.dev.yml up -d --build
```

### Run product environment

```bash
docker-compose up -d --build
```

## Setup database structure

you can both use `typeorm` cli to install migration

if you don't have typeorm installed globaly then just run the command bellow

```bash
docker-compose exec -T  mariadb mysql -h localhost -u root -proot raha < database.sql
```

## setup environments

there's a `.env.sample` file that contains necessary and secure data. you have to make a `.env` file with the same structure in production and development.
for development setup just

```bash
mv .env.sample .env
```

## API Documentation

all api documentations and sample is available on swagger. just open `http://localhost:3000/api`

## Run tests

to run test use the command below while the docker is up and running

```bash
docker-compose exec nest npm run test
```
