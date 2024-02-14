class Teacher {
  private _firstName: string;
  private _lastName: string;
  private _fullTimeEmployee: boolean;
  private _yearsOfExperience?: number;
  private _location: string;
  private _additionalAttributes: { [key: string]: any } = {};

  constructor(
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._fullTimeEmployee = fullTimeEmployee;
    this._location = location;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get fullTimeEmployee(): boolean {
    return this._fullTimeEmployee;
  }

  get yearsOfExperience(): number | undefined {
    return this._yearsOfExperience;
  }

  set yearsOfExperience(value: number | undefined) {
    this._yearsOfExperience = value;
  }

  get location(): string {
    return this._location;
  }

  // Allow adding any attribute without specifying the name
  setAttribute(key: string, value: any): void {
    this._additionalAttributes[key] = value;
  }

  // Retrieve additional attributes
  getAttributes(): { [key: string]: any } {
    return this._additionalAttributes;
  }
}

// Create a Teacher instance
const teacher = new Teacher("John", "Doe", true, "City1");
teacher.yearsOfExperience = 5;

// Adding an additional attribute without specifying the name
teacher.setAttribute("contract", true);

console.log(teacher);
console.log("Additional Attributes:", teacher.getAttributes());

