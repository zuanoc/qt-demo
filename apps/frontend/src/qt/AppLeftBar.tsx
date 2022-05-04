import tw from 'twin.macro';
import { IconButton } from './button/IconButton';

export const AppLeftBarDiv = tw.div`
  flex flex-col
  min-w-8 h-full 
  bg-qtGrey-25
`;

export const AppLeftBar = () => {
  return (
    <AppLeftBarDiv>
      <div tw="flex-grow">
        <IconButton icon="icon-edit-2" />
        <IconButton icon="icon-crop" />
        <IconButton icon="icon-crosshair" />
        <IconButton icon="icon-eye" />
        <IconButton icon="icon-database" />
      </div>
      <div>
        <IconButton icon="icon-settings" />
      </div>
    </AppLeftBarDiv>
  );
};
