import sql from 'better-sqlite3';
const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate a delay of 2 second
    // throw new Error('Failed to fetch meals data'); // simulate an error for testing error handling
    const meals = db.prepare('SELECT * FROM meals').all();  // run for using data from meals.db, all for featch data from meals table
    return meals;
}