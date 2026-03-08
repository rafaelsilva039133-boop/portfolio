import Arrow from "./arrow";

function Button({content: {link, text}}) {
  return (
    <a className="text-sm sm:text-lg md:text-xl leading-relaxed font-Inter text-(--color-secondary) font-semibold hover:text-amber-950 transition-colors duration-600 flex gap-1 md:gap-3 items-center" href={link} >
      <Arrow/> {text}
    </a>
  )
}

export default Button;