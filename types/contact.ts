export type ContactType = "phone" | "email" | "github" | "facebook";

export type ContactLink = {
  type: ContactType;
  label: string;
  value: string;
  href: string;
};
