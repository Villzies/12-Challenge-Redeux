INSERT INTO department (name) 
VALUES ('Guest Service'),
('Domestics'),
('Fulfillment'),
('Grocery'),
('Beauty');

INSERT INTO role (title, salary, department_id) 
VALUES
('Service Advocate', 30000.00, 1),
('Freight Unloader', 45000.00, 2),
('Fulfillment Advocate', 30000.00, 3),
('Grocery Inventory Auditor', 100000.00, 4)
('Makeup Artist', 50000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Chris', 'Eric', 1, 1),
('Bridgette', 'Stow', 2, 1),
('Anna', 'Stow', 3, 1),
('Trey', 'Gray', 4, NULL),
('Sybille', 'Rose', 5, NULL);