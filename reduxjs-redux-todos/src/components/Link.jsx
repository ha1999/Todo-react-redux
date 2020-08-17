import React from 'react'
import propTypes from 'prop-types'
const Link = ({active, onClick, children})=>(
    <button
            onClick = {onClick}
            disabled = {active}
            style={{
                marginLeft: '4px',
            }}
    >
        {children}
    </button>
)
Link.propTypes = ({
    active: propTypes.bool.isRequired,
    onClick: propTypes.func.isRequired,
    children: propTypes.node.isRequired
})
export default Link