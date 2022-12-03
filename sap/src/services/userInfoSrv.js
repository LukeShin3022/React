import httpCommon from "./http-common";
class userInfoSrv{
    loadInfo(sid){
        let formData = new FormData();
        formData.append("sid",sid);
        return httpCommon.post("/sidChk.php",formData,{
            header:{
                'content-type':'multipart/form-data'
            }
        });
    }
}
export default new userInfoSrv();