import React from "react"
import { FiSearch } from "react-icons/fi"
import { Input, Icon, Wrapper } from "./index.styled"

const TextField = ({ ...props }) => {
  return (
    <Wrapper>
      <Input {...props} />

      <Icon>
        <FiSearch />
      </Icon>
    </Wrapper>
  )
}

export default TextField
