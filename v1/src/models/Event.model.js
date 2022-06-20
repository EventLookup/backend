import mongoose from 'mongoose';

const Address = new mongoose.Schema({
  street: {
    type: String,
    default: null
  },
  houseNr: {
    type: String,
    default: null
  },
  city: {
    type: String,
    defaul: null
  },
  zip: {
    type: Number,
    default: null
  }
})

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
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


export default mongoose.model('Event', eventSchema);