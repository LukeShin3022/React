import httpCommon from "./http-common";
class fileUploadSrv{
    Fileupload(formData){
        console.log("success");
        return httpCommon.post('/fileUpload.php',formData,{
            headers:{
                'content-type':'multipart/form-data'
            }
        })
    }
}
export default new fileUploadSrv();