#! /bin/bash

if [ "$1" = "migrate" ]
then
    docker exec -it docker-node-mysql /bin/bash  -c 'cd database; pwd; ls;npx sequelize-cli db:migrate'
    echo "Migrated  Successfully !"

fi

if [ "$1" = "rollback" ]
then
    docker exec -it docker-node-mysql /bin/bash  -c 'cd database; pwd; ls;npx sequelize-cli db:migrate:undo:all'
    echo "Rollback  Successfully !"

fi