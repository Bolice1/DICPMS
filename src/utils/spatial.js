import booleanIntersects from '@turf/boolean-intersects';

export function getAffectedProperties(lineGeoJSON, propertiesGeoJSON) {
  if (!lineGeoJSON || !propertiesGeoJSON) {
    return [];
  }

  return propertiesGeoJSON.features
    .filter((property) => booleanIntersects(lineGeoJSON, property))
    .map((property) => property.properties.id);
}
