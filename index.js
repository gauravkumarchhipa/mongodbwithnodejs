const mongoose = require("mongoose");

//  mongoose.connect("mongodb://localhost:27017",{
mongoose.connect("mongodb://0.0.0.0:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
).then(() => {
    console.log("Connecctd to mongoDB successfully")
}).catch((err) => {
    console.log(err);
})

const students = new mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number
})
const Studentgls = new mongoose.model("Students", students);

// const adder = async () => {
//     const ss = new Studentgls({
//         name: "Gaurav",
//         workout: true,
//         height: 6
//     })
//     await ss.save();
// }
// adder();

// const adder = async () => {
//     const ss = await Studentgls.create({
//         name: "GAURAV",
//         workout: true,
//         height: 6
//     });
//     console.log(ss);
// }

const adder = async () => {
    // const create = await Studentgls.create({
    //     name: "GAURAV",
    //     workout: true,
    //     height: 6
    // });
    const find = await Studentgls.find();
    const findname = await Studentgls.find({name : {$eq : "GAURAV"}});
    const findheight = await Studentgls.find({height : {$gt : 5}});
    const findheight2 = await Studentgls.find({height : {$gte : 6}});
    const findheight3 = await Studentgls.find({height : {$lt : 6}});
    const findheight4 = await Studentgls.find({height : {$in : [5,7]}});
    const findheight5 = await Studentgls.find({height : {$nin : [5,7]}});
    // console.log(create);
    // console.log(find);
    // console.log(findname);
    // console.log(findheight);
    // console.log(findheight2);
    // console.log(findheight3);
    // console.log(findheight4);
    console.log(findheight5);
}
adder();