import { sqliteTable, text, foreignKey, integer, uniqueIndex } from "drizzle-orm/sqlite-core"
  import { sql } from "drizzle-orm"

export const usuarios = sqliteTable("usuarios", {
	id: text().default("sql`(lower(hex(randomblob(16))))`").primaryKey(),
	username: text().notNull(),
	email: text().notNull(),
	rol: text().notNull(),
	password: text(),
	token: text(),
	resetToken: text(),
});

export const session = sqliteTable("session", {
	id: text().primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => user.id),
	expiresAt: integer("expires_at").notNull(),
});

export const user = sqliteTable("user", {
	id: text().primaryKey().notNull(),
	email: text().notNull(),
	password: text().notNull(),
},
(table) => {
	return {
		emailUnique: uniqueIndex("user_email_unique").on(table.email),
	}
});

export const users = sqliteTable("users", {
	id: integer().primaryKey(),
	username: text().notNull(),
	email: text(),
});

export const calificaciones = sqliteTable("calificaciones", {
	idTema: integer("id_tema").references(() => temas.id),
	idEstudiante: integer("id_estudiante").references(() => usuarios.id),
	puntaje: integer(),
});

export const temas = sqliteTable("temas", {
	id: integer().primaryKey(),
	nombre: text().notNull(),
});

