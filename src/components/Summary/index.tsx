import { Container } from "./styles";
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
  return(
  <Container>
    <div>
      <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="Entradas"/>
      </header>
      <strong>1.000,00</strong>
    </div>
    <div>
      <header>
        <p>Saidas</p>
        <img src={outcomeImg} alt="Saidas"/>
      </header>
      <strong>- 500,00</strong>
    </div>
    <div>
      <header>
        <p>Total</p>
        <img src={totalImg} alt="Total"/>
      </header>
      <strong>500,00</strong>
    </div>
  </Container>
  );
}