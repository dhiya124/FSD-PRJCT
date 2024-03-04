const ToDoModel=require('../models/ToDoModel')

module.exports.getToDo =async (req,res)=>{
    const todo =await ToDoModel.find()
    res.send(todo)
}
module.exports.saveToDo=async (req,res)=>{
    const{text}=req.body
     ToDoModel
     .create({text})
     .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data)
     })
    
}
module.exports.updateToDo=async(req,res)=>{
    const {_id,text}= req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=>res.send("Updated Successfully..."))
    .catch((err)=>console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    try {
        const deletedTodo = await ToDoModel.findByIdAndDelete(_id);
        if (!deletedTodo) {
            return res.status(200).send("Todo not found");
        }
        res.send("Deleted Successfully...");
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
