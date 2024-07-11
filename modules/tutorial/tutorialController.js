
const tutorialController = {};
const tutorialService = require('./tutorialService');

tutorialController.userController =  async (req,res)=>{

    try{
        const { body : 
                {
                title,
                description,
                published  
            } 
        } = req;

        const tutorial = {
            title: title,
            description : description,
            published : true
        }
    
        let tutorialCreate = await tutorialService.createUser(tutorial);
        if(tutorialCreate){
            return res.status(200).json({
                data: {
                    title: tutorialCreate.title,
                    description: tutorialCreate.description,
                    published: tutorialCreate.published,
                },
                msg: ("SUCCESS"),
                status: true
            });
        }
        else{
            return res.status(201).json({
                msg: ("SUCCESS"),
                status: true
            });
        }
    }
    catch (error) {
        return res.status(400).json({
            errors: { msg: ("Some error occurred while creating the Tutorial.") },
            status: false,
        });
    }

}

module.exports = tutorialController;
  