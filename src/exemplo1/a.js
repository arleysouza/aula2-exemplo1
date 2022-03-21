class Matematica{
    somar(req,res){
        res.send("somar");
    }

    subtrair(req,res){
        res.send("subtrair");
    }
}

module.exports = Matematica;