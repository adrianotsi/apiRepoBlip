const axios = require('axios')

module.exports = {
    async index(request, response){
        try{
            //Requisição na API do Github
            const token = `${process.env.token}`;
            let {data} = await axios.get('https://api.github.com/orgs/takenet/repos', {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });

            //Filtrar array para exibir somente repositórios com a linguagem C#
            data = data.filter(function(item) {
                return item.language === "C#"
            });

            let repos = []

            //Montar array com os 5 primeiros itens do array data
            for (let index = 0; index < 5; index++) {
                repos.push({
                    name: data[index].name,
                    description: data[index].description,
                    created_at: data[index].created_at
                });
            }

            let res = {
                status: "success",
                avatar_image: data[0].owner.avatar_url,
                repos: repos
            }
            return response.json(res)
        }catch(e){
            console.log(e)
            response.status(500).send('Something broke! Sorry for this :/');
        }
        
    }
};