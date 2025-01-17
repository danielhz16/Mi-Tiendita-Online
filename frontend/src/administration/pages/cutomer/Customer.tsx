import Table from "../../styledComponents/Table";
import BodyTable from "../../components/bodyTable/BodyTable";
import Head from "./head/Head";
import useAxios from "../../../general/hooks/useAxios/useAxios";
import ItemCustomer from "./itemCustomer/ItemCustomer";
import { CustomerInterface } from "./interfaces/CustomerInterface";

const Customers = () => {
  const { data, loading, error } = useAxios<CustomerInterface[]>(`${import.meta.env.VITE_URL_BACKEND}/getCustomers`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

    return (
        <Table>
            <Head />
            <BodyTable data={data || []} Item={ItemCustomer} lenght={7} />
        </Table>
    );
};

export default Customers;