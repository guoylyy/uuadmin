import React, {Component} from 'react';
import {Layout, Menu, Icon, Table, Breadcrumb, Avatar, message, Dropdown} from 'antd';

const {Header, Sider, Content,Footer} = Layout;

/**
 * Sample Page for Admin
 */
class Car extends Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render () {
        const onClick = ({ key }) => {
            message.info(`Click on item ${key}`);
        };
        const menu = (
            <Menu onClick={onClick}>
                <Menu.Item key="1">1st menu item</Menu.Item>
                <Menu.Item key="2">2nd memu item</Menu.Item>
                <Menu.Item key="3">3rd menu item</Menu.Item>
             </Menu>
        );

        const columns = [{
            title: 'Name',
            dataIndex: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
        }, {
            title: 'Address',
            dataIndex: 'address',
        }];
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        return (
            <Layout>
                <Sider trigger={null}
                       style={{
                           overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                       }}>
                    <div className="logo"/>
                    <div style={{padding:20, textAlign:"center"}}>
                        <Avatar  size={64} icon="user" style={{margin:"0 auto"}}/>
                    </div>
                    <Menu theme="dark"
                          mode="inline"
                          defaultSelectedKeys={['1']}>
                    <Menu.Item key="1"> <Icon type="user"/>
                        <span>nav 1 < /span>
                    </Menu.Item>
                        < Menu.Item key="2"><Icon type="video-camera" / >
                            <span>nav 2 < /span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" / >
                        <span>nav 3 < /span>
                    </Menu.Item>
                    </Menu>
                </Sider>
            <Layout style={{marginLeft: 200}}>
                 <Header style={
                     {
                         background: '#fff', padding:
                             0
                     }
                 }>
                      <Dropdown overlay={menu} className="float-right p-r">
                        <a className="ant-dropdown-link" href="#">
                          <Avatar size={32} icon="user" style={{margin:"0 auto"}}/> <Icon type="down" />
                        </a>
                      </Dropdown>
                 </Header>
                <Breadcrumb style={{padding:"20px"}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                    <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                    <Breadcrumb.Item>An Application</Breadcrumb.Item>
                  </Breadcrumb>
                <Content
                    style={
                        {
                            margin: '10px 16px', padding:
                                24, background:
                                '#fff', minHeight:
                                600,
                        }
                    }
                >
                     <Table columns={columns} dataSource={data} size="middle"/>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
    }
    }

    export default Car;
