const Skill = require('../models/skill');

const index = (req, res) => {
    res.render('skills/index', { 
        skills: Skill.getAll() 
    });
}

const show = function (req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

module.exports = {
    index,
    show
}