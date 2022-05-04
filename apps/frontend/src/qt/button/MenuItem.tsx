import tw, { styled, css } from 'twin.macro';

const MenuItemButton = styled.button([
  tw`
    flex 
    items-center justify-center 
    px-4 
    hover:(text-white bg-qtGrey-70)
  `,
  css`
    span {
      ${tw`text-white text-sm font-light`}
    }
  `,
]);

export const MenuItem: React.FunctionComponent<{ name: string }> = ({ name }) => (
  <MenuItemButton>
    <span>{name}</span>
  </MenuItemButton>
);
