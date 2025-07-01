-- Ajout d'un système de promotions et d'offres spéciales

CREATE TABLE IF NOT EXISTS promotions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    discount_percentage INTEGER,
    discount_amount INTEGER,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    product_categories TEXT[],
    min_purchase_amount INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion de promotions d'exemple
INSERT INTO promotions (name, description, discount_percentage, start_date, end_date, product_categories) VALUES
('Promo Weekend', 'Réduction de 15% sur tous les diamants ce weekend', 15, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '3 days', ARRAY['diamonds']),
('Offre Battle Pass', 'Réduction de 20% sur tous les Battle Pass', 20, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '7 days', ARRAY['battlepass']),
('Pack Bundles -25%', 'Méga promotion sur tous les packs bundles', 25, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '5 days', ARRAY['bundles']);

-- Table pour les codes promo
CREATE TABLE IF NOT EXISTS promo_codes (
    id SERIAL PRIMARY KEY,
    code VARCHAR(20) UNIQUE NOT NULL,
    discount_percentage INTEGER,
    discount_amount INTEGER,
    usage_limit INTEGER DEFAULT 1,
    used_count INTEGER DEFAULT 0,
    valid_until TIMESTAMP NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertion de codes promo d'exemple
INSERT INTO promo_codes (code, discount_percentage, usage_limit, valid_until) VALUES
('WELCOME10', 10, 100, CURRENT_TIMESTAMP + INTERVAL '30 days'),
('FFARENA20', 20, 50, CURRENT_TIMESTAMP + INTERVAL '15 days'),
('NEWPLAYER', 15, 200, CURRENT_TIMESTAMP + INTERVAL '60 days');
