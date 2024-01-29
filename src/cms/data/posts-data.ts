import { PostData } from "../types/post-data.ts";
import { gedankenZurLandwirtschaftPostData } from "./posts/post-1/gedanken-zur-landwirtschaft.ts";
import { thoughtOnAgriculturePostData } from "./posts/post-1/thoughts-on-agriculture.ts";

const postsData: Record<string, PostData[]> = {
  post1: [gedankenZurLandwirtschaftPostData, thoughtOnAgriculturePostData]
}

export default postsData;