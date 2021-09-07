export class User {
    static getUser =  () =>{
        return new Promise(async (resolve, reject)=>{
            await fetch("http://extropysystems.com/public/airtable/api/get_user.php?id="+localStorage.getItem('token'), {
                "method": "GET"
            }).then(response => response.json())
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })

    }

    ///   update user data
    static updateProfile =  (data) =>{
        let formData = new FormData();
        formData.append('user_id', localStorage.getItem('token'));
        formData.append('name', data.Name || '');
        formData.append('email', data.Email || '');
        formData.append('password', data.password || '');

        return new Promise(async (resolve, reject)=>{
            await fetch("http://extropysystems.com/public/airtable/api/user_details.php", {
                "method": "POST",
                "body":formData,
            }).then(response => response.json())
                .then(response => {
                    resolve(response)
                })
                .catch(err => {
                    console.log(err);
                    reject(err)
                });
        })

    }

}
 
