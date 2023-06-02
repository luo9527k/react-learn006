import React from 'react';
import './Task.less';
//解构ANTD的组件
import {
  DatePicker,
  Button,
  Tag,
  Table,
  Popconfirm,
  Modal,
  Form,
  Input,
  Calendar,
  theme,
} from 'antd';

class Task extends React.Component {
  // 表格数据
  columns = [
    {
      title: '编号',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: '作品',
      dataIndex: 'title',
      align: 'center',
    },
    {
      title: '作者',
      dataIndex: 'author',
      align: 'center',
    },
    {
      title: '完成时间',
      dataIndex: 'time',
    },
    {
      title: '状态',
      dataIndex: 'state',
      align: 'center',
      //text表示当前这一列，record这一行的完整数据
      render: (text, record) => {
        return text === 0 ? '未完成' : '已完成';
      },
    },
    {
      title: '操作',
      align: 'center',
      //对数据进行操作使用render函数进行渲染
      render: (_, record) => {
        const { state } = record;
        return (
          <>
            <Popconfirm
              title="此操作为删除"
              description="您确认需要删除"
              onConfirm={confirm}
              // onCancel={cancel}
              okText="是"
              cancelText="否"
            >
              <Button danger size="small">
                删除
              </Button>
            </Popconfirm>
            {state !== 1}
            {
              <Popconfirm
                title="确认"
                onConfirm={confirm}
                // onCancel={cancel}
                okText="是"
                cancelText="否"
              >
                <Button size="small">完成</Button>
              </Popconfirm>
            }
          </>
        );
      },
    },
  ];
  //编写一些数据
  state = {
    tableData: [
      {
        id: 1,
        title: '泰酷了',
        author: '王林凯',
        state: 1, //完成状态
        time: '2023-6-1',
      },
      {
        id: 2,
        title: '你干嘛',
        author: '蔡徐坤',
        state: 0, //完成状态
        time: '2023-5-29',
      },
      {
        id: 3,
        title: '九转大肠',
        author: '姜涛',
        state: 1, //完成状态
        time: '2023-5-28',
      },
    ],
    tableLoding: false,
    moduleVisible: false,
  };

  closeModal = () => {
    this.setState({
      moduleVisible: false,
    });
  };

  //添加任务
  submit = () => {};
  render() {
    //解构值
    const { tableData, tableLoading, moduleVisible } = this.state;
    return (
      <>
        <div className="task-box">
          {/* 头部 */}
          <div className="header">
            <div className="title">TASK管理系统</div>
            <Button
              type="primary"
              onClick={() => {
                this.setState({
                  moduleVisible: true,
                });
              }}
            >
              新增任务
            </Button>
          </div>
          <div className="tag-box">
            <div className="tag">
              <Tag color="blue">全部</Tag>
              <Tag color="volcano">未完成</Tag>
              <Tag color="purple">已完成</Tag>
            </div>
            <div className="time">
              <DatePicker />
            </div>
          </div>
          {/* 表格 */}
          <Table
            dataSource={tableData}
            columns={this.columns}
            loading={tableLoading}
            rowKey="id"
          />
          {/* 对话框&表单 */}
          <Modal
            title="新增任务"
            open={moduleVisible}
            keyboard={true}
            okText="确认提交"
            onCancel={this.closeModal}
            onOk={this.submit}
          >
            <Form>
              <Form.Item>
                <Input.TextArea
                  rows={5}
                  style={{ resize: 'none' }}
                ></Input.TextArea>
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </>
    );
  }
}
export default Task;
