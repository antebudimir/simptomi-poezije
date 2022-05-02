import React from "react"
import styled from "styled-components"
import SideTagList from "components/SideTagList"
// import { Link } from "gatsby"

const RelativeWrapper = styled.div`
  position: relative;
`

const SidebarWrapper = styled.aside`
  position: absolute;
  top: 0;
  right: -40%;

  @media (max-width: 1300px) {
    display: none;
  }
`

const Sidebar = ({ tags, postCount }) => {
  return (
    <RelativeWrapper>
      <SidebarWrapper>
        <SideTagList tags={tags} postCount={postCount} />

        {/* Subscribe */}
      </SidebarWrapper>
    </RelativeWrapper>
  )
}

export default Sidebar
