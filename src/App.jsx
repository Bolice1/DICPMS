import { useMemo, useState } from 'react';
import MapComponent from './components/MapComponent.jsx';
import Sidebar from './components/Sidebar.jsx';
import propertiesGeoJSON from './data/properties.js';
import { getAffectedProperties } from './utils/spatial.js';

function App() {
  const [affectedPropertyIds, setAffectedPropertyIds] = useState([]);
  const [drawnLine, setDrawnLine] = useState(null);

  const propertyList = useMemo(
    () => propertiesGeoJSON.features.map((feature) => ({
      id: feature.properties.id,
      name: feature.properties.name,
    })),
    []
  );

  const handleUpdateLine = (lineGeoJSON) => {
    setDrawnLine(lineGeoJSON);
    if (!lineGeoJSON) {
      setAffectedPropertyIds([]);
      return;
    }

    const affectedIds = getAffectedProperties(lineGeoJSON, propertiesGeoJSON);
    setAffectedPropertyIds(affectedIds);
  };

  const handleClear = () => {
    setDrawnLine(null);
    setAffectedPropertyIds([]);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>Road Impact Mapping</h1>
          <p>Draw a road line and see which properties are affected.</p>
        </div>
      </header>

      <main className="layout-grid">
        <section className="map-panel">
          <MapComponent
            propertiesGeoJSON={propertiesGeoJSON}
            affectedPropertyIds={affectedPropertyIds}
            onUpdateLine={handleUpdateLine}
            drawnLine={drawnLine}
          />
        </section>

        <aside className="sidebar-panel">
          <Sidebar
            properties={propertyList}
            affectedPropertyIds={affectedPropertyIds}
            onClear={handleClear}
          />
        </aside>
      </main>
    </div>
  );
}

export default App;
