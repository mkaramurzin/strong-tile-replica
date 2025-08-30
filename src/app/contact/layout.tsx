import type { Metadata } from 'next';
import { businessConfig } from '../../config/business';

export const metadata: Metadata = {
  title: `Contact ${businessConfig.brand.name} - Free Flooring Estimates in ${businessConfig.location.fullLocation}`,
  description: `Contact ${businessConfig.brand.name} for free tile installation and flooring estimates in ${businessConfig.location.fullLocation}. Call ${businessConfig.contact.phone.display} or fill out our form. Serving ${businessConfig.location.serviceAreas.join(", ")} with precision tile work and organized job sites.`,
  keywords: [
    'contact flooring contractor',
    'free flooring estimate',
    'tile installation quote',
    businessConfig.location.city + ' tile contractor',
    businessConfig.contact.phone.display,
    'Vancouver flooring estimate',
    'tile repair quote',
    'flooring consultation'
  ],
  openGraph: {
    title: `Contact ${businessConfig.brand.name} - Free Flooring Estimates in ${businessConfig.location.fullLocation}`,
    description: `Get your free estimate today by contacting us directly or filling out our form below`,
    url: 'https://vantatileflooring.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
