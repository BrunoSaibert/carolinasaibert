import config from "../../config.json";

type Config = {
  readonly base_url: string;
  readonly site_title: string;
  readonly site_description: string;
  readonly site_keywords: { keyword: string }[];
  readonly posts_per_page: number;
  readonly home_title: string;
  readonly home_description: string;
  readonly copy: string;
  readonly twitter_account: string;
  readonly instagram_account: string;
  readonly linkedin_account: string;
  readonly pinterest_account: string;
  readonly mail_account: string;
  readonly phone_number: string;
  readonly pages: {
    title: string;
    url: string;
  }[];
  readonly color: {
    primaryDark: string;
    primary: string;
    secondary: string;
    tertiary: string;
    light: string;
    gray: string;
    dark: string;
  };
};

export default (config as unknown) as Config;
