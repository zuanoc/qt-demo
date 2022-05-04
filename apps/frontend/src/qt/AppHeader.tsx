import tw, { styled, css } from 'twin.macro';
import { ContextIconButton } from './button/ContextIconButton';
import { IconButton } from './button/IconButton';
import { MenuItem } from './button/MenuItem';
import { MainButton } from './button/MainButton';

export const AppHeaderDiv = tw.div`
  flex flex-row 
  min-h-8 bg-qtGrey-25
  mb-px
`;

export const MenuContainerDiv = tw.div`
  flex flex-row
`;

export const ButtonContainerDiv = styled.div([
  tw`
    flex flex-row 
  `,
  css`
    > * {
      ${tw`mr-3`}
    }
  `,
]);

export const AppHeader = () => {
  return (
    <AppHeaderDiv>
      <div tw="flex flex-row">
        <MainButton />
        <MenuContainerDiv>
          <MenuItem name="File" />
          <MenuItem name="Edit" />
          <MenuItem name="View" />
          <MenuItem name="Window" />
        </MenuContainerDiv>
        <ButtonContainerDiv>
          <ContextIconButton icon="icon-corner-up-left" />
          <ContextIconButton disabled={true} icon="icon-corner-up-right" />
          <IconButton icon="icon-refresh-cw" />
        </ButtonContainerDiv>
      </div>
      <div tw="flex flex-grow text-center items-center justify-center">
        <span tw="text-white">Untitled*</span>
      </div>
      <div tw="flex pr-2">
        <IconButton icon="icon-bell" />
        <IconButton icon="icon-sun" />
        <IconButton icon="icon-globe" />
        <IconButton icon="icon-help-circle" />
      </div>
    </AppHeaderDiv>
  );
};
