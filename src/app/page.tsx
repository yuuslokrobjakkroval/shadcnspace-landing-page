
'use client'

import Footer from '@/components/shadcn-space/blocks/footer-02/footer'
import AgencyHeroSection from '@/components/shadcn-space/blocks/hero-01/index'



export default function Page() {
  return (
    <div>

        {/* hero-01 */}
        <section>
          <AgencyHeroSection />
        </section>
    

        {/* footer-02 */}
        <section>
          <Footer />
        </section>
    
    </div>
  )
}
