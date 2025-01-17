import { NoProductsMessage } from "./styledComponents/NoProductsMessage"
import { NotResults } from "./anim/notResults/NotResults"

const NoProducts: React.FC = () => (
    <div>
        <NoProductsMessage>Sin Resultados</NoProductsMessage>
        <NotResults />
    </div>
);

export default NoProducts;