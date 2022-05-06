import React from "react"
import _ from "lodash"
import { Link } from "gatsby"
import { Title, Wrapper, Tag } from "./index.styled"

import { v4 as uuidv4 } from "uuid"

const SideTagList = ({ tags, postCount }) => {
  return (
    <Wrapper>
      <Title>OZNAKE</Title>

      <ul>
        <Tag>
          <Link to="/oznake" title="Pogledaj sve postove">
            sve ({postCount})
          </Link>
        </Tag>

        {_.map(tags, tag => (
          <Tag key={uuidv4()}>
            <Link
              to={`/oznake?q=${tag.fieldValue}`}
              title={`Pogledaj sve postove s oznakom ${tag.fieldValue}`}
            >
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </Tag>
        ))}
      </ul>
    </Wrapper>
  )
}

export default SideTagList
