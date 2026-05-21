import {useTranslations} from 'next-intl';
import Button from './button';
import Image from 'next/image';

function Hero(){ 
  const t = useTranslations('Home');
  
  return(
    <section id="home" className="fullscreen flex items-center justify-center responsive-container text-center">
      <div>
        <div className="w-32 h-32 sm:w-54 sm:h-54 2xl:h-68 2xl:w-68 rounded-full overflow-hidden relative shrink-0 mx-auto flex items-center">
          <img
            src="/profile.png"
            alt="Picture"
          />
        </div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Charis text-(--color-text) '>{t('title')} <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-Charis text-(--color-secondary)'>Rafael</span> </h1>
        <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug font-Charis text-(--color-assistant)'>{t('description')} </p>
        <div className="flex flex-col w-min text-nowrap mx-auto gap-1 mt-3 md:mt-6 md:flex-row">
          <Button content={{ link: "#projects", text: t('btn1') }} />
          <Button content={{ link: "#about", text: t('btn2') }} />
          <Button content={{ link: "#contact", text: t('btn3') }} />
        </div>
      </div>
    </section>
  )
}

export default Hero;