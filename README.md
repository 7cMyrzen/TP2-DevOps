# Orchestration d'une Stack Hybride F1

<img alt="Docker" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/> <img alt="Python" src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/> <img alt="FastAPI" src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"/> <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>

## Overview
Ce projet met en œuvre une architecture multi-services conteneurisée avec Docker Compose. Il s'agit d'une stack hybride pilotant simultanément une base de données SQL (MySQL) et une base de données NoSQL (MongoDB), liées par une API développée en FastAPI.

L'application expose des données relatives à la saison 2026 de Formule 1, incluant les profils des pilotes et des actualités techniques sur les nouvelles réglementations.

## Architecture
L'infrastructure est composée de cinq services distincts :

1.  **db_mongo** : Base de données NoSQL utilisant une image personnalisée non-root. Elle stocke les articles et actualités.
2.  **db_mysql** : Base de données SQL officielle stockant les profils et biographies des pilotes.
3.  **admin_mongo** : Interface web Mongo Express pour la gestion de la base NoSQL.
4.  **admin_mysql** : Interface web Adminer (version 4.8.1) pour la gestion de la base SQL.
5.  **api** : Application FastAPI (Python) servant de passerelle entre les deux bases de données.

## Caractéristiques Techniques
*   **Résilience** : Politique de redémarrage `on-failure` sur tous les services.
*   **Orchestration** : Gestion stricte des dépendances via des healthchecks. L'API ne démarre que lorsque les deux bases de données sont opérationnelles et peuplées.
*   **Sécurité** : 
    *   Isolation réseau : Les bases de données ne sont pas exposées sur l'hôte.
    *   Utilisateurs non-root pour les services MongoDB et API.
    *   Gestion des secrets via variables d'environnement (`.env`).
*   **Healthchecks Métiers** : Validation de l'intégrité des données au démarrage (vérification du nombre d'entrées attendues dans les collections et tables).

## Installation et Lancement

### Prérequis
*   Docker et Docker Compose installés sur la machine.
*   Un fichier `.env` configuré (se référer au fichier `.env.example`).

### Déploiement
Pour initialiser et lancer l'ensemble de la stack :
```bash
docker compose up -d --build
```

Pour réinitialiser complètement les volumes et les données :
```bash
docker compose down -v && docker compose up -d
```

## Points d'accès

### API FastAPI
*   **Articles F1 (MongoDB)** : [http://localhost:8000/posts](http://localhost:8000/posts)
*   **Pilotes F1 (MySQL)** : [http://localhost:8000/users](http://localhost:8000/users)
*   **Swagger UI** : [http://localhost:8000/docs](http://localhost:8000/docs)

### Administration
*   **Adminer** : [http://localhost:8080](http://localhost:8080) (Serveur : `db_mysql`)
*   **Mongo Express** : [http://localhost:8081](http://localhost:8081)

## Structure du Projet
*   `/api` : Code source, Dockerfile et configurations de l'API.
*   `/mongo` : Dockerfile non-root et scripts d'initialisation NoSQL.
*   `/sqlfiles` : Scripts SQL pour l'initialisation de la base de données pilotes.
*   `docker-compose.yml` : Fichier principal d'orchestration.
