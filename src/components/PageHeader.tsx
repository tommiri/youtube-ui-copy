import { Menu } from 'lucide-react';
import logo from '../assets/logo.png';
import Button from './Button';

export default function PageHeader() {
  return (
    <header className="flex justify-between gap-10 lg:gap-20">
      <section className="flex flex-shrink-0 items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>
        <a href="/">
          <img src={logo} className="h-6" />
        </a>
      </section>
    </header>
  );
}
