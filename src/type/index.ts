export interface response<T> {
  msg?: string;
  code: number;
  data: T;
}
