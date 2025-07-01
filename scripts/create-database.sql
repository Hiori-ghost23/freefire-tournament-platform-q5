-- Création de la base de données pour FF Arena

-- Table des utilisateurs
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    pseudo VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    free_fire_id VARCHAR(20),
    email_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des tournois
CREATE TABLE IF NOT EXISTS tournaments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    tournament_date DATE NOT NULL,
    tournament_time TIME NOT NULL,
    format VARCHAR(20) NOT NULL CHECK (format IN ('Solo', 'Duo', 'Squad')),
    entry_fee INTEGER NOT NULL,
    prize_pool INTEGER NOT NULL,
    max_participants INTEGER NOT NULL,
    status VARCHAR(20) DEFAULT 'open' CHECK (status IN ('open', 'full', 'closed', 'completed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des packs de diamants
CREATE TABLE IF NOT EXISTS diamond_packs (
    id SERIAL PRIMARY KEY,
    diamonds INTEGER NOT NULL,
    price INTEGER NOT NULL,
    bonus INTEGER DEFAULT 0,
    popular BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des commandes
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(20) UNIQUE NOT NULL,
    user_id INTEGER REFERENCES users(id),
    order_type VARCHAR(20) NOT NULL CHECK (order_type IN ('tournament', 'diamonds')),
    tournament_id INTEGER REFERENCES tournaments(id),
    diamond_pack_id INTEGER REFERENCES diamond_packs(id),
    amount INTEGER NOT NULL,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'validated', 'rejected', 'completed')),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des participants aux tournois
CREATE TABLE IF NOT EXISTS tournament_participants (
    id SERIAL PRIMARY KEY,
    tournament_id INTEGER REFERENCES tournaments(id),
    user_id INTEGER REFERENCES users(id),
    order_id INTEGER REFERENCES orders(id),
    registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(tournament_id, user_id)
);

-- Table des administrateurs
CREATE TABLE IF NOT EXISTS admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'admin',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_user_id ON orders(user_id);
CREATE INDEX IF NOT EXISTS idx_tournament_participants_tournament_id ON tournament_participants(tournament_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
