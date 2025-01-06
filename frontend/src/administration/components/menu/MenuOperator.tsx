import { Container } from './styledComponents/Container';
import { Ul } from './styledComponents/Ul';
import { Link } from 'react-router-dom';
import ThemeToggler from '../../../general/components/themeToggler/ThemeToggler';
import { MenuProps } from './interface/MenuProps';
import { Li } from './styledComponents/Li';
import { items } from './utils/items';
import { useMenuContext } from '../../../context/menuContext/MenuContext';

const MenuOperator: React.FC<MenuProps> = ({ theme, toggleTheme }) => {
    const { menuOpen, toggleMenu} = useMenuContext();

    return (
        <Container className={menuOpen ? 'open' : 'close'}>
           <Ul>
            <i className={`${menuOpen ? 'pi pi-arrow-circle-left' : 'pi pi-arrow-circle-right' } toggle-menu`}
             onClick={toggleMenu} />
            {items.map((item) => (
                <Li key={item.name} className={menuOpen ? '' : 'close'}>
                    <Link to={item.link}>
                    <i className={item.icon} />
                     <span>{item.name}</span>
                    </Link>
                </Li>
            ))}
           </Ul>
           <section className='theme'>
            <h6>Tema</h6>
             <ThemeToggler theme={ theme } toggle={toggleTheme}/>
           </section>
        </Container>
    );
};

export default MenuOperator;
