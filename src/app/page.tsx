import Image from "next/image";
import { InstagramIcon, Logo, MailIcon, PhoneIcon } from "~/lib/icons";

export default function HomePage() {
  return (
    <main className="grid place-items-center px-4 text-center">
      <div className="px-4 pb-4 pt-6 md:w-[50ch] md:pt-12">
        <Logo />
      </div>
      <h1 className="hidden">Marije Smak Photography</h1>
      <div className="mb-6 mt-8">
        <Image
          src={"/profiel.jpg"}
          alt="Foto van Marije Smak"
          width={340}
          height={340}
          style={{ borderRadius: "50%" }}
        ></Image>
      </div>
      <div className="max-w-[50ch]">
        <p className="mb-5">
          Ik ben Marije, een gepassioneerde fotografe van 28 jaar. Mijn reis in
          de wereld van fotografie begon met een vierjarige opleiding in (audio)
          visuele vormgeving, aangevuld met diverse cursussen en trainingen in
          de (technische) benadering van fotografie en het editen van foto's en
          video's. Mijn ervaring in de tv-wereld vormt een essentieel deel van
          mijn reis. Daar leerde onder anderen hoe je op een krachtige manier
          een visueel verhaal kan vertellen, creatieve invalshoeken te vinden en
          om emoties vast te leggen op beeld.
        </p>
        <p>
          Met een scherp oog voor detail, een brein vol creativiteit en een
          enorme passie voor het vastleggen van mensen, sta ik met veel energie
          klaar om jou voor mijn lens te vangen.
        </p>
        <h3 className="mb-2 mt-6">Je kunt mij inzetten voor:</h3>
        <ul className="mx-auto mb-8 list-inside list-disc">
          <li>Bruiloften</li>
          <li>Branding shoots</li>
          <li>Commerciële opdrachten</li>
          <li>Speciale evenementen</li>
          <li className="list-none">
            * Overige verzoeken zijn altijd bespreekbaar *
          </li>
        </ul>
        <h2>Neem contact op:</h2>
        <div className="mx-auto my-6 flex w-max gap-4">
          <a
            href="https://www.instagram.com/marijesmak.photography"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a href="tel:+31629247721">
            <PhoneIcon />
          </a>
          <a href="mailto:marije.smak@gmail.com">
            <MailIcon />
          </a>
        </div>
        <div className="mb-6 mt-12 font-mono text-sm">
          {`Website wordt gebouwd door `}
          <span className="underline">
            <a href="https://www.linkedin.com/in/max-strootmann">
              Max Strootmann
            </a>
          </span>
        </div>
      </div>
    </main>
  );
}
