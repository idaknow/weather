"use client";

import { Item } from "@/app/constants/types";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

/*
Note: it's my first time using shadcn/ui, so I just used their combobox
I presume I could have simplified this by using nextjs Autocomplete,
but I used this so I could easily apply styling.
While the only use-case is for locations, I've made it generic to be able to apply to other
future situations.
*/

type ComboBoxProps = {
  className: string;
  placeholder: string;
  emptyMessage: string;
  items: Item[];
  onSelectionChanged: (key: string) => void;
};

export function ComboBox({
  className,
  placeholder,
  emptyMessage,
  items,
  onSelectionChanged,
}: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const onSelect = (currentValue: string) => {
    setOpen(false);
    const newValue = currentValue === value ? "" : currentValue;
    setValue(newValue);
    onSelectionChanged(newValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-[200px] justify-between ${className}`}
        >
          {value
            ? items.find((item) => item.value === value)?.label
            : placeholder}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandEmpty>{emptyMessage}</CommandEmpty>
          <CommandGroup>
            {items.map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={onSelect}
              >
                {item.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === item.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
