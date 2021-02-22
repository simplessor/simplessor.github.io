import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BaiduNetdiskService } from './baidu-netdisk.service';
import { baidu } from "../environments/environment"

const { AppKey,RedirectURI } = baidu

@Injectable({
  providedIn: 'root'
})
export class CheckBaiduAuthCodeGuard implements CanActivate {
  private authURL:string = `http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=${AppKey}&redirect_uri=${encodeURIComponent(RedirectURI)}&scope=netdisk&display=page`
  constructor(
    private baiduNetdiskService:BaiduNetdiskService
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const checked = this.baiduNetdiskService.checkBaiduAuthCode()
    if(checked) return true
    window.location.replace(this.authURL)
    return false
  }
  
}
