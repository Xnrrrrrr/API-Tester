const Name = require('./Model');

const createName = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400);
        throw new Error(`Enter a name.`)
    }
    const info = await Name.create({ name });

    res.status(200).json({ name: info });
}

module.exports ={
    createName
}