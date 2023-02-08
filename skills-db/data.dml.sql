DELETE FROM categories;
DELETE FROM kinds;

INSERT INTO kinds (name)
	VALUES
	('Hard skills'), ('Soft skills');
	
INSERT INTO categories (name, color, kind_id)
	VALUES
	('HTML', 'pink', (SELECT id from kinds WHERE name = 'soft-skills'
	));