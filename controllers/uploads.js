import ErrorResponse from "../utils/ErrorResponse.js";

export const uploadsResponse = (req, res) => {
    const { file } = req;
    if (!file) throw new ErrorResponse('Please upload a file', 400);
    res.json({ location: `http://localhost:4000/${file.filename}` });
};
