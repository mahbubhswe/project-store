import { Center, FormControl, Input } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
export default function Search() {
  return (
    <div>
      <Center w="full">
        <FormControl>
          <Input type="text" variant="outline" placeholder="Type here" />
        </FormControl>
      </Center>
    </div>
  );
}
