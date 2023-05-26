
// utils/file.js

export default {
  /**
   * blob转base64
   * @param {*} blob 
   * @returns 
   */
  blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(blob);
      fileReader.onload = (e) => {
        resolve(e.target.result);
      };
      fileReader.onerror = (e) => {
        reject(e);
      }
    })
  },
}