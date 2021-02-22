import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BaiduNetdiskService } from './baidu-netdisk.service';
import { baidu } from "../environments/environment"

const { AppKey, RedirectURI } = baidu
const BaiduAuthCodeKey = "code"

@Injectable({
  providedIn: 'root'
})
export class CheckBaiduAuthCodeGuard implements CanActivate {
  authCodeEmpty: string = "未获取到授权码"
  private authURL: string = `http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=${AppKey}&redirect_uri=${encodeURIComponent(RedirectURI)}&scope=netdisk&display=page`
  constructor(
    private baiduNetdiskService: BaiduNetdiskService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // 检测localStorage中是否存在AuthCode
    const checked = this.baiduNetdiskService.checkBaiduAuthCode()
    if (checked) return true
    // 检测Query中是否存在AuthCode
    return new Observable(observer => {
      // 获取Query
      const queryParamMap = route.queryParamMap
      console.log(queryParamMap)
      // 是否存在相关KEY
      if (queryParamMap.has(BaiduAuthCodeKey)) {
        // 存在
        // 获取值
        const code = queryParamMap.get(BaiduAuthCodeKey)
        // 值非空
        if (!!code && code.length > 0) {
          // 存储至LocalStorage
          this.baiduNetdiskService.saveBaiduAuthCode(code)
          // 验证通过
          observer.next(true)
        }
      } else {
        // 不存在
        // 直接跳转到验证页面
        window.location.replace(this.authURL)
        // 验证不通过
        observer.next(false)
      }
    })
  }

}
