import tw from 'twin.macro';
import { IconButton } from './button/IconButton';

export const AppRightBarDiv = tw.div`
  min-w-8 h-full 
  bg-qtGrey-25
`;

export const AppRightBar = () => {
  return (
    <AppRightBarDiv>
      <IconButton icon="icon-layers" />
      <IconButton icon="icon-git-pull-request" />
      <IconButton icon="icon-message-square" />
      <IconButton icon="icon-share-2" />
    </AppRightBarDiv>
  );
};
