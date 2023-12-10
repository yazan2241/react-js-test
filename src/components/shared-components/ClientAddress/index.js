import React from 'react'

const ClientAddress = (props) => {
    const { street, suite, city } = props;
    return (
        <div className="avatar-status d-flex align-items-center">
            <div className="ml-2">
                <div>
                    <div className="avatar-status-name">{street}</div>
                    <span>{suite}</span>
                </div>
                <div className="text-muted avatar-status-subtitle">{city}</div>
            </div>
        </div>
    )
}

export default ClientAddress