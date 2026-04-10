function Sidebar({ properties, affectedPropertyIds, onClear }) {
  return (
    <div className="sidebar-card">
      <div className="sidebar-header">
        <h2>Properties</h2>
        <button className="clear-button" onClick={onClear}>
          Clear Line
        </button>
      </div>
      <div className="property-list">
        {properties.map((property) => {
          const isAffected = affectedPropertyIds.includes(property.id);
          return (
            <div key={property.id} className="property-item">
              <div>
                <strong>{property.name}</strong>
                <div className="property-id">ID: {property.id}</div>
              </div>
              <span className={`status-pill ${isAffected ? 'affected' : 'not-affected'}`}>
                {isAffected ? 'Affected' : 'Not Affected'}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
