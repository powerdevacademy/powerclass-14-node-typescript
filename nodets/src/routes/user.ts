import express from 'express';
import {getConnection, getRepository} from 'typeorm';

import {User} from '../entity/User';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const conn = await getConnection();
        const repo = conn.getRepository(User);
        
        const users = await repo.find({relations: ["scope"]});

        res.json( users );
        return;
    } catch (err) {
        res.status(500).json({error: "Erro interno de servidor. Deu ruim."});
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try{
        const repo = getRepository(User);

        const user = await repo.findOne(id, {relations: ["scope"]});

        res.json({ user });
        return;
    } catch (err) {
        res.status(500).json({error: "Erro interno de servidor. Deu ruim."});
    }
});

router.post('/', async (req, res) => {
    const {body} = req;

    try{
        const repo = getRepository(User);
        const user = new User();
        user.name = body.name;
        user.email = body.email;
        user.username = body.username;
        user.password = body.password;

        const saved = await repo.save(user);

        res.json({message: "Usuario criado com sucesso", data: saved});
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({error: "Erro interno de servidor. Deu ruim."});
    }

})


export default router;