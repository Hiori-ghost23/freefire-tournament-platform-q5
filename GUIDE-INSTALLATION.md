# 🚀 Guide d'Installation - FF Arena

## 📋 Prérequis

- Node.js 18+ installé
- Un compte Supabase (gratuit)
- Un terminal/console

## 🔧 Étapes d'Installation

### 1. **Cloner et Installer**

\`\`\`bash
# Cloner le projet
git clone <votre-repo>
cd freefire-tournament-platform

# Installer les dépendances
npm install
\`\`\`

### 2. **Comment Accéder à la Console**

### Windows
1. **Invite de commandes** : `Win + R` → tapez `cmd` → Entrée
2. **PowerShell** : `Win + X` → "Windows PowerShell"
3. **Terminal Windows** : `Win + X` → "Terminal Windows"
4. **VS Code** : `Ctrl + ù` (terminal intégré)

### Mac
1. **Terminal** : `Cmd + Espace` → tapez "Terminal" → Entrée
2. **iTerm2** : Si installé
3. **VS Code** : `Cmd + ù` (terminal intégré)

### Linux
1. **Terminal** : `Ctrl + Alt + T`
2. **VS Code** : `Ctrl + ù` (terminal intégré)

### 3. **Configurer Supabase**

#### A. Créer un projet Supabase
1. Allez sur [supabase.com](https://supabase.com)
2. Cliquer "Start your project"
3. Se connecter avec GitHub/Google
4. Cliquer "New project"
5. Choisir un nom et mot de passe
6. Attendre la création (2-3 minutes)

#### B. Récupérer les Clés
1. Dans votre projet Supabase
2. Aller dans "Settings" → "API"
3. Noter :
   - **Project URL** (commence par https://...)
   - **anon public** (clé publique)

### 4. **Configuration des Variables d'Environnement**

\`\`\`bash
# Copier le fichier d'exemple
cp .env.local.example .env.local
\`\`\`

Éditez `.env.local` avec vos vraies valeurs :

\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=https://votre-projet-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=votre-cle-anon-ici
JWT_SECRET=une-cle-secrete-tres-longue-et-complexe-123456789
\`\`\`

### 5. **Créer les Tables**

1. Dans Supabase, allez dans "SQL Editor"
2. Copiez-collez le contenu de `scripts/create-database.sql`
3. Exécutez le script

### 6. **Démarrer le Serveur**

\`\`\`bash
# Redémarrer le serveur de développement
npm run dev
\`\`\`

Ouvrez [http://localhost:3000](http://localhost:3000)

## ✅ **Vérification**

### Test d'Inscription
1. Allez sur `/auth/register`
2. Créez un compte avec :
   - Pseudo : `testuser`
   - Email : `test@example.com`
   - Mot de passe : `123456`
3. Vérifiez dans Supabase que l'utilisateur est créé

### Test de Connexion
1. Allez sur `/auth/login`
2. Connectez-vous avec les identifiants créés
3. Vous devriez être redirigé vers `/dashboard`

### Vérifier le Statut
- Visitez `/status` pour voir l'état des services
- Vert = Opérationnel
- Rouge = Configuration manquante

## 🆘 **Problèmes Courants**

### Erreur "Module not found"
\`\`\`bash
# Réinstaller les dépendances
rm -rf node_modules package-lock.json
npm install
\`\`\`

### Erreur Supabase
- Vérifier l'URL et les clés dans `.env.local`
- Vérifier que les tables sont créées
- Redémarrer le serveur après modification

### Erreur "Supabase client not configured"
- Vérifiez que `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` sont définis
- Redémarrez le serveur après modification

### Erreur "JWT must be provided"
- Ajoutez `JWT_SECRET` dans `.env.local`
- Utilisez une clé longue et complexe

### Erreur de base de données
- Vérifiez que les tables sont créées dans Supabase
- Exécutez le script `scripts/create-database.sql`

### Console ne s'ouvre pas
- **Windows** : Essayer PowerShell au lieu de CMD
- **Mac/Linux** : Vérifier les permissions du terminal
- **Alternative** : Utiliser le terminal intégré de VS Code

## 🎯 **Résultat Attendu**

Après configuration complète :
- ✅ Inscription dynamique fonctionnelle
- ✅ Connexion avec JWT
- ✅ Sessions persistantes
- ✅ Base de données opérationnelle

## 📞 **Support**

Si vous rencontrez des problèmes :
1. Vérifiez `/status`
2. Consultez les logs de la console
3. Vérifiez que toutes les variables d'environnement sont définies
