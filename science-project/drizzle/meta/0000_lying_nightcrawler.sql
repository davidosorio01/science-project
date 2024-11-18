-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `usuarios` (
	`id` text PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
	`username` text NOT NULL,
	`email` text NOT NULL,
	`rol` text NOT NULL,
	`password` text,
	`token` text,
	`resetToken` text
);
--> statement-breakpoint
CREATE TABLE `session` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`expires_at` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY,
	`username` text NOT NULL,
	`email` text
);
--> statement-breakpoint
CREATE TABLE `calificaciones` (
	`id_tema` integer,
	`id_estudiante` integer,
	`puntaje` integer,
	FOREIGN KEY (`id_estudiante`) REFERENCES `usuarios`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`id_tema`) REFERENCES `temas`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `temas` (
	`id` integer PRIMARY KEY,
	`nombre` text NOT NULL
);

*/