/*
 * @Description: ^_^
 * @Author: sharebravery
 * @Date: 2023-07-08 11:08:45
 */
export class ApiResult {
  success: boolean = false;
  code: number = 0;
  time: Date = new Date();
  message: string | null | undefined = null;
}

export interface IApiResult<T> extends ApiResult {
  data: T
}
