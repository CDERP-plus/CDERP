import request from '@/utils/request'
// import contentTypeEnum from '@/enums/httpEnums'

const baseUrl = '/sale/config';
const region = 'cloud-api';

/**
 * 查询详情
 */
export function getConfig(){
	return request({
	  url:  baseUrl,
	  method: 'get',
	 
	})
}


/**
 * 修改
 */
export function updateConfig(data) {
  return request(
    {
      url: baseUrl,
      data: data,
	    method: 'put',
	  contentType: 'application/x-www-form-urlencoded;charset=UTF-8',
	
    }
  );
}
