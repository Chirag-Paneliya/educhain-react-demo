import React, { useState, useEffect } from 'react';
import { Table, Input, Spin, Space } from 'antd';
import axios from 'axios';

const { Search } = Input;

const ApplicationTableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://educhain.free.beeceptor.com/applications');
        setData(response.data);
      } catch (err) {
        setError('Failed to retrieve the application list. Please check if the API is working correctly.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Application No',
      dataIndex: 'applicationNO',
      key: 'applicationNO',
      sorter: (x, y) => x.applicationNO - y.applicationNO,
    },
    {
      title: 'Applicant Name',
      dataIndex: 'applicantName',
      key: 'applicantName',
      sorter: (x, y) => x.applicantName.localeCompare(y.applicantName),
    },
    {
      title: 'Application Date',
      dataIndex: 'applicationDate',
      key: 'applicationDate',
      sorter: (x, y) => new Date(x.applicationDate) - new Date(y.applicationDate),
    },
    {
      title: 'Student ID',
      dataIndex: 'studentID',
      key: 'studentID',
    },
    {
      title: 'Paid Amount',
      dataIndex: 'paidAmount',
      key: 'paidAmount',
    },
    {
      title: 'Status (English)',
      dataIndex: 'status_En',
      key: 'status_En',
    },
    {
      title: 'Status (Arabic)',
      dataIndex: 'status_Ar',
      key: 'status_Ar',
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastDate',
      key: 'lastDate',
    },
  ];

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const filteredData = data.filter((app) =>
    app.applicantName.toLowerCase().includes(searchText.toLowerCase()) ||
    app.studentID.includes(searchText) ||
    app.status_En.toLowerCase().includes(searchText.toLowerCase()) ||
    app.status_Ar.toLowerCase().includes(searchText.toLowerCase())
  );

  const handlePaginationChange = (page, pageSize) => {
    setPagination({
      current: page,
      pageSize: pageSize,
    });
  };

  return (
    <div>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Search
          placeholder="Search by Applicant Name, Status, or Student ID"
          onSearch={handleSearch}
          enterButton
        />
        {loading ? (
          <Spin size="large" />
        ) : error ? (
          <div>{error}</div>
        ) : (
          <Table
            columns={columns}
            dataSource={filteredData}
            rowKey="applicationNO"
            pagination={{
              current: pagination.current,
              pageSize: pagination.pageSize,
              total: filteredData.length,
              onChange: handlePaginationChange,
            }}
            scroll={{ x: 'max-content' }}
          />
        )}
      </Space>
    </div>
  );
};

export default ApplicationTableComponent;
