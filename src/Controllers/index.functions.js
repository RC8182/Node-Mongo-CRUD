const Users=require('../Models/usersSchema');

const methods={};

methods.home= (req, res)=>{
    res.send('Welcome to Node CRUD')
}



methods.postUser= async (req, res)=>{
    const {name, lastName, phoneNumber, email}= req.body;
    const post= Users({
        "name": name,
        "lastName": lastName,
        "phoneNumber": phoneNumber,
        "email": email
    })
    await post.save()
    res.status(200).json({
        message: 'User added successfully',
        body:{
            user:{post}
        }
    })
}

methods.getAllUsers= async (req, res)=>{
    const result= await Users.find()
    res.status(200).json({
        message: 'Users List',
        body: {
            Users: {result}
        }
    })
}

methods.putUser=async (req, res)=>{
    const {name, lastName, phoneNumber, email}= req.body;
    const id= req.params._id
    const toUpdate= await Users.findOne({'_id': id});

    toUpdate.name= name;
    toUpdate.lastName= lastName;
    toUpdate.phoneNumber= phoneNumber;
    toUpdate.email= email;

    await toUpdate.save()
    res.status(200).json({
        message: 'User updates successfully',
        body:{
            User:{toUpdate}
        }
    })

}

methods.deleteUser= async (req, res)=>{
    const id= req.params._id;
         await Users.deleteOne({'_id': id})
         res.status(202).json({
            message: 'User deleted',
            body:{id: id}
         })
}

module.exports=methods;