import React from 'react'
import DeliveriesHero from '../components/deliveries/DeliveriesHero'
import DeliveriesFeaturesSection from '../components/deliveries/DeliveriesFeaturesSection'
import DeliveriesCourierMapFaqSection from '../components/deliveries/DeliveriesCourierMapFaqSection'
import DeliveriesCTASection from '../components/deliveries/DeliveryFAQ'
import DeliveryFeatures from '../components/deliveries/DeliveryFeatures'
import DeliveryLoyaltyCredit from '../components/deliveries/DeliveryLoyaltyCredit'

const Deliveries = () => {
  return (
    <div>
        <DeliveriesHero/>
        <DeliveriesFeaturesSection/>
        <DeliveriesCourierMapFaqSection/>
        <DeliveryFeatures/>
        <DeliveryLoyaltyCredit/>
        <DeliveriesCTASection/>

    </div>
  )
}

export default Deliveries