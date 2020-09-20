module.exports = async (_, {}, { models }) => {
    return await models.Project.find();
}