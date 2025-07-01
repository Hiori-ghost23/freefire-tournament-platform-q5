-- Mise à jour avec la grille tarifaire réelle d'International e-shop

-- Suppression des anciens produits
TRUNCATE TABLE products RESTART IDENTITY CASCADE;

-- Insertion des diamants avec les vrais prix
INSERT INTO products (name, category, price, diamonds, popular, description) VALUES
('110 Diamants', 'diamonds', 900, 110, false, 'Pack de démarrage idéal'),
('231 Diamants', 'diamonds', 1600, 231, true, 'Excellent rapport qualité-prix'),
('341 Diamants', 'diamonds', 2500, 341, false, 'Pour les achats moyens'),
('462 Diamants', 'diamonds', 3200, 462, false, 'Pack intermédiaire'),
('572 Diamants', 'diamonds', 3500, 572, true, 'Très populaire !'),
('693 Diamants', 'diamonds', 4500, 693, false, 'Pour les gros achats'),
('840 Diamants', 'diamonds', 6000, 840, false, 'Pack premium'),
('1000 Diamants', 'diamonds', 7300, 1000, true, 'Le millier parfait !'),
('1500 Diamants', 'diamonds', 10200, 1500, false, 'Pack généreux'),
('2000 Diamants', 'diamonds', 13600, 2000, false, 'Pour les gros joueurs'),
('2500 Diamants', 'diamonds', 18000, 2500, false, 'Pack ultime !');

-- Insertion des abonnements
INSERT INTO products (name, category, price, popular, description, features) VALUES
('Abonnement Hebdomadaire', 'subscriptions', 1700, true, 'Avantages premium pendant 7 jours', '["Diamants quotidiens", "XP bonus", "Accès prioritaire", "Récompenses exclusives"]'),
('Abonnement Mensuel', 'subscriptions', 7500, false, 'Un mois complet d''avantages premium', '["Diamants quotidiens", "XP bonus", "Accès prioritaire", "Récompenses exclusives", "Support VIP"]');

-- Insertion des passes
INSERT INTO products (name, category, price, popular, description, features) VALUES
('Booyah Pass', 'passes', 2400, true, 'Le pass ultime pour cette saison', '["Skins exclusifs", "Emotes rares", "100+ récompenses", "Progression rapide"]'),
('Level Up Pass - Niveau 6', 'passes', 500, false, 'Boost jusqu''au niveau 6', '["Progression instantanée", "Récompenses débloquées"]'),
('Level Up Pass - Niveau 10', 'passes', 500, false, 'Boost jusqu''au niveau 10', '["Progression instantanée", "Récompenses débloquées"]'),
('Level Up Pass - Niveau 15', 'passes', 500, false, 'Boost jusqu''au niveau 15', '["Progression instantanée", "Récompenses débloquées"]'),
('Level Up Pass - Niveau 20', 'passes', 500, false, 'Boost jusqu''au niveau 20', '["Progression instantanée", "Récompenses débloquées"]'),
('Level Up Pass - Niveau 25', 'passes', 500, false, 'Boost jusqu''au niveau 25', '["Progression instantanée", "Récompenses débloquées"]'),
('Level Up Pass - Niveau 30', 'passes', 1000, true, 'Boost jusqu''au niveau 30 - Maximum !', '["Progression instantanée", "Récompenses débloquées", "Bonus spécial niveau max"]');

-- Insertion des produits spéciaux
INSERT INTO products (name, category, price, popular, description, features) VALUES
('Largage Spécial 1$', 'specials', 1000, true, 'Largage spécial avec récompenses aléatoires', '["Récompenses aléatoires", "Skins possibles", "Objets rares"]'),
('Largage Spécial 2$', 'specials', 2000, false, 'Largage premium avec meilleures chances', '["Récompenses premium", "Chances améliorées", "Objets légendaires possibles"]'),
('Accès Evo 7 jours', 'specials', 900, false, 'Accès aux fonctionnalités Evo pendant 7 jours', '["Fonctionnalités Evo", "Avantages exclusifs", "Progression accélérée"]'),
('Accès Evo 30 jours', 'specials', 2500, true, 'Accès complet aux fonctionnalités Evo', '["Fonctionnalités Evo complètes", "Avantages exclusifs", "Progression accélérée", "Support prioritaire"]');

-- Ajout de colonnes pour les nouvelles fonctionnalités
ALTER TABLE products ADD COLUMN IF NOT EXISTS duration VARCHAR(20);
ALTER TABLE products ADD COLUMN IF NOT EXISTS level INTEGER;

-- Mise à jour des durées pour les abonnements et accès
UPDATE products SET duration = '7 jours' WHERE name IN ('Abonnement Hebdomadaire', 'Accès Evo 7 jours');
UPDATE products SET duration = '30 jours' WHERE name IN ('Abonnement Mensuel', 'Accès Evo 30 jours');

-- Mise à jour des niveaux pour les Level Up Pass
UPDATE products SET level = 6 WHERE name = 'Level Up Pass - Niveau 6';
UPDATE products SET level = 10 WHERE name = 'Level Up Pass - Niveau 10';
UPDATE products SET level = 15 WHERE name = 'Level Up Pass - Niveau 15';
UPDATE products SET level = 20 WHERE name = 'Level Up Pass - Niveau 20';
UPDATE products SET level = 25 WHERE name = 'Level Up Pass - Niveau 25';
UPDATE products SET level = 30 WHERE name = 'Level Up Pass - Niveau 30';

-- Création d'une vue pour les statistiques de prix
CREATE OR REPLACE VIEW price_stats AS
SELECT 
    category,
    COUNT(*) as total_products,
    MIN(price) as min_price,
    MAX(price) as max_price,
    AVG(price)::INTEGER as avg_price,
    SUM(CASE WHEN popular = true THEN 1 ELSE 0 END) as popular_count
FROM products 
WHERE active = true 
GROUP BY category;
