import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CityDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.label}
      </DropdownToggle>
      <DropdownMenu>
      	{props.cities.map((city, i) =>{
      		return (
      			<DropdownItem key={i} onClick={props.handleItemClick}>{city}</DropdownItem>
      		)
      	})}
      </DropdownMenu>
    </Dropdown>
  );
}

export default CityDropdown;