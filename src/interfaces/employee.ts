export interface Employee {
  name: string;
  email: string;
  phone: string;
  office: string;
  manager: string;
  orgUnit: string;
  mainText: string;
  github?: string;
  twitter?: string;
  stackOverflow?: string;
  linkedIn?: string;
  imagePortraitUrl?: string;
  imageWallOfLeetUrl: string;
  highlighted: boolean;
  published: boolean;
  primaryRole: string;
  secondaryRole?: string;
  area: string;
}
