import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onFilterSelect: (Order: { value: string; label: string }) => void;
  selectedfilter: { value: string; label: string } | null;
}

const SortSelector = ({ onFilterSelect, selectedfilter }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedfilter?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((Order) => (
          <MenuItem key={Order.value} onClick={() => onFilterSelect(Order)}>
            {Order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
