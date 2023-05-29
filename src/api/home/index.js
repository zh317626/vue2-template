import request from '@/api/request';

export default {
  
  /**
   * 获取壁纸
   */
  getWallpaperClassify(data) {
    return request({
      type:'wall',
      url: '****',
      method: 'POST',
      data
    })
  },

  /**
   * 获取电脑壁纸
   * @returns 
   */
  getComputerWallList(params) {
    return request({
      type:'computerWall',
      url: '****',
      method: 'GET',
      params
    })
  }
}