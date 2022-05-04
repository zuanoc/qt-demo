import tw from 'twin.macro';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { AppLeftBar } from './AppLeftBar';
import { AppRightBar } from './AppRightBar';
import { AppContentRoot } from './AppContentRoot';

export const AppRootDiv = tw.div`
  flex flex-col
  w-screen h-screen
  bg-black
  font-lato
`;

export const AppBodyDiv = tw.div`
  flex flex-grow
`;

const QtApp = () => {
  return (
    <AppRootDiv>
      <AppHeader></AppHeader>
      <AppBodyDiv>
        <AppLeftBar></AppLeftBar>
        <AppContentRoot></AppContentRoot>
        <AppRightBar></AppRightBar>
      </AppBodyDiv>
      <AppFooter></AppFooter>
    </AppRootDiv>
  );
};

export default QtApp;
