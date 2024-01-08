export interface Post {
    post_id: number;
    doctor_firstname: string;
    doctor_lastname: string;
    title: string;
    post_type: string;
    post_status: string;
    tags: string[];
    views_count: number;
    likes_count: number;
    comments_count: number;
    date_posted: Date;
    content: string;
  }
  