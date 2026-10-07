export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  errors?: { message: string } | Record<string, string>;
}
