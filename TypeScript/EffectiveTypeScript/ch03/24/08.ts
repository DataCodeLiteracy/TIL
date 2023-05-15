interface Coordinate {
  x: number;
  y: number;
}

interface BoundingBox {
  x: [number, number];
  y: [number, number];
}

interface Polygon {
  exterior: Coordinate[];
  holes: Coordinate[][];
  bbox?: BoundingBox;
}
// HIDE
const polygon: Polygon = { exterior: [], holes: [] };
function calculatePolygonBbox(polygon: Polygon) {
  polygon.bbox = { x: [0, 1], y: [2, 3] };
}
// END
const { bbox } = polygon;
if (!bbox) {
  calculatePolygonBbox(polygon); // Fills in polygon.bbox
  // Now polygon.bbox and bbox refer to different values!
  console.log(polygon.bbox, bbox);
}

export default {};
