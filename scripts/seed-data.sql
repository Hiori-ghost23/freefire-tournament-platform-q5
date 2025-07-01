-- Insertion des données de test pour FF Arena

-- Insertion des packs de diamants
INSERT INTO diamond_packs (diamonds, price, bonus, popular) VALUES
(110, 1500, 0, false),
(520, 6000, 20, true),
(1080, 12000, 80, false),
(2200, 24000, 200, false),
(5600, 60000, 600, false),
(11200, 120000, 1400, false);

-- Insertion d'un administrateur par défaut
INSERT INTO admins (username, email, password_hash) VALUES
('admin', 'admin@ffarena.com', '$2b$10$example_hash_here');

-- Insertion de tournois d'exemple
INSERT INTO tournaments (name, description, tournament_date, tournament_time, format, entry_fee, prize_pool, max_participants) VALUES
('Warzone Lundi', 'Tournoi Solo intense avec des récompenses exceptionnelles. Montrez vos compétences et dominez le battlefield !', '2024-01-22', '20:00', 'Solo', 5000, 50000, 50),
('Squad Battle Royale', 'Affrontement épique en équipe de 4. Coordination et stratégie seront vos meilleurs atouts.', '2024-01-25', '19:00', 'Squad', 8000, 100000, 20),
('Championship Final', 'La finale du championnat mensuel. Les meilleurs joueurs s''affrontent pour le titre ultime.', '2024-01-28', '18:00', 'Solo', 10000, 200000, 50);

-- Insertion d'utilisateurs de test
INSERT INTO users (pseudo, email, password_hash, free_fire_id, email_verified) VALUES
('ProGamer123', 'progamer@email.com', '$2b$10$example_hash_here', '123456789', true),
('FireKing', 'fireking@email.com', '$2b$10$example_hash_here', '987654321', true),
('BattleQueen', 'battlequeen@email.com', '$2b$10$example_hash_here', '456789123', true),
('SniperElite', 'sniper@email.com', '$2b$10$example_hash_here', '789123456', true),
('RushMaster', 'rush@email.com', '$2b$10$example_hash_here', '321654987', true);
