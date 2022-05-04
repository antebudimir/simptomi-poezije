import React from "react"
import SideTagList from "components/SideTagList"
import { RelativeWrapper, SidebarWrapper } from "./index.styled"
// import { Link } from "gatsby"

const Sidebar = ({ tags, postCount }) => {
  return (
    <RelativeWrapper>
      <SidebarWrapper>
        <SideTagList tags={tags} postCount={postCount} />

        {/* ADD Subscribe field */}
      </SidebarWrapper>
    </RelativeWrapper>
  )
}

export default Sidebar
