import request from '@/api/request';

export default {
  
  /**
   * 获取壁纸
   */
  getWallpaperClassify(data) {
    return request({
      type:'wall',
      url: 'v1/vertical/category',
      method: 'POST',
      data
    })
  },

  /**
   * 获取电脑壁纸
   * @returns 
   */
  getComputerWallList(params) {
    // https://www.beiwangshan.com/wp/
    return request({
      type:'computerWall',
      url: '360wallpaperApi.php',
      method: 'GET',
      params
    })
  }
}