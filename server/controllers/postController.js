import Post from "../models.Post.js";
import User from "../models/userModel.js";

// CREATE FUNCTIONS //

export const createPost = async (res, req) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findBy(userId);

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturepath,
      picturePath,
      likes: [],
      comments: [],
    });

    await newPost.save();

    const post = await Post.find();

    res.status(200).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

