// db/schema.ts
import { sql } from "drizzle-orm";
import { boolean, integer, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";

// USER
export const users = pgTable("users", {
    id: text("id")
        .primaryKey()
        .notNull()
        .default(sql`concat('usr_', gen_random_uuid())`),
    username: text("username").notNull().unique(),
    password: text("password").notNull(),
    role: text("role").default("admin").notNull(),
});


// ENUM untuk status_post
export const postStatusEnum = pgEnum("post_status", ["DRAFT", "PUBLISHED"]);

// POSTS
export const posts = pgTable("posts", {
    id: text("id")
        .primaryKey()
        .notNull()
        .default(sql`concat('pst_', gen_random_uuid())`),
    title: text("title").notNull(),
    slug: text("slug").unique(),
    content: text("content").notNull(),
    description: text("description").notNull(),
    status_post: postStatusEnum("status_post").default("DRAFT").notNull(),
    coverImageUrl: text("coverImageUrl"),
    createdAt: timestamp("createdAt", { mode: "string" }).defaultNow().notNull(),
    updatedAt: timestamp("updatedAt", { mode: "string" }).defaultNow().notNull(),
    published: boolean("published").default(false).notNull(),
    authorId: text("authorId").notNull(), // relasi ke users.id
});

// COMMENTS
export const comments = pgTable("comments", {
    id: text("id")
        .primaryKey() 
        .notNull()
        .default(sql`concat('cmt_', gen_random_uuid())`),
    comment_user: text("comment_user").notNull(),
    username: text("username"),

    postId: text("postId").notNull(), // relasi ke posts.id
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// LIKES
export const likes = pgTable("likes", {
    id: text("id")
        .primaryKey()
        .notNull()
        .default(sql`concat('lik_', gen_random_uuid())`),
    postId: text("postId").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// FEEDBACKS
export const feedbacks = pgTable("feedbacks", {
    id: text("id")
        .primaryKey()
        .notNull()
        .default(sql`concat('fdb_', gen_random_uuid())`),
    tanggapan: text("tanggapan").notNull(),
    rating: integer("rating").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// SUBSCRIPTIONS
export const subscriptions = pgTable("subscriptions", {
    id: text("id")
        .primaryKey()
        .notNull()
        .default(sql`concat('sub_', gen_random_uuid())`),
    email_subscription: text("email_subscription").notNull(),
    whats_app_subscription: text("whats_app_subscription").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

// MAINTENANCES
export const maintenances = pgTable("maintenances", {
    id: text("id")
        .primaryKey()
        .notNull()
        .default(sql`concat('mnt_', gen_random_uuid())`),
    isMaintenance: boolean("isMaintenance").default(false).notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});