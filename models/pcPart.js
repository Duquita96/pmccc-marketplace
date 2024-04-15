import mongoose from 'mongoose';

const pcPartSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

export const PcPart = mongoose.model('pcPart', pcPartSchema);