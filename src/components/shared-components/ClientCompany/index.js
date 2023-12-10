import React from 'react'

const ClientCompany = (props) => {
    const { name, bs } = props;
    return (
        <div className="avatar-status d-flex align-items-center">
            <div className="ml-2">
                <div>
                    <div className="avatar-status-name">{name}</div>
                    
                </div>
                <div className="text-muted avatar-status-subtitle">{bs}</div>
            </div>
        </div>
    )
}

export default ClientCompany