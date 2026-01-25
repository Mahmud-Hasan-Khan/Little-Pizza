import mongoose from 'mongoose';

const HeroSliderSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, 'Please provide an image URL for this slider item.'],
  },
  title: {
    type: String,
    required: [true, 'Please provide a title for this slider item.'],
  },
  subtitle: {
    type: String,
    required: [true, 'Please provide a subtitle for this slider item.'],
  },
},
  {
    collection: 'heroSliders',
  }
);

export default mongoose.models.HeroSlider || mongoose.model('HeroSlider', HeroSliderSchema);
