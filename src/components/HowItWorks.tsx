type CardProps = {
  title: string
  description: string
  img: string | undefined,
  bg?: string | undefined
}

import bg from '../assets/howtoBG.png';
import money from '../assets/money.png';
import recycle from '../assets/recycles.png';
import track from '../assets/track.png';
import whatsapp from '../assets/whatsapp.png';
const Card = ({ title, description, img}: CardProps) => {

  const styles = {
    card: {
      borderRadius: '8px',
      padding: '16px',
      textAlign: 'center' as const
    },
  }

  return (
    <div style={styles.card} className='card'>
      <div className='card_Info'>
        <h3 className='card_Text'>{title}</h3>
        <img src={img} alt={title} className='card_img' />
        <p className='card_Text'>{description}</p>
      </div>
      
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section className="how">
      <h2 className='card_Text'>How It Works</h2>

      <div className="steps">
        <div className='step-group'>
          <Card
            bg={bg}
            title="1 Reduce"
            description="Collect recyclable materials like plastic, cans and paper"
            img={recycle}
          />

          <Card
            bg={bg}
            title="2 Earn"
            description="We collect your box and you get paid"
            img={money}
          />

          <Card
            bg={bg}
            title="3 Track"
            description="Track your recycling and earnings"
            img={track}
          />
        </div>
      </div>
      <a href="https://wa.me/27630254641" target="_blank" className="whatsapp-container">
        <p>Whatsapp us now to join</p>
        <img src={whatsapp} alt="WhatsApp" className='whatsapp'/>
      </a>
    </section>
  )
}