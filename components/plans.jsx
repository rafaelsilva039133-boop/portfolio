import Link from "next/link";

function Plans(){ 
  return(
    <section id="plans" className="fullscreen flex items-center justify-center">
      <h1>Contato</h1>
      <Link href={"/plans"}>Ver Planos Disponiveis</Link>
    </section>
  )
}

export default Plans;