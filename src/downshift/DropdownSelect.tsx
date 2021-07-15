import React from 'react';
import { useSelect, UseSelectProps } from 'downshift';
import { items, menuStyles } from './shared';

type ComplexItem = {
    value: string
}

const complexItem:ComplexItem [] = [
    { value: 'one' },
    { value: 'two' }
];


export function DropdownSelect() {
    const useSelectProps: UseSelectProps<string> = { items };
    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        getItemProps
    } = useSelect(useSelectProps);
    return (
        <div>
            <label {...getLabelProps()}>Choose an element:</label>
            <button type="button" {...getToggleButtonProps()}>
                {selectedItem || 'Elements'}
            </button>
            <ul {...getMenuProps()} style={menuStyles}>
                {isOpen &&
                items.map((item, index) => (
                    <li
                        style={
                            highlightedIndex === index
                                ? { backgroundColor: '#bde4ff' }
                                : {}
                        }
                        key={`${item}${index}`}
                        {...getItemProps({ item, index })}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

const itemToString = (item:ComplexItem| null) => item?.value ?? ''

export function ComplexDropdownSelect() {
    const useSelectProps: UseSelectProps<ComplexItem> = { items: complexItem, initialSelectedItem: {value: 'two'}, itemToString };
    const {
        isOpen,
        selectedItem,
        getToggleButtonProps,
        getLabelProps,
        getMenuProps,
        highlightedIndex,
        getItemProps
    } = useSelect(useSelectProps);
    return (
        <div>
            <label {...getLabelProps()}>Choose an element:</label>
            <button type="button" {...getToggleButtonProps()}>
                {selectedItem?.value ?? 'Elements'}
            </button>
            <ul {...getMenuProps()} style={menuStyles}>
                {isOpen &&
                complexItem.map((item, index) => (
                    <li
                        style={
                            highlightedIndex === index
                                ? { backgroundColor: '#bde4ff' }
                                : {}
                        }
                        key={`${item}${index}`}
                        {...getItemProps({ item, index })}
                    >
                        {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}
