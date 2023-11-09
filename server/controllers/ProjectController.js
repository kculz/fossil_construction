const {Project, User} = require('../models');
const nodemailer = require('nodemailer');

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
        const {userId, email} = req.user;

        console.log(req.user)

        const {title, desc, expectedStartDate, expectedCompletion, location } = req.body;

        await Project.create({
            title,
            desc,
            expectedStartDate,
            expectedCompletion,
            location,
            projectOwnerId: userId
        });

        const subject = `Project ${title} created on Fossil cunstructing`;
        const text = `You have created a new project.\n You will get a notification once it has been approved or rejected.\n\n\nProject Details:\t\t${desc}.\n\nProject location:\t\t ${location}`;
        await sendEmail(email, subject, text);

        return res.status(201).json({msg: 'Project created.'})
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error.')
    }
}


const show = async(req, res) => {
    
    const {userId} = req.user;

    try {
        const project = await Project.findAll({where: {
            projectOwnerId: userId
        }});

        if(project.length < 1){
            return res.status(404).json({msg: "No projects for User."});
        }
        return res.status(200).json({msg: "Data", code: 1, data: project});
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error."});
    }
}

const getProject = async(req, res) => {
    const {id} = req.params;

    try {
        const project = await Project.findByPk(id, {include: [User]});

        if(!project){
            return res.status(404).json({msg: "Resource not found."});
        }
        
        return res.status(200).json({msg: "data", data: project});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error."});
    }
}

const edit = async(req, res) => {

    const {id} = req.params;

    try {
        const {title, desc, expectedStartDate, expectedCompletion,location, isApproved, status, price, isPaid} = req.body;

        const projectExist = await Project.findByPk(id,{
            include: [
                {
                    model: User,
                    attributes: ['email']
                }
            ]
        });
        if(!projectExist){
            return res.status(404).json({msg: "Project not found."})
        }

        projectExist.title = title;
        projectExist.desc = desc;
        projectExist.expectedStartDate = expectedStartDate;
        projectExist.expectedCompletion = expectedCompletion;
        projectExist.location = location;
        projectExist.isApproved = isApproved;
        projectExist.status = status;
        projectExist.price = price;
        projectExist.isPaid = isPaid;

        await projectExist.save()

        let subject;
        let text;

        const email = projectExist.User.email;

        if(projectExist.isApproved === true){
            subject = `Your project with Fossil constructing was approved.`
            text = `Congradulations. Your project will start on payment of ${projectExist.price}. We welcome you to the Fossil Constructing projects.\n log into your account for more details. https://fossilconstruction.binary-apps.com/client-area`
        }else{
            subject = `Project ${projectExist.title} was rejected.`
            text = `Oooops. Your project was rejected! Please contact admin (info@fossilconstructing.com) for more details`
        }
        await sendEmail(email, subject, text);

        return res.status(200).json({msg: "Projects", data: projectExist});

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: "Internal server error."});
    }


}


const remove = async(req, res) => {

    return res.status().json();
}

const sendEmail = async (email, subject, text) => {
    try {
        const transporter = nodemailer.createTransport({
            // Configure the email sending service details (e.g., SMTP, API key, etc.)
            host: 'server207.orangehost.com',
            port: "465",
            secure: true,
            auth: {
                user: 'support@binary-apps.com',
                pass: 'hW0XRM1i1y7(+e'
            }
        });
  
        const mailOptions = {
            from: 'support@binary-apps.com', // Sender's email address
            to: email, // Recipient's email address
            subject: subject,
            text: text
        };
  
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
    } catch (error) {
         console.log('Error sending email:', error);
    }
  };

module.exports = {
    index,
    create,
    show,
    edit,
    remove,
    getProject
}