-- Mise à jour de la base de données avec les nouveaux produits Free Fire

-- Suppression de l'ancienne table et création de la nouvelle structure
DROP TABLE IF EXISTS diamond_packs;

-- Nouvelle table produits plus complète
CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL CHECK (category IN ('diamonds', 'battlepass', 'memberships', 'bundles')),
    price INTEGER NOT NULL,
    original_price INTEGER,
    diamonds INTEGER DEFAULT 0,
    bonus INTEGER DEFAULT 0,
    popular BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    description TEXT,
    features JSONB,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion des diamants
INSERT INTO products (name, category, price, original_price, diamonds, bonus, popular, description, image_url) VALUES
('110 Diamants', 'diamonds', 1500, NULL, 110, 0, false, 'Pack de base pour débuter', '/placeholder.svg?height=120&width=120'),
('520 Diamants + Bonus', 'diamonds', 6000, 6500, 520, 20, true, 'Le plus populaire ! Bonus inclus', '/placeholder.svg?height=120&width=120'),
('1080 Diamants + Bonus', 'diamonds', 12000, 13000, 1080, 80, false, 'Excellent rapport qualité-prix', '/placeholder.svg?height=120&width=120'),
('2200 Diamants + Bonus', 'diamonds', 24000, 26000, 2200, 200, false, 'Pour les gros acheteurs', '/placeholder.svg?height=120&width=120'),
('5600 Diamants + Bonus', 'diamonds', 60000, 65000, 5600, 600, false, 'Pack premium avec gros bonus', '/placeholder.svg?height=120&width=120');

-- Insertion des Battle Pass
INSERT INTO products (name, category, price, description, features, popular, image_url) VALUES
('Elite Pass Saison Actuelle', 'battlepass', 8000, 'Débloquez tous les rewards de la saison', '["100+ récompenses", "Skins exclusifs", "Emotes rares"]', true, '/placeholder.svg?height=120&width=120'),
('Elite Pass + 25 Niveaux', 'battlepass', 15000, 'Elite Pass avec boost de niveaux', '["Elite Pass", "25 niveaux gratuits", "Progression rapide"]', false, '/placeholder.svg?height=120&width=120');

-- Insertion des Memberships
INSERT INTO products (name, category, price, description, features, popular, image_url) VALUES
('Membership Mensuel', 'memberships', 5000, 'Avantages premium pendant 30 jours', '["Diamants quotidiens", "XP bonus", "Accès prioritaire"]', true, '/placeholder.svg?height=120&width=120'),
('Membership Hebdomadaire', 'memberships', 2000, 'Avantages premium pendant 7 jours', '["Diamants quotidiens", "XP bonus"]', false, '/placeholder.svg?height=120&width=120');

-- Insertion des Bundles
INSERT INTO products (name, category, price, original_price, description, features, popular, image_url) VALUES
('Pack Débutant', 'bundles', 3000, 4000, 'Parfait pour commencer l''aventure', '["310 Diamants", "Skin de personnage", "Emote exclusive"]', true, '/placeholder.svg?height=120&width=120'),
('Pack Guerrier', 'bundles', 12000, 15000, 'Pour les vrais combattants', '["1000 Diamants", "Skin d''arme légendaire", "Parachute rare", "Pet exclusif"]', false, '/placeholder.svg?height=120&width=120'),
('Pack Légende', 'bundles', 25000, 30000, 'Le pack ultime pour les légendes', '["2500 Diamants", "Skin mythique", "Véhicule exclusif", "Titre rare", "Emotes premium"]', false, '/placeholder.svg?height=120&width=120');

-- Mise à jour de la table orders pour supporter les nouveaux produits
ALTER TABLE orders ADD COLUMN IF NOT EXISTS product_id INTEGER REFERENCES products(id);
ALTER TABLE orders DROP COLUMN IF EXISTS diamond_pack_id;

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_popular ON products(popular);
CREATE INDEX IF NOT EXISTS idx_products_active ON products(active);
