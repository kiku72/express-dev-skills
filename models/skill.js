const skills = [
    {
        id: 1,
        language: 'html',
        proficiency: 'ok'
    },
    {
        id: 2,
        language: 'css',
        proficiency: 'ok'
    },
    {
        id: 3,
        language: 'javascript',
        proficiency: 'atrocious'
    },
    {
        id: 4,
        language: 'japanese',
        proficiency: 'good enough'
    }
];

function getAll() {
    return skills;
}

function getOne(id) {
    id = Number(id);
    return skills.find(skill => skill.id === id);
}

module.exports = {
    getAll,
    getOne
};