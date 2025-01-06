const Head: React.FC = () => {
    return (
        <thead>
            <tr>
                <th className="border-round-left">Id</th>
                <th>Correo</th>
                <th>Nombre</th>
                <th>Fecha de nacimiento</th>
                <th>Fecha de registro</th>
                <th className="border-round-right">Estado</th>
            </tr>
        </thead>
    );
};

export default Head;