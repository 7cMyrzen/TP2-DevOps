CREATE TABLE IF NOT EXISTS utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    ecurie VARCHAR(255),
    nationalite VARCHAR(100),
    titres_mondiaux INT,
    biographie TEXT
);

INSERT INTO utilisateurs (nom, ecurie, nationalite, titres_mondiaux, biographie) VALUES 
('Kimi Antonelli', 'Mercedes-AMG PETRONAS', 'Italien', 0, 'Le rookie prodige de 19 ans qui impressionne tout le monde en ce debut de saison 2026. Il mene actuellement le championnat du monde apres des victoires consecutives au Japon et en Chine.'),
('George Russell', 'Mercedes-AMG PETRONAS', 'Britannique', 0, 'Vainqueur du Grand Prix d Australie 2026, il forme avec Antonelli le duo le plus performant du moment. Il a parfaitement negocie le passage aux nouvelles reglementations techniques.'),
('Lewis Hamilton', 'Scuderia Ferrari', 'Britannique', 7, 'Pour sa premiere saison en rouge, la legende Hamilton a deja signe son premier podium avec Ferrari en Chine. Il s adapte rapidement aux nouveaux moteurs hybrides 2026.'),
('Valtteri Bottas', 'Cadillac F1 Team', 'Finlandais', 0, 'Le veteran finlandais est le leader de la toute nouvelle ecurie Cadillac, le 11eme constructeur de la grille. Son experience est cruciale pour developper cette nouvelle monoplace.');
