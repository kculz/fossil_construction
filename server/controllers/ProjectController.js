const {Project} = require('../models');


const index = async(req, res) => {

    return res.status().json();
}

const create = async(req, res) => {
    try {
        const {userId} = req.user;

        const {title, desc, expectedStartDate, expectedCompletion, location } = req.body;

        await Project.create({
            title,
            desc,
            expectedStartDate,
            expectedCompletion,
            location,
            projectOwnerId: userId
        });

        return res.status(201).json({msg: 'Project created.'})
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error.')
    }
    return res.status().json();
}


const show = async(req, res) => {

    return res.status().json();
}


const edit = async(req, res) => {

    return res.status().json();
}


const remove = async(req, res) => {

    return res.status().json();
}

module.exports = {
    index,
    create,
    show,
    edit,
    remove
}