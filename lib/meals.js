import sql from'better-sqlite3';
const db = sql('meals.db');

export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // simulate a delay of 2 second
  const meals = db.prepare('SELECT * FROM meals').all();  // run for using data from meals.db, all for featch data from meals table
  return meals;
}