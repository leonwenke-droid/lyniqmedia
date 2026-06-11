export const LINKEDIN_URL = "https://www.linkedin.com/in/leon-wenke/";

export type SocialLink = {
  name: string;
  href: string | null;
  comingSoon?: boolean;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", href: LINKEDIN_URL },
  { name: "GitHub", href: null, comingSoon: true },
];
