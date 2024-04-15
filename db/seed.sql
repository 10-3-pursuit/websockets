-- db/seed.sql
\c websocket_notifications;

INSERT INTO users (username, password_hash, email, created_at, updated_at)
VALUES 
('demo', '$2b$10$.z68x3792U9LyBwmghfsKexstMO7i0SeNCoDmeJa7bEFPQBnZU3bK', 'demo@example.com', NOW(), NOW());

INSERT INTO reminders (user_id, title, detail, reminder_time, status)
VALUES
(1, 'Quarterly Review', 'Quarterly financial review meeting with the finance department.', '2024-04-015T18:54', 'active'),
(1, 'Client Call', 'Call with key client to discuss project deliverables and timeline.', '2024-04-015T18:55', 'active'),
(1, 'Team Lunch', 'Lunch outing with the team for team building.', '2024-04-015T18:56', 'active'),
(1, 'Code Review', 'Review latest code submissions with the development team.', '2024-04-015T18:57', 'active'),
(1, 'Product Demo', 'Demonstrate new product features to potential customers.', '2024-04-015T18:58', 'active');
