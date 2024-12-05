import upload from '@/utils/upload'
import request from '@/utils/request'
const baseUrl = '/chart';
	const region = 'cloud-api';
export function orderChart(){
	return request({
	  url:  baseUrl + '/order',
	  method: 'get',
	 
	})
}