import React from "react"
import { RelativeWrapper, SidebarWrapper } from "./index.styled"
import SideTagList from "components/SideTagList"
import Subscribe from "components/Subscribe"

const Sidebar = ({ tags, postCount }) => {
  return (
    <RelativeWrapper>
      <SidebarWrapper>
        <SideTagList tags={tags} postCount={postCount} />

        <Subscribe />
      </SidebarWrapper>
    </RelativeWrapper>
  )
}

export default Sidebar
