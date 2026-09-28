import { PartnerLogo1, PartnerLogo2, PartnerLogo3, PartnerLogo4, PartnerLogo5 } from "../Icons";
import "./Partners.css";

const logos = [PartnerLogo1, PartnerLogo2, PartnerLogo3, PartnerLogo4, PartnerLogo5];

export default function Partners() {
  return (
    <section className="partners" aria-label="Our partners">
      <div className="container">
        <ul className="partners__list">
          {logos.map((Logo, index) => (
            <li key={index}>
              <Logo className="partners__logo" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
