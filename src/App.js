import './App.css';
import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import EntityList from './components/EntityList/EntityList';
import Logo from './assets/logo.jpeg';

function App() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('entities');
  const modData = [
    {
      id: 1,
      name: 'Savanna Project',
      snippet: 'Our proprietary moderator applied by default to all workspaces.',
      agent_id:'test',
      description:'test',
      image:'test'
    }
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://entities-alpha.vercel.app/entity_details');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <div>
      <div className="App-header">
        <div className="custom-header">
          <div className="logo-container">
            <img src={Logo} alt="Logo" className="img-fluid" />
          </div>
          <div className="tabs-container">
            <Nav variant="underline" defaultActiveKey="/entities">
              <Nav.Item>
                <Nav.Link href="/entities" onClick={(e) => { e.preventDefault(); handleTabSelect('entities'); }}>
                  Entities
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="manageTeams" onClick={() => handleTabSelect('manageTeams')} >
                  Manage Teams
                </Nav.Link>
              </Nav.Item>
            </Nav>

          </div>
          <div className="settings-container">
            <i className="bi bi-gear"></i>
          </div>
        </div>
      </div>
      <div className='content_section'>
        {activeTab === 'entities' && (
          <div>
            <div>
              <h2>Entity List</h2>
              <EntityList entities={data} />
            </div>
            <div>
              <h2>Moderators</h2>
              <EntityList entities={modData} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
