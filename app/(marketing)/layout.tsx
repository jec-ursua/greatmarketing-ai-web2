import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { ModalProvider } from '@/components/HireUsModal';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ModalProvider>
  );
}
