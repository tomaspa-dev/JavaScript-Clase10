'use strict';

/* 
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
 */

//

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// //Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);

// Summary

// - In programming languages, Arguments can be passed by value, or passed by reference.

// - JavaScript works only passing by value.

// - When we pass primitive values, the function works with a value, which is a copy of the original value.

// - When we pass an object, the function works with a value, which is a copy of the reference that address to the spot in the memory where the original object is in the memory (still is not a reference).
