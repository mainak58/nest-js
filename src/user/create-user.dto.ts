export class CreateUserDto {
  id: number;
  name: string;
  password: number;
  role: "admin" | "user"
}
