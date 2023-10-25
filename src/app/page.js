'use client'
import ActionSection from '@/components/homepage/ActionSection';
import FeatureSection from '@/components/homepage/FeatureSection';
import BannerSection from '@/components/homepage/HomeBanner';
import TestimonialSection from '@/components/homepage/TestimonialSection';


export default function Home() {
  return (
    <div>
      <BannerSection/>
      <FeatureSection/>
      <ActionSection/>
      <TestimonialSection/>
    </div>
  )
}
