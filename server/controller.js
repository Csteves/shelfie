module.exports = {
    create: (req,res)=>{
        console.log('hello from create')
        console.log(req.body);
        const dbInstance = req.app.get('db');
        const {name,price,image_url} = req.body.obj;
        dbInstance.create_product(name,price,image_url)
        .then((product)=> res.status(200).send(product))
        .catch((err) =>{
            res.status(500).send({errorMessage: "Something went Wrong"});
            console.log(err)
        })
    },
    getAll: (req,res) => {
        console.log('hello from getall');
        const dbInstance = req.app.get('db');
        dbInstance.read_products().then(product => res.status(200).send( product ))
        .catch(err => {
            res.status(500).send({errorMessage: "Opps! Something went wrong."});
            console.log(err);
        })
    },
    update: (req,res) => {
        console.log("hello from update")
        const {id} = req.params;
        const {name,price,image_url} = req.query;
        const dbInstance = req.app.get('db');
        dbInstance.update_product(id,desc)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Opps! Something went wrong.'});
            console.log(err)
        })

    },
    delete: (req,res) => {
        console.log("from delete")
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.delete_product(id)
        .then((products) => res.status(200).send(products))
        .catch(err => {
            res.status(500).send({errorMessage: 'Opps! Something went wrong.'});
            console.log(err)
        })
    }

}