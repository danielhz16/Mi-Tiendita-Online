import styled from "styled-components";
import { useMenuContext } from "../../context/menuContext/MenuContext";


interface PageProps {
  className?: string;
  children: React.ReactNode;
}

const PageComponent: React.FC<PageProps> = ({ className, children }) => {
  const { menuOpen } = useMenuContext();

  return (
    <div className={menuOpen ? `${className} open` : `${className} close`} >
      {children}
    </div>
  );
};

export const Page = styled(PageComponent)`
  display: grid;
  place-items: center;
  height: 100vh;
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  position: relative;
  padding-bottom: 5rem;
 
  
  &::-webkit-scrollbar {
    display: none; 
  }
  &.open {
    width: calc(100% - 20rem);
  }
  &.close {
    width: 100%;
  }
  &.no-grid {
  display: block;
  }
  &.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.column {
    display: flex;
    flex-direction: column;
  }
  &.center-x {
    display: flex;
    justify-content: center;
  }
  &.center-y {
    display: flex;
    align-items: center;
  }
  .search {
    position: absolute;
    width: 100%;
  }
`;
