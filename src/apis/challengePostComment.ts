import axios, { AxiosResponse } from "axios";

const fullApiUrl = process.env.NEXT_PUBLIC_API_URL;

export interface IResComment {
  challenge_post_comment_id: number;
  challenge_post_comment_text: string;
  challenge_post_comment_date: string;
  user_id: number;
  challenge_post_id: number;
  createdAt: string;
  updatedAt: string;
}

export async function createComment(
  userId: number,
  challengePostId: number,
  commentText: string,
) {
  try {
    const resp: AxiosResponse<IResComment> = await axios.post(
      `${fullApiUrl}/api/challenge/comment/addComment/`,
      {
        userId: userId,
        challengePostId: challengePostId,
        commentText: commentText,
      },
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read data (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read data:", error);
    } else {
      console.error("Failed to read data: An unknown error occurred.");
    }
  }
}

export async function readComment(challengePostId: number) {
  try {
    const resp: AxiosResponse<IResComment[]> = await axios.get(
      `${fullApiUrl}/api/challenge/comment/readComment/${challengePostId}`,
    );
    return resp.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Failed to read data (AxiosError):", error.message);
    } else if (error instanceof Error) {
      console.error("Failed to read data:", error);
    } else {
      console.error("Failed to read data: An unknown error occurred.");
    }
  }
}
