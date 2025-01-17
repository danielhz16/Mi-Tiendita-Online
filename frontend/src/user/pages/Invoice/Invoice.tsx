import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // Importa autoTable
import useAxios from '../../../general/hooks/useAxios/useAxios';
import { ProductsInterface, OrderInterface } from './interfaces/InvoiceData';
import { useParams } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Page } from '../../../general/styledComponents/Page';
import { Tanks } from './anim/tanks/Tanks';
import logo from '../../../assets/logoLight - copia.png';
import { Flex } from '../../../general/styledComponents/Flex';
import { routes } from '../../../routes/routes';
import { useNavigate } from 'react-router-dom';

const Invoice: React.FC = () => {
  const navigate = useNavigate();
  const { id_order } = useParams();
  const { data: main } = useAxios<OrderInterface>(
    `${import.meta.env.VITE_URL_BACKEND}/getDataInvoice/${id_order}`
  );
  const { data: products } = useAxios<ProductsInterface[]>(
    `${import.meta.env.VITE_URL_BACKEND}/getOrderDetails/${id_order}`
  );
 console.log(products)
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor(0, 123, 255); // Color para el título
    doc.text('Factura', 105, 20, null, null, 'center');

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`ID de la orden: ${main?.id_order}`, 10, 30);
    doc.text(`A nombre de: ${main?.full_name}`, 10, 40);

    const tableStartY = 50; // Ajustar la tabla sin el logo

    const tableColumn = ['Producto', 'Cantidad', 'Precio', 'Subtotal'];
    const tableRows =
    Array.isArray(products) && products.length > 0
      ? products.map((product) => [
          product.name,
          product.quantity,
          `${product.price} GTQ`,
          `${product.subtotal} GTQ`,
        ])
      : [];
  

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: tableStartY,
      theme: 'grid',
      headStyles: {
        fillColor: [0, 123, 255], // Color de fondo para los encabezados
        textColor: [255, 255, 255], // Texto blanco en los encabezados
        fontSize: 10,
        fontStyle: 'bold',
        halign: 'center',
      },
      bodyStyles: {
        fontSize: 10,
        halign: 'center',
      },
      margin: { top: 10 },
    });

    // Total
    doc.setFontSize(14);
    doc.setTextColor(0, 123, 255); // Color para el total
    doc.text(`Total: ${main?.total} GTQ`, 10, doc.lastAutoTable.finalY + 10);

    // Pie de página
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100); // Color gris para el pie de página
    doc.text('Gracias por su compra', 10, doc.lastAutoTable.finalY + 20);
    doc.text('Whatsapp: +502 45523577', 10, doc.lastAutoTable.finalY + 30);

    // Agregar el logo solo en la parte inferior
    const pageHeight = doc.internal.pageSize.height;
    const logoHeight = 40;
    const logoPositionY = pageHeight - logoHeight - 10; // Coloca el logo 10 unidades antes del borde inferior
    doc.addImage(logo, 'PNG', 10, logoPositionY, 40, logoHeight);

    doc.save('factura.pdf');
  };

  return (
    <Page>
      <Tanks />
      <Flex>
        <Button label="Descargar Comprobante de Pago" onClick={generatePDF} severity="success" icon="pi pi-download" />
        <Button label="Ir a la tienda" onClick={() => navigate(routes.home)} icon="pi pi-home" />
      </Flex>
    </Page>
  );
};

export default Invoice;
