'use client'
import ActionSection from '@/components/homepage/ActionSection';
import FeatureSection from '@/components/homepage/FeatureSection';
import BannerSection from '@/components/homepage/HomeBanner';
import TestimonialSection from '@/components/homepage/TestimonialSection';
import ContactSection from '@/components/homepage/ContactSection'


export default function Home() {
  return (
    <div>
      <BannerSection/>
      <FeatureSection/>
      <ActionSection/>
      <TestimonialSection/>
      <ContactSection/>
    </div>
  )
}
