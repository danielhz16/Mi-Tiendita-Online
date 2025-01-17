 import BestSellers from "./components/BestShellers/BestSellers";
 import Incomes from "./components/incomeToday/Incomes";
 import { Page } from "../../../general/styledComponents/Page";
 import TopUsers from "./components/topUsers/TopUsers";
 import { Button } from "primereact/button";

 const Dashboard: React.FC = () => {
    return (
      <Page>
         <Button label="Ver mensajes de usuarios" onClick={() => window.location.href = 'https://www.tidio.com/panel/inbox/conversations/unassigned/2e073bde61694b62b41856f05b1381df'}
          icon="pi pi-comment" />
        <BestSellers/>
        <Incomes />
        <TopUsers />
       </Page>
    )
 }
export default Dashboard;