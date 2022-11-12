import { MenuBlock, MenuBlockName, MenuWrapper } from "./MenuBlocksStyles";
import { blocksList } from "./MenuBlocksData";

const MenuBlocks = () => {
  return (
    <MenuWrapper>
      {blocksList.map((item) => (
        <MenuBlock key={item.blockId} style={{ backgroundColor: `${item.blockColor}` }} >
          {item.blockIcon}
          <MenuBlockName>{item.blockName}</MenuBlockName>
        </MenuBlock>
      ))}
    </MenuWrapper>
  );
}

export default MenuBlocks;