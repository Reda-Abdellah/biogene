FROM python:3.9-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier tous les fichiers du site
COPY . .

# Exposer le port 8000
EXPOSE 8000

# Lancer le serveur HTTP Python
CMD ["python", "-m", "http.server", "8000"]