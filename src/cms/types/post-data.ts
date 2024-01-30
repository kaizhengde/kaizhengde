import { LanguageData } from "./language-data";
import { LocationData } from "./location-data";

export interface PostData {
  id: string;
  title: string;
  slug: string;

  date: string;
  location: LocationData;
  language: LanguageData;
  original: boolean;

  description: string;
  content: string;
}