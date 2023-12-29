import { Schema, model, models } from 'mongoose';

const promptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  prompt:{
    type: String,
    required: [true, 'Quote is required']
  },
  tag:{
    type: String,
    required: [true, 'Quote is required']
  }
});
const Prompt = models.Prompt || model('Prompt', promptSchema);
export default Prompt;