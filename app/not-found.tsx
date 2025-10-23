import { redirect } from 'next/navigation'; // Server magic pour flips invisibles

export default function NotFound() {
  redirect('/'); // Bounce to home—307 temp par default, ou ajoute { permanent: true } si eternal
  return null; // Ghost mode: Jamais rendu, mais là pour TS happiness
}