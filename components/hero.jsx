import {useTranslations} from 'next-intl';
import Button from './button';

function Hero(){ 
  const t = useTranslations('Home');
  
  return(
    <section id="home" className="fullscreen flex items-center justify-center responsive-container text-center">
      <div>
        <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Charis text-(--color-text) '>{t('title')} <span className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Charis text-(--color-secondary)'>Rafael Silva</span> </h1>
        <p className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug font-Charis text-(--color-assistant)'>{t('description')} </p>
        <div className="flex gap-1 mt-3 md:mt-6 justify-center">
          <Button content={{ link: "#projects", text: t('btn1') }} />
          <Button content={{ link: "#about", text: t('btn2') }} />
          <Button content={{ link: "#contact", text: t('btn3') }} />
        </div>
      </div>
    </section>
  )
}

export default Hero;