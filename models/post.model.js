import mongoose from "mongoose";

// Define the schema for posts
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    unique: true, // Ensure slug is unique
    required: false, // Set to false to allow pre-save middleware to create it automatically
  },
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status_post: {
    type: String,
    enum: ['draft', 'published'],
    required: true,
  },
  coverImageUrl: {
    type: String,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

/**
 * Middleware to generate slug before saving
 *
 * This middleware ensures that a slug is created from the title field before
 * saving the document to the database. The slug field is set to `required: false`
 * because Mongoose performs validation before running this `pre('save')` hook.
 * By setting `required: false`, we prevent validation errors that would occur if
 * slug is missing at the time of initial validation.
 */
postSchema.pre('save', function (next) {
  // Check if the slug is missing or if the title has been modified
  // If either condition is true, generate a new slug
  if (!this.slug || this.isModified('title')) {
    this.slug = createSlug(this.title);
  }
  next();
});

/**
 * Function to create a slug from a given title
 *
 * This function converts the title to lowercase, replaces non-alphanumeric characters
 * with hyphens, and removes any leading or trailing hyphens to ensure a clean, readable slug.
 *
 * @param {String} title - The title to be converted into a slug
 * @returns {String} - The generated slug
 */
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading or trailing hyphens
}

export default mongoose.model("Post", postSchema);

/**
 * Error Fix List:
 *
 * 1. Changed `slug` field from `required: true` to `required: false`
 *    - Reason: This change prevents Mongoose from validating `slug` before the `pre('save')` middleware
 *      has the chance to generate it. Without this change, Mongoose validation would fail if `slug`
 *      was missing, which is what caused the initial error.
 *
 * 2. Added a `pre('save')` Middleware for Generating Slug
 *    - Purpose: This middleware checks if `slug` is missing or if the `title` has changed. If either
 *      condition is true, the `createSlug` function is called to generate a new slug. This ensures
 *      that the slug field is always populated correctly before saving.
 *
 * 3. Created `createSlug` Function
 *    - Purpose: This function converts the `title` to a URL-friendly slug by transforming it to lowercase,
 *      replacing non-alphanumeric characters with hyphens, and removing hyphens from the beginning or end.
 *      This ensures that all slugs are consistent and easily readable.
 *
 * Summary:
 * These changes ensure that the `slug` field is automatically generated based on the `title` field and
 * that it passes validation without requiring additional input from the client. The `pre('save')` hook
 * provides flexibility to automatically update the slug if the title is modified.
 */
