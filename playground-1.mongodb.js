use('abc_restaurant'); // Switch to your database

// Insert a few documents into your reservations collection.
db.getCollection('reservations').insertMany([
  { 'name': 'John Doe', 'table': 5, 'time': new Date('2024-08-18T19:00:00Z') },
  { 'name': 'Jane Doe', 'table': 3, 'time': new Date('2024-08-18T20:00:00Z') }
]);

// Run a find command to view reservations made on a specific date.
const reservationsOnDate = db.getCollection('reservations').find({
  time: { $gte: new Date('2024-08-18'), $lt: new Date('2024-08-19') }
}).count();

console.log(`${reservationsOnDate} reservations occurred on August 18th, 2024.`);
