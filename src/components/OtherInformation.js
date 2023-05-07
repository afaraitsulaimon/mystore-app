import React from 'react'
import { OtherInformationContainer,
    FAQHolder,
    OnlinePaymentServHolder,
    HomeDeliveryOptHolder} from '../assets/styles/OtherInformationStyles'
import DeliveryImage from '../assets/images/deliveryImage.jpg'
import FaqImage from '../assets/images/faqImage.jpg'
import PaymentImage from '../assets/images/paymentImage.jpg'

const OtherInformation = () => {
  return (
    <OtherInformationContainer>

         <FAQHolder>
            <div className='upperContent'>
                <span>Frequently Asked Questions</span>
                <span>Updates on safe Shopping in our Stores</span>
            </div>
            <div className='imageHolder'>
            <img src={FaqImage} alt='faq'/>
            </div>

         </FAQHolder>

         <OnlinePaymentServHolder>
         <div className='upperContent'>
                <span>Online Payment Process</span>
                <span>Updates on safe Shopping in our Stores</span>
            </div>
            <div className='imageHolder'>
            <img src={PaymentImage} alt='faq'/>

            </div>
         </OnlinePaymentServHolder>

         <HomeDeliveryOptHolder>
         <div className='upperContent'>
                <span>Home Delivery Options</span>
                <span>Updates on safe Shopping in our Stores</span>
            </div>
            <div className='imageHolder'>
            <img src={DeliveryImage} alt='faq'/>

            </div>
         </HomeDeliveryOptHolder>

        </OtherInformationContainer>
  )
}

export default OtherInformation