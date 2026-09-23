import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '../components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export default async function MealsPage() {
  const meals = await getMeals();

  return (
    <>
    <header className={classes.header}>
    <h1>Delisious meals, created with passion <span className={classes.highlight}>by you</span></h1>
    <p>Choose your favorite recipe nd cook it yourself, and enjoy it!</p>
    <p className={classes.cta}>
      <Link href="/meals/share" className={classes.ctaLink}>Share your favorite recipe</Link>
    </p>
    </header>
      <main className={classes.main}>
     <MealsGrid meals={meals} />
    </main>
    </>
  );
}