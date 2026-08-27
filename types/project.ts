export type ProjectCategory = "website" | "zalo-mini-app" | "mobile-app";

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  image: string;
  shortDescription: string;
  role: string;
  responsibilities: string[];
  previewUrl: string;
};
