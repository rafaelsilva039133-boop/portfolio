import {useTranslations} from 'next-intl';

function Hero(){ 
  const t = useTranslations('Home');
  
  return(
    <section id="home" className="fullscreen flex items-center justify-center">
      <div>
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <a href="#projects">Projetos</a>
      </div>
    </section>
  )
}

export default Hero;