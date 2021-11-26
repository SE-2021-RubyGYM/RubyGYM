const Adv = require('../models/adv');

exports.getAdvs = async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager" && req.position != "HR")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    try{
        const advs = await Adv.find();
        return res
        .json({ success: true, message: 'API OK',result: advs  })
    }
    catch(error){
        return res
        .status(500)
        .json({ success: false, message: 'Internal server error',result: null})
    }
}

exports.getAdvById = async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager" && req.position != "HR")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    const id = req.params.id;
    try{
        const adv = await Adv.findById(id).exec();
        if(!adv){
            return res
            .status(404)
            .json({ success: false, message: 'Advertisement not found',result: null  })
        }
        return res
        .json({ success: true, message: 'API OK',result: adv  })
        
    }
    catch(error){
        return res
        .status(500)
        .json({ success: false, message: 'Internal server error',result: null})
    }
}

exports.createAdv = async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    try{
        const {creator, title,view,time,picture, content} = req.body;
        const adv = new Adv({
            creator,
            title,
            view,
            time,
            picture,
            content, 
        })
        await adv.save();
        res.json({
            status: 200,
            message: "API OK",
            result: null,
        })

    }catch (error) {
        const finalError = {...error}
        if(error instanceof ValidationError){
            const errors = error.errors;
            const keys = Object.keys(errors);
            const errorObject = {}
            keys.map(key => {
                errorObject[key] = errors[key].message
            })
            finalError.status = 400;
            error.message = errorObject
        }
        res.status(finalError.status||500).json({
            status: finalError.status || 500,
            message: error.message || "Internal Error"
        })
    }
}

exports.deleteAdvById = async(req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    const id = req.params.id;
    try{
        const adv = await Adv.findByIdAndDelete(id).exec();
        if(!adv){
            return res
            .status(404)
            .json({ success: false, message: 'Advertisement not found',result: null  })
        }
        return res
        .json({ success: true, message: 'API OK',result: null  })
        
    }
    catch(error){
        return res
        .status(500)
        .json({ success: false, message: 'Internal server error',result: null})
    }
}

exports.updateAdvById = async (req, res) => {
    // if(!req.position || (req.position != "Administrator" && req.position != "Sales manager")) {
    //     return res
    //     .status(401)
    //     .json({ success: false, message: 'Unauthorized',result: null  })
    // }
    const id = req.params.id;
    const {creator, title,view, time, picture, content} = req.body;
    try{
        const adv = await Adv.findByIdAndUpdate(id, {creator,title, view, time, picture, content}).exec();
        if(!adv){
            return res
            .status(404)
            .json({ success: false, message: 'Advertisement not found',result: null  })
        }
        return res
        .json({ success: true, message: 'API OK',result: null  })
        
    }
    catch(error){
        return res
        .status(500)
        .json({ success: false, message: 'Internal server error',result: null})
    }
}