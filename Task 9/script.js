/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = 250000000;
        this.income = 100000000;
    };
    getSummary() {
        return `${this.title} was written by ${this.director} with ${this.budget} million USD`
    }
    wasExpensive() {
        const balance = this.income - this.budget;
        return balance > 0
        ? `Movie has earned: ${balance}` : `Movie lost: ${balance}`;
    }
}

const avatarMovie = new Movie ("Avatar", "James Cameron", 250);

console.log(avatarMovie);
console.log(avatarMovie.getSummary());
console.log(avatarMovie.wasExpensive());