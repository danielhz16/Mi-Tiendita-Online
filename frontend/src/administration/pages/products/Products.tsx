import Table from '../../styledComponents/Table';
import { Page } from '../../../general/styledComponents/Page';
import Body from '../../components/bodyTable/BodyTable';
import Head from './components/head/Head';
import { useProductsContext } from '../../../context/productsCotext/ProductsContext';
import ItemProduct from './components/itemProducts/ItemProduct';

const Products = () => {
  const { data, loading, error } = useProductsContext();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Page>
      <Table>
        <Head />
        <Body data={data} Item={ItemProduct} lenght={5} /> 
      </Table>
    </Page>
  );
};

export default Products;
