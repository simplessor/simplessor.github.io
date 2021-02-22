export class BaiduResponse<T> {
    errno?:number
    guid_info?:string
    list:T[] = []
    request_id?:number
    guid?:number
}
