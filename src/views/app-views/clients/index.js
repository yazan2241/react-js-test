import React, { Component, useState } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
// import userData from "assets/data/user-list.data.json";
import clientService from 'services/ClientService';
import ClientAddress from 'components/shared-components/ClientAddress';
import ClientCompany from 'components/shared-components/ClientCompany';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';

export class ClientList extends Component {

    state = {
        users: [],
        userProfileVisible: false,
        selectedUser: null,
        loading: false,
    }

    deleteUser = userId => {
        this.setState({
            users: this.state.users.filter(item => item.id !== userId),
        })
        message.success({ content: `Deleted user ${userId}`, duration: 2 });
    }

    showUserProfile = userInfo => {
        this.setState({
            userProfileVisible: true,
            selectedUser: userInfo
        });
    };

    closeUserProfile = () => {
        this.setState({
            userProfileVisible: false,
            selectedUser: null
        });
    };

    componentDidMount() {
        this.setState({
            loading: true,
        });
        clientService.getUsers().then(res => {
            this.setState({
                users: res,
                loading: false,
            });
            console.log('res', res);
        });
    }


    render() {
        const { users, userProfileVisible, selectedUser, loading } = this.state;

        const tableColumns = [
            {
                title: 'User',
                dataIndex: 'name',
                render: (_, record) => (
                    <div className="d-flex">
                        <AvatarStatus src={record.img} name={record.name} subTitle={record.email} onNameClick={() => this.props.history.push(`${APP_PREFIX_PATH}/edit-profile/${record.id}`)} />
                    </div>
                ),
                sorter: {
                    compare: (a, b) => {
                        a = a.name.toLowerCase();
                        b = b.name.toLowerCase();
                        return a > b ? -1 : b > a ? 1 : 0;
                    },
                },
            },
            {
                title: 'Address',
                dataIndex: 'address',
                render: (_, record) => {
                    console.log("record", record);
                    <div className='d-flex'>
                        <ClientAddress street={record.address.street} suite={record.address.suite} city={record.address.city} />
                    </div>
                },
                sorter: {
                    compare: (a, b) => a.role.length - b.role.length,
                },
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
                sorter: (a, b) => moment(a.lastOnline).unix() - moment(b.lastOnline).unix()
            },
            {
                title: 'Website',
                dataIndex: 'website',
                sorter: {
                    compare: (a, b) => a.status.length - b.status.length,
                },
            },
            {
                title: 'Company',
                dataIndex: 'company',
                render: (_, record) => (
                    <div className='d-flex'>
                        <ClientCompany name={record.company.name} bs={record.company.bs} />
                    </div>
                ),
                sorter: {
                    compare: (a, b) => a.status.length - b.status.length,
                },
            },
            // {
            // 	title: '',
            // 	dataIndex: 'actions',
            // 	render: (_, elm) => (
            // 		<div className="text-right">
            // 			<Tooltip title="View">
            // 				<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
            // 			</Tooltip>
            // 			<Tooltip title="Delete">
            // 				<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
            // 			</Tooltip>
            // 		</div>
            // 	)
            // }
        ];
        return (
            <>
                {
                    loading ?
                        <Loading cover='page' /> :
                        <Card bodyStyle={{ 'padding': '0px' }} >
                            <Table columns={tableColumns} dataSource={users} rowKey='id' />
                            <UserView data={selectedUser} visible={userProfileVisible} close={() => { this.closeUserProfile() }} />
                        </Card >

                }
            </>
        )
    }
}

export default ClientList
