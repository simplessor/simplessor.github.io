import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baidu } from '../environments/environment';
import { AccessToken } from './access-token.entity';
import { BaiduResponse } from './baidu-response.entity';
import { File } from './file.entity';
const KEY_BAIDU_AUTHCODE = baidu.KeyAuthCode
const KEY_ACCESS_TOKEN = baidu.KeyAccessToken
@Injectable({
  providedIn: 'root'
})
export class BaiduNetdiskService {
  private baiduAuthCode: string | null = null
  private accessToken: string | null = null
  constructor(
    private http: HttpClient
  ) { }

  loadBaiduAuthCode() {
    if (!!this.baiduAuthCode) return this.baiduAuthCode
    this.baiduAuthCode = localStorage.getItem(KEY_BAIDU_AUTHCODE)
    return this.baiduAuthCode
  }

  checkBaiduAuthCode() {
    return !!this.loadBaiduAuthCode()
  }

  saveBaiduAuthCode(authCode?: string) {
    if (!authCode) return;
    this.baiduAuthCode = authCode
    localStorage.setItem(KEY_BAIDU_AUTHCODE, authCode)
  }

  fetchAccessToken():Observable<string|null>{
    return new Observable(observer=>{
      if(!!this.accessToken) return observer.next(this.accessToken)
      this.accessToken = localStorage.getItem(KEY_ACCESS_TOKEN)
      if(!!this.accessToken)return observer.next(this.accessToken)
      const authCode = this.loadBaiduAuthCode()
      if(!authCode) return observer.next()
      const params = new HttpParams()
      params.set("grant_type","authorization_code")
      params.set("code",authCode)
      params.set("client_id",baidu.AppKey)
      params.set("client_secret",baidu.SecretKey)
      params.set("redirect_uri",encodeURIComponent(baidu.RedirectURI))
      this.http.get(`https://openapi.baidu.com/oauth/2.0/token`,{
        params
      }).subscribe((response:AccessToken)=>{
        console.log(response)
        observer.next()
      })
    })
  }

  fetchFileList(filePath:string = "/",start:number = 0,end:number = 256) {
    if(end<start)throw new Error("参数范围异常")
    return new Observable(observer=>{
      this.fetchAccessToken().subscribe(accessToken=>{
        if(!accessToken)return observer.next([])
        const params = new HttpParams()
        params.set("method","list")
        params.set("access_token",accessToken)
        params.set("dir",filePath)
        params.set("order","name")
        params.set("desc","0")
        params.set("start",`${start}`)
        params.set("limit",`${end-start}`)
        params.set("web","web")
        params.set("folder","0")
        params.set("showempty","1")
        this.http.get(`https://pan.baidu.com/rest/2.0/xpan/file`, {params}).subscribe((response)=>{
          console.log(response)
          observer.next((response as BaiduResponse<File>).list)
        })
      })
    })
  }
}
