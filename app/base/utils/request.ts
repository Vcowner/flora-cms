/*
 * @Author: liaokt
 * @Description: 请求实例
 * @Date: 2024-10-25 14:56:07
 * @LastEditors: liaokt
 * @LastEditTime: 2024-10-25 16:07:39
 */
import { toast } from "@hooks/use-toast";
import axios, { InternalAxiosRequestConfig } from "axios";

interface ExtendedAxiosRequestConfig<T> extends InternalAxiosRequestConfig<T> {
  getCancelMethod?: any;
}

const { CancelToken } = axios;

const instance = axios.create();

// 提取请求 URL 中的 method
instance.interceptors.request.use((config) => {
  const [method, url] = config.url ? config.url.split(/\s+/) : [];
  if (method && url) {
    config.method = method;
    config.url = url;
  }
  return config;
});

// 处理 url 中的参数, 将 /{id} 替换为 params 中的 id 值
instance.interceptors.request.use((config) => {
  let url = config.url;
  const params = config.params;

  url = url?.replace(/{\w+}/g, (_substring, $1) => {
    if (params[$1]) {
      const value = params[$1];
      delete params[$1];
      return encodeURIComponent(value);
    }
    return _substring;
  });

  config.url = url;

  return config;
});

// 处理获取取消请求的配置
instance.interceptors.request.use((config: ExtendedAxiosRequestConfig<any>) => {
  if (config.getCancelMethod instanceof Function) {
    config.cancelToken = new CancelToken((cancel) => {
      config.getCancelMethod!(cancel);
    });
    delete config.getCancelMethod;
  }
  return config;
});

// 处理响应结果
instance.interceptors.response.use(
  (response) => {
    const { code, data, message } = response.data || {};
    if (code && code === "200") {
      return Promise.resolve(data);
    } else {
      toast({
        title: "请求响应失败",
        description: message,
      });
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
