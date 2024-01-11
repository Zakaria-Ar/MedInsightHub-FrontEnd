// src/app/models/post.model.ts
export interface Post {
    post_id: number; // Unique identifier for the post
    title: string; // Title of the post
    post_type: string; // Type of the post (Analysis, Question, Discussion)
    tags: string[]; // Array of tags
    post_text_content: string; // Content of the post
    documents: string[]; // Array of document URLs
  }
  