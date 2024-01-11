export interface homePosts {
    post_id: number;
    doctor_firstname: string;
    doctor_lastname: string;
    title: string;
    post_type: string; // Assuming you have corresponding types
    post_status: string; // Assuming you have corresponding statuses
    tags: string[];
    views_count: number;
    likes_count: number;
    comments_count: number;
    date_posted: Date;
    viewed: boolean;
    liked: boolean;
  }