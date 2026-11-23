// Central image registry. Originals (from the client's Figma) live in references/figma-exports/;
// web-sized copies live in src/assets/img/. Astro converts them to responsive WebP at build time.
import heroMotion from '../assets/img/hero-motion.jpg';
import team from '../assets/img/team.jpg';
import founder from '../assets/img/founder.jpg';
import duo from '../assets/img/duo.jpg';
import introCafe from '../assets/img/intro-cafe.jpg';
import introFood from '../assets/img/intro-food.jpg';
import introCocktail from '../assets/img/intro-cocktail.jpg';
import guru from '../assets/img/guru.jpg';
import guruCard from '../assets/img/guru-card.jpg';
import guruClock from '../assets/img/guru-clock.jpg';
import falken from '../assets/img/falken.jpg';
import trackday from '../assets/img/trackday.jpg';
import pickup from '../assets/img/pickup.jpg';
import jillian from '../assets/img/jillian.jpg';

export const img = {
  heroMotion, team, founder, duo,
  introCafe, introFood, introCocktail,
  guru, guruCard, guruClock, falken, trackday, pickup, jillian,
};
