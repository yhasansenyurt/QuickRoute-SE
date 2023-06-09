export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  phoneNumber: string;
  longitude: number;
  latitude?: number;
  ratingAverage?: number;
  role?: Role;
}

enum Role {
  ADMIN,
  CUSTOMER,
  COURIER,
}
