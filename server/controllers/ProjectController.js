const { Op } = require('sequelize');
const {Project, User} = require('../models');


const index = async(req, res) => {

    try {

        const resi = await Project.findAll({
            include: [User]
        });
        
        return res.status(200).json({data: resi});

    } catch (error) {
        console.log(error)

        return res.status(500).json(error);
        
    }

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
    
    const {userId} = req.user;

    try {
        const project = await Project.findAll({where: userId});

        if(project.length < 1){
            return res.status(404).json({msg: "No projects for User."})
        }
        return res.status(200).json({msg: "Data found", code: 1, data: project})
        
    } catch (error) {
        console.log(error);
    }

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