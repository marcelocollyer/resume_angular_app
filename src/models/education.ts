
export class Education {
  title: string;
  course: string;
  location: string;
  start_date: Date;
  end_date: Date;

  constructor(
    title: string,
    course: string,
    location: string,
    start_date: Date,
    end_date: Date,
  ) {
    this.title = title;
    this.course = course;
    this.location = location;
    this.start_date = start_date;
    this.end_date = end_date;
  }
}