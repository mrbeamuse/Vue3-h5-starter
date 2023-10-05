import { http } from "@/utils/http";

type ListResult = {
  code: number;
  msg: string;
  data: any;
};

interface IDParams {
  id: string;
}

export function getActivityApi(params?: IDParams): Promise<ListResult> {
  return http.request({
    url: `pmsActivity/detail/${params?.id}`,
    method: "get"
  });
}

export function getListApiError(data?: object): Promise<ListResult> {
  return http.request({
    url: "/list/error",
    method: "post",
    data
  });
}
