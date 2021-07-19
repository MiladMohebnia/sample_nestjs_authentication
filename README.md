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

## API Documentation

all api documentations and sample is available on swagger. just open `http://localhost:3000/api`
