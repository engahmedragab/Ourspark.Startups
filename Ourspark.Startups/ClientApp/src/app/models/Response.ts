import { ResponseStatus, ResponseSubStatus } from "src/enum/Response";

export class Response<T>
{
  status: ResponseStatus;
  message: string;
  internalMessage: string;
  data: T;
  subStatus: ResponseSubStatus;
}

export class ResponseList<T>
{
  status: ResponseStatus;
  message: string;
  internalMessage: string;
  data: Array<T>;
  totalcount: number;
  subStatus: ResponseSubStatus;
}

export class ResponsePaged<T>
{
  status: ResponseStatus;
  message: string;
  internalMessage: string;
  data: Array<T>;
  totalCount: number;
  pageNumber: number;
  subStatus: ResponseSubStatus;
}