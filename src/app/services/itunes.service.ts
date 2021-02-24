import { Injectable } from '@angular/core';
import axios from 'axios';

const pending = [];
const cancelToken = axios.CancelToken;

const removePending = (config) => {
  for (const p in pending){
      if (pending[p].u === config.url + '&' + config.method) { // 当当前请求在数组中存在时执行函数体
          pending[p].f(); // 执行取消操作
          pending.splice(Number(p), 1); // 把这条记录从数组中移除
      }
  }
};

axios.interceptors.request.use(config => {
  removePending(config);
  config.cancelToken = new cancelToken((c) => {
    pending.push({u: config.url + '&' + config.method, f: c});
  });
  return config;
}, (error) => {
  return Promise.reject(error);
});

axios.interceptors.response.use(res => {
  removePending(res.config);
  return res;
}, (error) => {
  return { data: {}};
});

@Injectable({
  providedIn: 'root'
})
export class ItunesService {
  url = 'https://itunes.apple.com/hk';
  constructor() { }

  async getTopGrossingApps(limit: number): Promise<any> {
    const url = `${this.url}/rss/topgrossingapplications/limit=${limit}/json`;
    return this.call(url);
  }

  async getTopFreeApps(limit: number): Promise<any> {
    const url = `${this.url}/rss/topfreeapplications/limit=${limit}/json`;
    return this.call(url);
  }

  async lookupApp(ids: string[]): Promise<any> {
    const url = `${this.url}/lookup?id=${ids.join(',')}`;
    return this.call(url);
  }

  async call(path: string): Promise<any> {
    const res = await axios.get(path);
    if (JSON.stringify(res.data) === '{}') {
      throw  500;
    }
    return res.data;
  }
}
