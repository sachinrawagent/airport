const mongooose = require('mongoose');

module.exports = () => {
    return mongooose.connect("mongodb+srv://sachin:sachin123@cluster0.unl7m.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true })
}