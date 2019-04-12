import React, { Component } from 'react';
import './App.css';
import { Menu, Icon, Button } from 'antd';
import { Slider, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    current: 'mail',
    disabled: false,
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }


  render() {
    const { disabled } = this.state;
    return (
      <div className="App">
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="mail">
            <Icon type="mail" />Navigation One
        </Menu.Item>
          <Menu.Item key="app" disabled>
            <Icon type="appstore" />Navigation Two
        </Menu.Item>
          <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <Button type="primary">
              Green Theme
            </Button>
          </Menu.Item>
        </Menu>
        <div style={{ display: 'flex', width: '100%', height: '90vh', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '800px' }}>
            <Slider defaultValue={30} disabled={disabled} />
            <Slider range defaultValue={[20, 50]} disabled={disabled} />
            Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
