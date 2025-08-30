'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Type definitions for gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, string | number | boolean>
    ) => void;
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function Analytics() {
  const pathname = usePathname();

  // Track page views on route changes
  useEffect(() => {
    if (GA_MEASUREMENT_ID && typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('event', eventName, {
      ...parameters,
    });
  }
};

// Specific tracking functions for business events
export const trackPhoneClick = (phoneNumber: string) => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: phoneNumber,
    value: 1,
  });
};

export const trackEmailClick = (email: string) => {
  trackEvent('email_click', {
    event_category: 'engagement', 
    event_label: email,
    value: 1,
  });
};

export const trackFormSubmission = (formType: string, serviceType?: string) => {
  trackEvent('form_submission', {
    event_category: 'conversion',
    event_label: formType,
    service_type: serviceType || 'unknown',
    value: 10, // Assign higher value to form submissions
  });
};

export const trackServiceInterest = (serviceName: string) => {
  trackEvent('service_interest', {
    event_category: 'engagement',
    event_label: serviceName,
    value: 2,
  });
};

export const trackPortfolioView = (imageName: string) => {
  trackEvent('portfolio_view', {
    event_category: 'engagement',
    event_label: imageName,
    value: 1,
  });
};
