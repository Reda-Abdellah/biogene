# Site Web Laboratoire Biogene

Site web statique pour le laboratoire d'analyses médicales Biogene situé à Oran, Algérie.

## 🏥 À propos

Biogene est un laboratoire d'analyses médicales moderne offrant une gamme complète de services depuis 2008. Notre site web présente nos services, permet la prise de contact et l'accès aux résultats d'analyses.

## 🚀 Déploiement sur GitHub Pages

### Prérequis
- Un compte GitHub
- Git installé sur votre ordinateur

### Instructions de déploiement

#### 1. Créer un nouveau repository
Créer un nouveau repository sur GitHub nommé "biogene-lab"
Ou utiliser le nom de votre choix

#### 2. Cloner et configurer le projet
Cloner le repository

git clone https://github.com/VOTRE-USERNAME/biogene-lab.git
cd biogene-lab
Copier tous les fichiers du site dans le dossier
Assurez-vous d'avoir la structure suivante :
├── index.html
├── services.html
├── contact.html
├── resultats.html
├── css/
│ └── style.css
├── js/
│ └── script.js
└── README.md


#### 3. Pousser les fichiers vers GitHub
Ajouter tous les fichiers

git add .
Créer un commit

git commit -m "Initial commit - Site web Laboratoire Biogene"
Pousser vers GitHub

git push origin main


#### 4. Activer GitHub Pages
1. Aller sur votre repository GitHub
2. Cliquer sur **Settings** (Paramètres)
3. Faire défiler jusqu'à la section **Pages**
4. Dans **Source**, sélectionner **Deploy from a branch**
5. Choisir **main** comme branche
6. Choisir **/ (root)** comme dossier
7. Cliquer sur **Save**

#### 5. Accéder au site
Votre site sera disponible à l'adresse :


https://VOTRE-USERNAME.github.io/biogene-lab/


*Note : Il peut y avoir un délai de quelques minutes avant que le site soit accessible.*

## 📁 Structure du projet

biogene-lab/
├── index.html # Page d'accueil
├── services.html # Page des services
├── contact.html # Page de contact
├── resultats.html # Page des résultats
├── css/
│ └── style.css # Feuille de style principale
├── js/
│ └── script.js # Scripts JavaScript
└── README.md # Documentation


## 🎨 Fonctionnalités

### Design
- ✅ Design responsive (mobile et desktop)
- ✅ Palette de couleurs médicale professionnelle
- ✅ Typographie moderne avec Google Fonts
- ✅ Icônes Font Awesome
- ✅ Animations et transitions fluides

### Navigation
- ✅ Menu de navigation responsive
- ✅ Menu hamburger sur mobile
- ✅ Navigation au clavier accessible
- ✅ Liens de navigation actifs

### Pages
- ✅ **Accueil** : Présentation du laboratoire et services
- ✅ **Services** : Liste détaillée des analyses proposées
- ✅ **Contact** : Informations de contact et formulaire
- ✅ **Résultats** : Accès aux résultats d'analyses

### Interactivité
- ✅ Formulaire de contact avec validation
- ✅ Notifications utilisateur
- ✅ Animations au scroll
- ✅ Effets hover sur les boutons

## 🛠️ Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles et animations (Grid, Flexbox)
- **JavaScript** : Interactivité et fonctionnalités
- **Google Fonts** : Typographie (Inter)
- **Font Awesome** : Icônes
- **GitHub Pages** : Hébergement gratuit

## 📱 Responsive Design

Le site est optimisé pour tous les appareils :
- **Desktop** : 1200px et plus
- **Tablet** : 768px - 1199px
- **Mobile** : 320px - 767px

## 🔧 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `css/style.css` :
:root {
--primary-color: #2c5aa0; /* Bleu principal /
--secondary-color: #ffffff; / Blanc /
--accent-color: #f8f9fa; / Gris clair /
/ ... */
}


### Modifier les informations de contact
Éditez les fichiers HTML pour mettre à jour :
- Adresse du laboratoire
- Numéros de téléphone
- Adresse email
- Horaires d'ouverture

### Ajouter Google Maps
Remplacez l'URL de l'iframe dans `contact.html` par les coordonnées réelles :
