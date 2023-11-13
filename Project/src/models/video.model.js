import mongoose, { Schema }  from "mongoose";
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'  //esko export karne se phle use karna padta hai 

const videoSchema = mongoose.Schema(
    {
        videoFile: {
            type: String, //cloud url
            required: true,
           
            
        },
        thumbnail: {
            type: String,
            required: true,    
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            required: true,
        },
        username: {
            type: Schema.Types.ObjectId,
            ref: "User"  
        },

    },
    {
        timestamps: true
    }
)

//khud k bhi plugin likh sakte ho 
videoSchema.plugin(mongooseAggregatePaginate);
const Video = mongoose.model('Video',videoSchema);
export {Video};