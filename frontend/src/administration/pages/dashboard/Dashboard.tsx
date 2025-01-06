 import BestSellers from "./components/BestShellers/BestSellers";
 import Incomes from "./components/incomeToday/Incomes";
 import { Page } from "../../../general/styledComponents/Page";
 import TopUsers from "./components/topUsers/TopUsers";

 const Dashboard: React.FC = () => {
    return (
      <Page>
        <BestSellers/>
        <Incomes />
        <TopUsers />
       </Page>
    )
 }
export default Dashboard;