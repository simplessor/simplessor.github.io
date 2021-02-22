import { Injectable } from '@angular/core';
import { baidu } from '../environments/environment';
const KEY_BAIDU_AUTHCODE = baidu.KeyAuthCode
@Injectable({
  providedIn: 'root'
})
export class BaiduNetdiskService {
  private baiduAuthCode: string | null = null
  constructor() { }

  loadBaiduAuthCode() {
    if (!!this.baiduAuthCode) return this.baiduAuthCode
    this.baiduAuthCode = localStorage.getItem(KEY_BAIDU_AUTHCODE)
    return this.baiduAuthCode
  }

  checkBaiduAuthCode(){
    return !!this.loadBaiduAuthCode()
  }
}
