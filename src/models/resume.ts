import { Experience } from "./experience";
import { Education } from "./education";
import { Language } from "./language";
import { Certification } from "./certification";
import { Interest } from "./interest";
import { Skill } from "./skill";

export class Resume {   
  id?: number;
  name: string;
  profile_img_url: string;
  email: string;
  phone: string;
  website: string;
  linkedin: string;
  github: string;
  twitter: string;
  roles_desc: string;
  carrer_desc: string;
  experiences: Experience[];
  educations: Education[];
  languages: Language[];
  certifications: Certification[];
  interests: Interest[];
  skills: Skill[];

  constructor(
    id: number,
    name: string,
    profile_img_url: string,
    email: string,
    phone: string,
    website: string,
    linkedin: string,
    github: string,
    twitter: string,
    roles_desc: string,
    carrer_desc: string,
    experiences: Experience[],
    educations: Education[],
    languages: Language[],
    certifications: Certification[],
    interests: Interest[],
    skills: Skill[],
  ) {
    this.id = id;
    this.name = name;
    this.profile_img_url = profile_img_url;
    this.email = email;
    this.phone = phone;
    this.website = website;
    this.linkedin = linkedin;
    this.github = github;
    this.twitter = twitter;
    this.roles_desc = roles_desc;
    this.carrer_desc = carrer_desc;
    this.experiences = experiences;
    this.educations = educations;
    this.languages = languages;
    this.certifications = certifications;
    this.interests = interests;
    this.skills = skills;
  }
}