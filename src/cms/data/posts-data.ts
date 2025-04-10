import { PostData } from "../types/post-data";
import { gedankenZurLandwirtschaftPostData } from "./posts/post-1/gedanken-zur-landwirtschaft";
import { thoughtOnAgriculturePostData } from "./posts/post-1/thoughts-on-agriculture";

const postsData: Record<string, PostData[]> = {
  "post-1": [gedankenZurLandwirtschaftPostData, thoughtOnAgriculturePostData]
}

export default postsData;