import { relations } from "drizzle-orm/relations";
import { user, session, usuarios, calificaciones, temas } from "./schema";

export const sessionRelations = relations(session, ({one}) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	}),
}));

export const userRelations = relations(user, ({many}) => ({
	sessions: many(session),
}));

export const calificacionesRelations = relations(calificaciones, ({one}) => ({
	usuario: one(usuarios, {
		fields: [calificaciones.idEstudiante],
		references: [usuarios.id]
	}),
	tema: one(temas, {
		fields: [calificaciones.idTema],
		references: [temas.id]
	}),
}));

export const usuariosRelations = relations(usuarios, ({many}) => ({
	calificaciones: many(calificaciones),
}));

export const temasRelations = relations(temas, ({many}) => ({
	calificaciones: many(calificaciones),
}));