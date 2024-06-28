import axios from "axios";
import type { AxiosResponse } from "axios";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface IResCreatePost {
  challenge_post_text: string;
  challenge_id: number;
  email: string;
}

export interface IResRead {
  message: string;
  posts: IResReadPost[];
}

export interface IResReadPost {
  challenge_post_id: number;
  challenge_post_text: string;
  challenge_post_date: string;
  userName: string;
  imageURL: string[];
}

export interface IResDeletePost {
  message: string;
  deletedPostId: number;
}

export async function deletePost(postId: number, email: string) {
  try {
    const resp: AxiosResponse<IResDeletePost> = await axios.delete(
      `${fullApiUrl}/api/challenge-detail/del-post/${postId}/${email}`,
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert("본인의 글만 삭제가능합니다.");
      console.error("Failed to delete post (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to delete post:", error);
    } else {
      console.error("Failed to delete post: An unknown error occurred.");
    }
  }
}
export async function readUserPost(challengeId: number, email: string) {
  try {
    const resp: AxiosResponse<IResRead> = await axios.get(
      `${fullApiUrl}/api/challenge-detail/get-user-post/${challengeId}/${email}`,
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read post (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read post:", error);
    } else {
      console.error("Failed to read post: An unknown error occurred.");
    }
  }
}

export async function readAllPost(challengeId: number) {
  try {
    const resp: AxiosResponse<IResRead> = await axios.get(
      `${fullApiUrl}/api/challenge-detail/get-all-post/${challengeId}`,
    );

    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read post (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read post:", error);
    } else {
      console.error("Failed to read post: An unknown error occurred.");
    }
  }
}

export async function createPost(formData: FormData): Promise<IResCreatePost> {
  try {
    const resp: AxiosResponse<IResCreatePost> = await axios.post(
      `${fullApiUrl}/api/challenge-detail/add-post`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert("생성 불가 합니다.");
      console.error("Failed to create data (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to create data:", error);
    } else {
      console.error("Failed to create data: An unknown error occurred.");
    }
  }
}
