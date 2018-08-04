const config = require('../config');
let starships = require('../starships');

const appRouter = (app) => {
    // GET ALL starshipS
    app.get('/starships', (req, res) => {
        console.log('Get all starships');

        if(starships && starships.length) {
            res.send({
                status: config.STATUS.OK,
                message: starships,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find any starship',
            });
        }   
    });

    // GET starship DETAILS
    app.get('/starships/:id', (req, res) => {
        let starship = null;
        console.log('Get starship', req.params.id);

        if(starships && starships.length) {
            starship = starships.filter((starship) => ('' + starship.id) === req.params.id);
        }
        if(starship) {
            res.send({
                status: config.STATUS.OK,
                message: starship[0],
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find any starship',
            });
        }   
    });

    // UPDATE starship
    app.put('/starships/:id', (req, res) => {
        let starship = null;
        console.log('update starship', req.body);

        if(starships && starships.length) {
            starship = starships.filter((starship) => ('' + starship.id) === req.params.id);
        }

        if(starship[0]) {
            // starships[req.params.id] = req.body;
            starships = starships.map((s) => {
                return ('' + s.id) === req.params.id ? req.body : s;
            })

            res.send({
                status: config.STATUS.OK,
                message: req.body,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not find starship for update',
            });
        }


    });
    
    // REMOVE starship
    app.delete('/starships/:id', (req, res) => {
        console.log('Remove starship', req.params.id);
        starships = starships.filter((starship) => ('' + starship.id) !== req.params.id);

        res.send({
            status: config.STATUS.OK,
            message: 'starship removed',
        });
    });

    // ADD starship
    app.post('/starships/add', (req, res) => {
        const maxIndex = Math.max.apply(Math,starships.map((o) => o.id));
        console.log('Add starship', req.body, maxIndex);
        let starship = req.body;
        starship.id = maxIndex + 1;

        starships.push(starship);

        if(starships[starships.length - 1] === starship) {
            res.send({
                status: config.STATUS.OK,
                message: starship,
            });
        } else {
            res.send({
                status: config.STATUS.ERROR,
                message: 'Could not add starship',
            });
        }
    });
}

module.exports = appRouter;