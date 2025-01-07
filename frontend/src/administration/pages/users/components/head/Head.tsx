const Head: React.FC = () => {
    return (
        <thead>
            <tr>
                <th className="border-round-left">Id</th>
                <th>Correo</th>
                <th>Nombre</th>
                <th>Fecha de nacimiento</th>
                <th>Fecha de registro</th>
                <th>Estado</th>
                <th className="border-round-right">Rol</th>
            </tr>
        </thead>
    );
};

export default Head;