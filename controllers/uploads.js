import ErrorResponse from "../utils/ErrorResponse.js";

export const uploadsResponse = (req, res) => {
    const { file } = req;
    if (!file) throw new ErrorResponse('Please upload a file', 400);
    res.json({ location: `http://localhost:4000/${file.filename}` });
};


export const uploadsResponseS3 = (req, res, next) => {
    console.log(req.file);
    console.log(req.file.location);
    if (!req.file) throw new ErrorResponse('Please upload a file', 400);
    res.json({ 
        location: req.file.location,
        data: req.files,
        msg: 'Successfully uploaded ' + req.file.originalname + ' files!'
    });
};