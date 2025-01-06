import { Container } from "./styledComponents/Container";
import useAxios from "../../../../../general/hooks/useAxios/useAxios";
import { Flex } from "../../../../../general/styledComponents/Flex";

interface IncomeData {
  total: number;
}

const Incomes: React.FC = () => {
  const { data } = useAxios<IncomeData>(`${import.meta.env.VITE_URL_BACKEND}/incomeToday`);
  const { data: incomeMonth } = useAxios<IncomeData>(`${import.meta.env.VITE_URL_BACKEND}/totalIncomeMonth`);
  console.log(data);

  return (
    <Flex>
      <Container>
        <strong>INGRESOS HOY</strong>
        <span>{data ? data.total : 0}<span>GTQ</span></span>
      </Container>
      <Container>
        <strong>INGRESOS DEL MES</strong>
        <span>{incomeMonth ? incomeMonth.total : 0}<span>GTQ</span></span>
      </Container>
    </Flex>
  );
};

export default Incomes;
