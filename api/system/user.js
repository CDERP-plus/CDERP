import upload from '@/utils/upload'
import request from '@/utils/request'
	const baseUrl = '/center';
	const region = 'cloud-api';
	

	const selectorBaseUrl = '/selector';
/**
 * 查询selector
 */
export function userSelector(data){

  return request({
    url: selectorBaseUrl + '/user',
    method: 'get',
     params: data
  });
}
	
// 用户密码重置
export function updateUserPwd(oldPsw,newPsw,confirmPsw){

  const data = {
     oldPsw,
     newPsw,
     confirmPsw
  }
  return request({
    url:  baseUrl + '/password',
    method: 'put',
    params: data
  })
}

// 查询用户个人信息
export function getUserProfile() {
  return request({

	url: baseUrl + '/info',
    method: 'get'
  })
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request({
    url: '/system/user/profile',
    method: 'put',
    data: data
  })
}

// 用户头像上传
export function uploadAvatar(data) {
  return upload({
    url: '/system/user/profile/avatar',
    name: data.name,
    filePath: data.filePath
  })
}
