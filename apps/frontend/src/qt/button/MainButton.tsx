import tw from 'twin.macro';

const MainButtonBtn = tw.button`
  flex flex-row 
  justify-between items-center 
  px-1
  bg-qtYellow 
`;

const MainButtonIconDiv = tw.div`
  text-5xl 
  font-bold
`;

const MainButtonExtraIconDiv = tw.div`
  text-xl
`;

export const MainButton = () => (
  <MainButtonBtn>
    <MainButtonIconDiv>A</MainButtonIconDiv>
    <MainButtonExtraIconDiv className="icon-chevron-down" />
  </MainButtonBtn>
);
