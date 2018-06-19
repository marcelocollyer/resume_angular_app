export class Experience {
  title: string;
  subtitle: string;
  description: string;
  location: string;
  start_date: Date;
  end_date: Date;

  constructor(
    title: string,
    subtitle: string,
    description: string,
    location: string,
    start_date: Date,
    end_date: Date,
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.location = location;
    this.start_date = start_date;
    this.end_date = end_date;
  }
}
