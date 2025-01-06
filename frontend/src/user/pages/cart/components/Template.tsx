import { InputNumber } from "primereact/inputnumber";
import { useCartContext } from "../../../../context/cartContext/CartContext";
import { ProdcutCartInterface } from "../../../interfaces/ProductCartInterface";


const Template: React.FC<ProdcutCartInterface> = ({
  photo,
  name,
  price,
  quantity,
  id,
  stock,
}) => {
  console.log("Stock test:", stock);
const { updateData } = useCartContext();
  return (
    <div className="flex flex-wrap p-2 align-items-center gap-3">
      <img className="w-4rem shadow-2 flex-shrink-0 border-round" src={photo} alt={name} />
      <div className="flex-1 flex flex-column gap-2 xl:mr-8">
        <span className="font-bold">{name}</span>
        <div className="flex-auto">
          <InputNumber
            inputId="minmax-buttons"
            value={quantity}
            showButtons
            min={0}
            max={stock}
            onChange={(e) => updateData(id, e.value ?? 0)}
          />
        </div>
      </div>
      <span className="font-bold text-900">{price.toFixed(2)}GTQ</span>
    </div>
  );
};

export default Template;