import mongoose from 'mongoose';

const Address = new mongoose.Schema({
  street: {
    type: String,
    default: null,
    required: true
  },
  houseNr: {
    type: String,
    default: null,
    required: true
  },
  city: {
    type: String,
    defaul: null,
    required: true
  },
  zip: {
    type: Number,
    default: null,
    required: true
  }
})

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    
  },
  location: Address,
  host: {
    type: String,
    required: true
  }, // Name des Veranstalters, der Veranstaltungsfirma
  creatorUserId: mongoose.Types.ObjectId, // kann ja sein, das man für jemanden etwas erstellt
  time: Date,
  date: Date,
  cancelled: false,
  postponed: false, // verschoben
  eventTypes: {
    enum: ['Konzert', "Musical", "Oper", "Flashmob", "Buchvorstellung", "SitIn", "Grillen", "Meet & Greet"],
    type: String
  },
  participants: [mongoose.Types.ObjectId],
  maxParticipants: Number,
  website: String,
  imageUrl: String
});

eventSchema.pre('save', function(next){
  const splittedTitle = this.title.split(' ');
  // Author muss dann mit evetl. populate ausgelesen und hinzugefügt werden
  const arrayWithAuthor = [...splittedTitle];
  arrayWithAuthor.unshift('Author');

  // generate date
  const date = new Date();
  const day = date.getDate(),
    month = date.getMonth()+1,
    year = date.getFullYear();
  const dateString = `${day}-${month}-${year}`;

  const arrayWithDate = [...arrayWithAuthor];
  arrayWithDate.push(dateString)

  // concat to string
  const joinedWithMinus = arrayWithDate.join('-');
  this.title = joinedWithMinus;
  next()
})

export default mongoose.model('Event', eventSchema);