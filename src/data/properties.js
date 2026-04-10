const propertiesGeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { id: 'P-001', name: 'Lakeside Manor' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.1005, 51.5165],
            [-0.0975, 51.5165],
            [-0.0975, 51.5149],
            [-0.1005, 51.5149],
            [-0.1005, 51.5165],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { id: 'P-002', name: 'Maple Grove' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.0925, 51.5170],
            [-0.0895, 51.5170],
            [-0.0895, 51.5154],
            [-0.0925, 51.5154],
            [-0.0925, 51.5170],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { id: 'P-003', name: 'Rosewood Estate' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.1045, 51.5124],
            [-0.1015, 51.5124],
            [-0.1015, 51.5108],
            [-0.1045, 51.5108],
            [-0.1045, 51.5124],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { id: 'P-004', name: 'Elm Ridge' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.0865, 51.5145],
            [-0.0835, 51.5145],
            [-0.0835, 51.5129],
            [-0.0865, 51.5129],
            [-0.0865, 51.5145],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { id: 'P-005', name: 'Oakfield Residences' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.0980, 51.5202],
            [-0.0950, 51.5202],
            [-0.0950, 51.5186],
            [-0.0980, 51.5186],
            [-0.0980, 51.5202],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: { id: 'P-006', name: 'Riverside Block' },
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.1065, 51.5191],
            [-0.1035, 51.5191],
            [-0.1035, 51.5175],
            [-0.1065, 51.5175],
            [-0.1065, 51.5191],
          ],
        ],
      },
    },
  ],
};

export default propertiesGeoJSON;
