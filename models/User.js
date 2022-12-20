import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/],
        },
        password: {
            type: String,
            required: true,
            minilength: 3,
        }
    },
    { timestamps: true }
)

export default mongoose.model("User", UserSchema)