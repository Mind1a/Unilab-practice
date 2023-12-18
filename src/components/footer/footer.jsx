import { StyledFooter } from "./footer.styled";
import { payment_logos } from "../../data/payment-logos";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="policies">
        <p>2022. Make Your Burger</p>
        <Link to={'/'}>Privacy Policy</Link>
        <span>|</span>
        <Link to={'/'}>Terms & Conditions</Link>
      </div>
      <ul className="payment-methods">
        {payment_logos.map((item, index) => <li key={index}>
          <img src={item} alt="payment method" />
        </li>)}
      </ul>
    </StyledFooter>
  )
}