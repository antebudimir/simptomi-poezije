import PropTypes from "prop-types"
import styled from "styled-components"

const Divider = styled.hr`
  margin-top: ${props => props.mb};
  margin-bottom: ${props => props.mb};
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.quaternaryColor};
`

Divider.propTypes = {
  mt: PropTypes.string,
  mb: PropTypes.string,
}

Divider.defaultProps = {
  mt: "32px",
  mb: "32px",
}

export default Divider
