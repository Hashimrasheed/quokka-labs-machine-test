/* Middleware to check source of request */
const isSourceValid = (req, res, next) => {
    const allowedSources = ['android-app'];
    const sourceHeader = req.headers['source'];

    if (!sourceHeader || !allowedSources.includes(sourceHeader)) {
        return res.status(403).json({ error: 'Invalid request source' });
    }

    next();
}

module.exports = { isSourceValid }