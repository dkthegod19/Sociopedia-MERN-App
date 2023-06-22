import Post from "../Models/Post";
import User from "../Models/User";

/* Create */
export const createPost=async(req,res)=>{
    try{
        const { userId, description, picturePath}=req.body;
        const user=await User.findById(userId);
        const newPost= new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: []
        });
        await newPost.save();

        const post=Post.find();
        res.status(201).json(post);
    }catch(err){
        res.status(409).json({message: err.message});
    }
}


/* Read */
export const getFeedPosts=async(req,res)=>{
    try{
        const post=await Post.find();
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}


export const getUserPosts=async(req,res)=>{
    try{
        const {userId}=req.params;
        const post=await Post.findById(userId);
        res.status(200).json(post);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

/* Update */
export const likePost=async(req,res)=>{
    try{
        const { id }=req.params;
        const {userId }=req.body;
        const post=await Post.findById(id);
        const isliked=post.likes.get(userId);

        if(isliked){
            post.likes.delete(userId);
        }
        else{
            post.likes.set(userId,true);
        }

        const updatePost=await Post.findByIdAndUpdate(
            id,
            {likes: post.likes},
            {new :true},
        );
        res.status(200).json(updatePost);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}